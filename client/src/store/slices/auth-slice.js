
const createAuthSlice = (set, get) => ({
    user: null,
    authLoading: true,

    setUser: (user) => set({ user }),
    setAuthLoading: (loading) => set({ authLoading: loading }),
    logout: () => {
        set({ user: null, authLoading: false })
    }
})

export default createAuthSlice;