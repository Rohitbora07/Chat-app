import React from 'react'
import userStore from '../../../../store'

const ChatHeader = () => {

    const { closeChat, selectedChatType, selectedChatData } = userStore()

    return (
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-900">

            <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm">
                    {selectedChatData?.profileImage ? (
                        <img
                            src={selectedChatData.profileImage}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        selectedChatData?.firstName?.charAt(0)?.toUpperCase()
                    )}
                </div>

                {/* Name + Username */}
                <div className="flex flex-col">
                    {selectedChatType === "contact" ? (
                        <>
                            <p className="text-sm sm:text-base text-white font-medium leading-none">
                                {selectedChatData?.firstName} {selectedChatData?.lastName}
                            </p>
                            {selectedChatData?.userName && (
                                <p className="text-xs text-gray-400">
                                    @{selectedChatData.userName}
                                </p>
                            )}
                        </>
                    ) : (
                        <p className="text-sm sm:text-base text-white font-medium">
                            Group
                        </p>
                    )}
                </div>

            </div>

            {/* Close Button */}
            <button
                onClick={closeChat}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition"
            >
                ✕
            </button>

        </div>
    )
}

export default ChatHeader