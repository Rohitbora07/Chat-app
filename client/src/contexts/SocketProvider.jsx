import useStore from "../store"
import useSocket from "../hooks/useSocket"
import {SocketContext} from "./SocketContext"

export const SocketProvider = ({ children }) => {
    const { user } = useStore()
    const socket = useSocket(user)

    return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    )
}