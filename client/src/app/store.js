import { create } from "zustand"

const userStore = create((set) => ({
    user: null,
    authLoading: true,

    setUser: (user) => set({user}),
    setAuthLoading: (loading) => set({authLoading: loading})
}))

export default userStore;