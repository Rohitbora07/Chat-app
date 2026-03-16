import { useEffect } from "react"
import userStore from "../../../app/store"
import ChatContainer from "../components/ChatContainer"
import ContactContainer from "../components/ContactContainer"
import EmptyChatContainer from "../components/EmptyChatContainer"
import { useNavigate } from "react-router-dom"

const Chatpage = () => {

  const navigate = useNavigate()

  const user = userStore((state) => state.user)
  useEffect(() => {
    if(!user.profileSetup){
      navigate("/profile")
    }
  },[user, navigate])

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