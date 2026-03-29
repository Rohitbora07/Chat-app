import React from 'react'
import ChatHeader from '../Chat/ChatHeader'
import MessageContainer from '../Chat/MessageContainer'
import MessageBar from '../Chat/MessageBar'

const ChatContainer = () => {
  
  return (
    <div className="flex-1 h-screen flex flex-col ">
      <ChatHeader />
      <MessageContainer />
      <MessageBar />
    </div>
  )
}

export default ChatContainer
