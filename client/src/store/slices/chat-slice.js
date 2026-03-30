const createChatSlice = (set, get) => ({
    selectedChatType: null,
    selectedChatData: null,
    selectedChatMessages: [],
    directMessageContacts: [],
    setSelectedChatType: (type) => set({ selectedChatType: type }),
    setSelectedChatData: (data) => set({ selectedChatData: data }),
    setSelectedChat: (type, data) => {
        set({ selectedChatType: type, selectedChatData: data })
    },
    setSelectedChatMessages: (messages) => {
        set({ selectedChatMessages: messages })
    },
    setDirectMessageContacts: (directMessageContacts) => 
        set({ directMessageContacts }),
    closeChat: () => {
        set({
            selectedChatType: null,
            selectedChatData: null,
            selectedChatMessages: []
        })
    },
    addMessage: (message) => {
        const selectedChatMessages = get().selectedChatMessages
        const selectedChatType = get().selectedChatType

        set({
            selectedChatMessages: [
                ...selectedChatMessages,
                {
                    ...message,
                    sender: selectedChatType === "channel"
                    ? message.sender
                    : message.sender._id,
                    receiver: selectedChatType === "channel"
                    ? message.receiver
                    : message.receiver._id
                }
            ]
        })
    }
})

export default createChatSlice;