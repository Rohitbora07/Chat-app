import ChatContainer from "../components/ChatContainer"
import ContactContainer from "../components/ContactContainer"
import EmptyChatContainer from "../components/EmptyChatContainer"

const Chatpage = () => {

  return (
    <div className="flex h-screen bg-gray-950 text-white">

      <ContactContainer />

      <div className="flex-1">
        {/* <EmptyChatContainer /> */}
        {/* replace with ChatContainer when a chat is selected */}
        <ChatContainer />
      </div>

    </div>
  )
}

export default Chatpage