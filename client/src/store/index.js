import { create } from "zustand"
import createAuthSlice from "./slices/auth-slice"
import createChatSlice from "./slices/chat-slice"

const userStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createChatSlice(...a)
}))

export default userStore;