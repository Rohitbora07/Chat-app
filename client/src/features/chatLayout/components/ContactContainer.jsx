import React from 'react'

const ContactContainer = () => {
  return (
    <div class="w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 flex flex-col">

      <div class="p-6 border-b border-gray-800 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-white tracking-wide">Chats</h1>
        <div class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
          +
        </div>
      </div>

      <div class="px-4 py-3">
        <input type="text" placeholder="Search conversations..." class="w-full bg-gray-800 text-gray-300 placeholder-gray-500 px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition" />
      </div>

      <div class="flex-1 overflow-y-auto px-2 space-y-1">
        <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800/70 transition cursor-pointer group">
          <img src="https://i.pravatar.cc/42" class="w-11 h-11 rounded-full" />
          <div class="flex-1">
            <p class="text-white font-medium group-hover:text-blue-400 transition">Alex</p>
            <p class="text-xs text-gray-400">See you tomorrow</p>
          </div>
          <span class="text-xs text-gray-500">1h</span>
        </div>
      </div>

    </div>
  )
}

export default ContactContainer
