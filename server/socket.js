    import { Server as socketIOServer} from "socket.io"

    const setUpSocket = (server) => {
        const io =  new socketIOServer(server,{
            cors:{
                origin:process.env.CLIENT_URL,
                methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
                credentials: true,
            }
        })

        const userSocketMap = new Map()

        const disconnectUser = (socket) => {
            console.log(`Client Disconnected: ${socket.id}`)
            for( const [userId, socketId] of userSocketMap.entries() ){
                if(socketId === socket.id){
                    userSocketMap.delete(userId)
                    break
                }
            }
        }

        io.on("connection",(socket) => {
            const userId = socket.handshake.query.userId

            if(userId){
                userSocketMap.set(userId, socket.id)
                console.log(`User Connected: ${userId} with socket ID: ${socket.id}`)
            }else{
                console.log(`User ID not provided during connection.`)
            }

            socket.on("disconnect",()=> disconnectUser(socket))

        })

    }

    export default setUpSocket