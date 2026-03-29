import React from 'react'

const EmptyChatContainer = () => {
  return (
    <div className="flex-1 h-screen flex items-center justify-center bg-gray-950 relative">

      <div className="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative text-center">

        <div className="text-7xl mb-6 animate-bounce">💬</div>

        <h2 className="text-3xl font-semibold text-white mb-2">
          Welcome to your Chat
        </h2>

        <p className="text-gray-400 max-w-sm mx-auto">
          Select a conversation from the sidebar and start messaging instantly.
        </p>

      </div>

    </div>
  )
}

export default EmptyChatContainer
