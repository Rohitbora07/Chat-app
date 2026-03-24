import { create } from "zustand"
import createAuthSlice from "./slices/auth-slice"
import createChatSlice from "./slices/chat-slice"

const useStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createChatSlice(...a)
}))

export default useStore;