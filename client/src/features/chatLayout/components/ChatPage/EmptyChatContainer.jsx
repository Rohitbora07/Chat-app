import React from 'react'

const EmptyChatContainer = () => {
  return (
    <div class="flex-1 h-screen flex items-center justify-center bg-gray-950 relative">

      <div class="absolute w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>

      <div class="relative text-center">

        <div class="text-7xl mb-6 animate-bounce">💬</div>

        <h2 class="text-3xl font-semibold text-white mb-2">
          Welcome to your Chat
        </h2>

        <p class="text-gray-400 max-w-sm mx-auto">
          Select a conversation from the sidebar and start messaging instantly.
        </p>

      </div>

    </div>
  )
}

export default EmptyChatContainer
