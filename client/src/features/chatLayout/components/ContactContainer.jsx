import React from 'react'
import ProfileContainer from './Profile/ProfileContainer'

const ContactContainer = () => {
  return (
    <div className="flex w-full sm:w-64 md:w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 flex-col">

      <div className="p-4 sm:p-[22px] border-b border-gray-800 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-white tracking-wide">Chats</h1>
        <div className="flex items-center gap-5">
          <div class="w-8 h-8 hidden sm:flex items-center justify-center rounded-lg bg-gray-800 hover:bg-gray-700 cursor-pointer transition">
            +
          </div>
          <div className='block sm:hidden'>
            <ProfileContainer />
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <input className="w-full bg-gray-800 text-gray-300 placeholder-gray-500 px-3 sm:px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition text-sm sm:text-base" />
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800/70 transition cursor-pointer group">
          <img src="https://i.pravatar.cc/42" className="w-11 h-11 rounded-full" />
          <div className="flex-1">
            <p className="text-white font-medium group-hover:text-blue-400 transition">Alex</p>
            <p className="text-xs text-gray-400">See you tomorrow</p>
          </div>
          <span className="text-xs text-gray-500">1h</span>
        </div>
      </div>
      <div className=" hidden sm:block  " >
        <ProfileContainer />
      </div>

    </div>
  )
}

export default ContactContainer
