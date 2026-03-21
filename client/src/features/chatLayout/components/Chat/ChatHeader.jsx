import React from 'react'

const ChatHeader = () => {
    return (
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-900">

            <div className="flex items-center gap-3">

                <img src="https://i.pravatar.cc/45" className="w-9 h-9 sm:w-11 sm:h-11 rounded-full" />

                <div>
                    <p className="text-sm sm:text-base text-white font-medium">Username</p>
                    <p className="text-[10px] sm:text-xs text-green-400">Online</p>
                </div>

            </div>

            <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition">
                ✕
            </button>

        </div>
    )
}

export default ChatHeader