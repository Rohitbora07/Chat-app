import React from 'react'

const MessageContainer = () => {
    return (
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5">

            {/* incoming message */}
            <div className="flex">
                <div className="bg-gray-800 text-gray-200 px-4 py-3 rounded-2xl max-w-xs shadow-md ">
                    Message
                </div>
            </div>

            {/* outgoing message */}
            <div className="flex justify-end">
                <div className="bg-blue-600 text-white px-4 py-3 rounded-2xl max-w-xs shadow-md ">
                    Message
                </div>
            </div>

        </div>
    )
}

export default MessageContainer