import userStore from "../store"
import useSocket from "../hooks/useSocket"
import {SocketContext} from "./SocketContext"

export const SocketProvider = ({ children }) => {
    const { user } = userStore()
    const socket = useSocket(user)

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}