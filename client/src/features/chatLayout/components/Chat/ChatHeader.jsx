import React from 'react'
import useStore from '../../../../store'

const ChatHeader = () => {

    const { closeChat, selectedChatType, selectedChatData } = useStore()

    return (
        <div className="flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-900">

            <div className="flex items-center gap-3 ">

                {
                    selectedChatData?.profileImage ? (
                        <img
                            src={selectedChatData.profileImage}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className=' w-10 h-10 border-green-700 border-2 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg'>
                        {selectedChatData?.firstName?.charAt(0).toUpperCase()}
                        </div>
                    )
                }
                <div>
                {
                    selectedChatType === "contact" ? (
                        <div>
                        <p className="text-sm sm:text-base text-white font-medium">{selectedChatData?.firstName} {selectedChatData?.lastName}</p>
                        {selectedChatData?.userName && (
                            <p className="text-xs text-gray-400">@{selectedChatData?.userName}</p>
                        )}
                        </div>
                    ) : (
                        <p className="text-sm sm:text-base text-white font-medium">Group</p>
                    )
                }
                </div>

            </div>

            <button
            onClick={closeChat}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition">
                ✕
            </button>

        </div>
    )
}

export default ChatHeader