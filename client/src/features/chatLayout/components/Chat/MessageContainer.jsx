import React from 'react'

const MessageContainer = () => {
    return (
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 space-y-4 sm:space-y-5">

            {/* incoming message */}
            <div className="flex">
                <div className="bg-gray-800 text-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl max-w-[75%] sm:max-w-xs shadow-md text-sm sm:text-base">
                    Message
                </div>
            </div>

            {/* outgoing message */}
            <div className="flex justify-end">
                <div className="bg-gray-800 text-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl max-w-[75%] sm:max-w-xs shadow-md text-sm sm:text-base">
                    Message
                </div>
            </div>

        </div>
    )
}

export default MessageContainer