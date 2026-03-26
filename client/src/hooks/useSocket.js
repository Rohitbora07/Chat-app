import { useEffect, useRef } from "react"
import { io } from "socket.io-client"
import { HOST } from "../constants/routes"

const useSocket = (user) => {
    const socket = useRef(null)

    useEffect(() => {
        if (user) {
            socket.current = io(HOST, {
                withCredentials: true,
                query: { userId: user.id }
            })

            socket.current.on("connect", () => {
                console.log("Connected to socket server")
            })

            return () => {
                socket.current.disconnect()
            }
        }
    }, [user])

    return socket
}

export default useSocket