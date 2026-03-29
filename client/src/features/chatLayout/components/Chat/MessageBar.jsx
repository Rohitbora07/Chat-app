import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import userStore from '../../../../store'
// import useSocket from '../../../../hooks/useSocket'
import { useState } from 'react'
import useSocketContext from '../../../../hooks/useSocketContext'

const MessageBar = () => {

    const [message, setMessage] = useState("")

    const { selectedChatType, selectedChatData, user } = userStore()
    const socket = useSocketContext()

    const handleSendMessage = async () => {

        if (message.trim() === "") return

        if (selectedChatType === "contact") {
            console.log("USER OBJECT:", user)
            console.log("SENDER BEING SENT:", user?.userId || "No user ID found")
            socket.current.emit("sendMessage", {
                sender: user?.userId,
                content: message,
                receiver: selectedChatData._id,
                messageType: "text",
                fileUrl: undefined
            })
        }
        console.log("message", message)
    }

    return (
        <div className="px-6 py-4 border-t border-gray-800 bg-gray-900">

            <div className="flex items-center bg-gray-800 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button>

                <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 px-3 py-2 outline-none"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                {/* <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button> */}

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faPaperclip} />
                </button>

                <button
                    className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-95 transition
                "
                    onClick={handleSendMessage}
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>

            </div>

        </div>
    )
}

export default MessageBar