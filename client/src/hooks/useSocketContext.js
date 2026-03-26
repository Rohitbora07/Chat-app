import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"

const useSocketContext = () => {
    const socket = useContext(SocketContext)

    if (!socket) {
        throw new Error("useSocket must be used within SocketProvider")
    }

    return socket
}

export default useSocketContext