import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip, faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const MessageBar = () => {
    return (
        <div className="px-6 py-4 border-t border-gray-800 bg-gray-900">

            <div className="flex items-center bg-gray-800 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button>

                <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 px-3 py-2 outline-none" />

                {/* <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faFaceSmile} />
                </button> */}

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <FontAwesomeIcon icon={faPaperclip} />
                </button>

                <button className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-95 transition">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>

            </div>

        </div>
    )
}

export default MessageBar