import { useEffect, useRef } from "react"
import { io } from "socket.io-client"
import { HOST } from "../constants/routes"
import userStore from "../store"

const useSocket = (user) => {
    const socket = useRef(null)

    useEffect(() => {
        if (user) {
            if (!user?.userId) return;
            console.log("Connecting with userId:", user.userId)
            console.log("SOCKET USER:", user)
            socket.current = io(HOST, {
                withCredentials: true,
                query: { userId: user?.userId }
            })

            socket.current.on("connect", () => {
                console.log("Connected to socket server")
            })

            const handleReceiveMessage = (message) => {
                const { selectedChatType, selectedChatData, addMessage } = userStore.getState()
                if (
                    selectedChatType !== null &&
                    (
                        selectedChatData._id === message.sender._id || selectedChatData._id === message.receiver._id
                    )
                ) {
                    console.log("message", message)
                    addMessage(message)
                }
            }

            socket.current.on("receiveMessage", handleReceiveMessage)

            return () => {
                socket.current.off("receiveMessage", handleReceiveMessage)
                socket.current.disconnect()
            }
        }
    }, [user?.userId, user])

    return socket
}

export default useSocket