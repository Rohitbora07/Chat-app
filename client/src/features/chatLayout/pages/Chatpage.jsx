import { useEffect } from "react"
import userStore from "../../../app/store"
import ChatContainer from "../components/ChatContainer"
import ContactContainer from "../components/ContactContainer"
import EmptyChatContainer from "../components/EmptyChatContainer"
import { useNavigate } from "react-router-dom"

const Chatpage = () => {

  const navigate = useNavigate()

  // const [selectedChat, setSelectedChat] = useState(null)

  const user = userStore((state) => state.user)
  useEffect(() => {
    if (!user.profileSetup) {
      navigate("/profile")
    }
  }, [user, navigate])

  return (
  <div className="flex h-screen bg-gray-950 text-white">

    {/* Contact → full screen on mobile */}
    <ContactContainer />

    {/* Chat / Empty → hidden on small */}
    <div className="hidden sm:flex flex-1">
      {/* {selectedChat ? <ChatContainer /> : <EmptyChatContainer />} */}
      <ChatContainer />
    </div>

  </div>
)
//   return (
//   <div className="flex h-screen bg-gray-950 text-white">

//     {/* Contact Container → always visible, full screen on small */}
//     <div className="flex w-full sm:w-64 md:w-72">
//       <ContactContainer setSelectedChat={setSelectedChat} />
//     </div>

//     {/* Chat / Empty → hidden on small, visible on sm+ */}
//     <div className="hidden sm:flex flex-1">
//       {selectedChat ? <ChatContainer /> : <EmptyChatContainer />}
//     </div>

//   </div>
// )

  // return (
  //   <div className="flex h-screen bg-gray-950 text-white">
  //     <div className={`${selectedChat ? "hidden" : "flex" } sm:flex`}>
  //       <ContactContainer setSelectedChat={setSelectedChat} />
  //     </div>

  //     <div className={`${selectedChat ? "hidden" : "flex" } sm:flex flex-1 hidden`}>
  //       {/* {selectedChat ? <ChatContainer /> : <EmptyChatContainer/>} */}
  //       <ChatContainer />
  //     </div>


  //     </div>

  // )
}

export default Chatpage