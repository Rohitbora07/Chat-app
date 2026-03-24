const createChatSlice = (set, get) => ({
    selectedChatType: null,
    selectedChatData: null,
    selectedChatMessages: [],
    setSelectedChatType: (type) => set({ selectedChatType: type }),
    setSelectedChatData: (data) => set({ selectedChatData: data }),
    setSelectedChat: (type, data) => {
        set({ selectedChatType: type, selectedChatData: data })
    },
    setSelectedChatMessages: (messages) => {
        set({ selectedChatMessages: messages })
    },
    closeChat: () => {
        set({
            selectedChatType: null,
            selectedChatData: null,
            selectedChatMessages: []
        })
    }
})

export default createChatSlice;