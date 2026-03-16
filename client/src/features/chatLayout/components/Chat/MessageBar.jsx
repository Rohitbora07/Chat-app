import React from 'react'

const MessageBar = () => {
    return (
        <div className="px-6 py-4 border-t border-gray-800 bg-gray-900">

            <div className="flex items-center bg-gray-800 rounded-xl px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition">

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" y1="9" x2="9.01" y2="9" />
                        <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                </button>

                <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 px-3 py-2 outline-none" />

                <button className="p-2 text-gray-400 hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.2-9.19a4 4 0 015.66 5.66l-9.2 9.2a2 2 0 11-2.83-2.83l8.48-8.48" />
                    </svg>
                </button>

                <button className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-500 active:scale-95 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                    </svg>
                </button>

            </div>

        </div>
    )
}

export default MessageBar