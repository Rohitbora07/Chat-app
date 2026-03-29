import { Server as socketIOServer } from "socket.io"
import Message from "./models/message.model.js"

const setUpSocket = (server) => {
    const io = new socketIOServer(server, {
        cors: {
            origin: process.env.CLIENT_URL,
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
            credentials: true,
        }
    })

    const userSocketMap = new Map()

    const disconnectUser = (socket) => {
        console.log(`Client Disconnected: ${socket.id}`)
        for (const [userId, socketId] of userSocketMap.entries()) {
            if (socketId === socket.id) {
                userSocketMap.delete(userId)
                break
            }
        }
    }

    const sendMessage = async (message) => {
        console.log("Incoming message:", message)
        const senderSocketId = userSocketMap.get(message.sender)
        const receiverSocketId = userSocketMap.get(message.receiver)
        if (!message.sender) {
            console.log("❌ ERROR: sender missing", message)
            return
        }

        const createdMessage = await Message.create(message)

        const messageData = await Message.findById(createdMessage._id)
            .populate("sender", " _id email firstName lastName userName profileImage")
            .populate("receiver", " _id email firstName lastName userName profileImage")

        if (senderSocketId) {
            io.to(senderSocketId).emit("receiveMessage", messageData)
        }
        if (receiverSocketId) {
            io.to(receiverSocketId).emit("receiveMessage", messageData)
        }
    }



    io.on("connection", (socket) => {
        const userId = socket.handshake.query.userId

        if (userId) {
            userSocketMap.set(userId, socket.id)
            console.log(`User Connected: ${userId} with socket ID: ${socket.id}`)
        } else {
            console.log(`User ID not provided during connection.`)
        }

        socket.on("sendMessage", sendMessage)
        socket.on("disconnect", () => disconnectUser(socket))

    })

}

export default setUpSocket