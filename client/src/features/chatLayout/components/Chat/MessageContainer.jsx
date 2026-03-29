import React, { useEffect, useRef } from 'react'
import userStore from '../../../../store'
import moment from "moment"
import { toast } from 'react-toastify'
import api from "../../../../utils/axios"
import { GET_ALL_MESSAGES_ROUTE } from "../../../../constants/routes"

const MessageContainer = () => {

    const scrollRef = useRef()
    const { selectedChatType, selectedChatData, selectedChatMessages, setSelectedChatMessages } = userStore()

    useEffect(() => {

        const getMessages = async () => {
            try {
                const response = await api.post(GET_ALL_MESSAGES_ROUTE, {
                    id: selectedChatData._id,
                })
                if (response.data) {
                setSelectedChatMessages(response.data)
                }
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to load messages")
            }
        }
        if (selectedChatData._id){
            if (selectedChatType === "contact") {
                getMessages()
            }
        }
    }, [selectedChatType, selectedChatData, setSelectedChatMessages])

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [selectedChatMessages])

    const renderMessages = () => {
        let lastDate = null;
        return selectedChatMessages.map((message) => {
            const messageDate = moment(message.timestamp).format("YYYY-MM-DD")
            const showDate = messageDate !== lastDate;
            lastDate = messageDate
            return (
                <div key={message._id}>
                    {
                        showDate && (
                            <div className="flex justify-center my-4">
                                <span className="bg-[#1f2937] text-gray-400 text-xs px-4 py-1 rounded-full shadow-sm border border-gray-700">
                                    {moment(message.timestamp).format("LL")}
                                </span>
                            </div>
                        )
                    }
                    {
                        selectedChatType === "contact" && renderDMMessages(message)
                    }
                </div>
            )
        })
    }

    const renderDMMessages = (message) => (
        <div className={`flex ${message.sender === selectedChatData._id ? "justify-start" : "justify-end"} w-full`}>
            
            <div className="flex flex-col max-w-[75%]">

                {
                    message.messageType === "text" && (
                        <div
                            className={`${message.sender !== selectedChatData._id 
                                ? "bg-pink-400/20 text-pink-200 border-pink-300/30 rounded-bl-none" 
                                : "bg-[#252525] text-gray-300 border-gray-600/30 rounded-br-none"} 
                                border px-4 py-2 rounded-2xl shadow-md backdrop-blur-sm break-words transition-all duration-200 hover:scale-[1.02]`}
                        >
                            {message.content}
                        </div>
                    )
                }

                <div className={`text-[10px] mt-1 ${message.sender === selectedChatData._id ? "text-left" : "text-right"} text-gray-500`}>
                    {moment(message.timestamp).format("LT")}
                </div>

            </div>
        </div>
    )

    return (
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-8 py-4 sm:py-6 space-y-3 bg-[#1a1f2b] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">

            {renderMessages()}
            <div ref={scrollRef} />

        </div>
    )
}

export default MessageContainer