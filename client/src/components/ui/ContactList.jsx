import React from 'react'
import userStore from '../../store'

const ContactList = ({ contacts, isChannel = false }) => {

    const {
        selectedChatData,
        setSelectedChatData,
        setSelectedChatType,
        setSelectedChatMessages
    } = userStore()

    const handleContactClick = (contact) => {
        const type = isChannel ? 'channel' : 'contact'
        setSelectedChatType(type)

        if (selectedChatData?._id !== contact._id) {
            setSelectedChatMessages([])
        }

        setSelectedChatData(contact)
    }

    return (
        <div className="flex flex-col gap-1 px-2">
            {contacts.map((contact) => {
                const isActive = selectedChatData?._id === contact._id

                return (
                    <div
                        key={contact._id}
                        onClick={() => handleContactClick(contact)}
                        className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-200 
                        ${isActive ? 'bg-blue-600/20 border border-blue-500/40' : 'hover:bg-gray-800/60'}`}
                    >
                        {/* Avatar */}
                        <div className="relative">
                            {/* <img
                                src={contact.profileImage || '/default-avatar.png'}
                                alt="avatar"
                                className=""
                            /> */}
                            {contact?.profileImage ? (
                                <img
                                    src={contact.profileImage}
                                    alt="profile"
                                    className="w-11 h-11 rounded-full object-cover border border-gray-700"
                                />
                            ) : (
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-sm flex items-center justify-center">
                                    {contact?.firstName?.charAt(0)?.toUpperCase()}
                                </div>
                            )}
                        </div>

                        {/* Name + Subtitle */}
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <p className={`text-sm font-medium truncate transition ${isActive ? 'text-blue-400' : 'text-white'}`}>
                                {contact.firstName} {contact.lastName}
                            </p>

                            <p className="text-xs text-gray-400 truncate">
                                {contact.userName? `@${contact.userName}` : contact.email}
                            </p>
                        </div>

                        {/* Right Side (time or badge) */}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ContactList