import React, { useState } from 'react'
import ProfileContainer from '../../../Profile/components/ProfileContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserGroup, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import SearchDialog from '../../../../components/ui/SearchDialog'

const ContactContainer = () => {


  const [open, setOpen] = useState(false)
  const [newChatOpen, setNewChatOpen] = useState(false)
  const [newGroupOpen, setNewGroupOpen] = useState(false)
  console.log(newChatOpen)



  return (
    <div className="flex w-full sm:w-64 md:w-72 h-screen bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800 flex-col">

      <div className="p-4 sm:p-[22px] border-b border-gray-800 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white tracking-wide">Chats</h1>
        <div className="flex items-center gap-5">
          <div className="sm:block hidden">
            <div onClick={() => setOpen(prev => !prev)} className="sm:flex hidden w-8 h-8 items-center justify-center ">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>

            {
              open &&
              <div className="absolute left-32 mt-3 w-36 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden animate-fadeIn">
                <button onClick={() => {
                  setNewChatOpen(true)
                  setOpen(false)
                }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  New Chat
                </button>

                <button onClick={() => {
                  setNewGroupOpen(true)
                  setOpen(false)
                }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faUserGroup} />
                  New Group
                </button>
              </div>
            }
            {
              newChatOpen &&
              <SearchDialog title="Start New Chat"
                onClose={() => {
                  setNewChatOpen(false)
                }}

                description="Enter a name or email to start a new chat" />
            }
            {
              newGroupOpen &&
              <SearchDialog title="Create New Group"
                onClose={() => {
                  setNewGroupOpen(false)
                }}
                description="Add members" />
            }


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
