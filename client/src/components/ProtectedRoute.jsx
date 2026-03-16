import { Navigate } from "react-router-dom";
import userStore from "../app/store";

const ProtectedRoute = ({ children }) => {

    const user = userStore((state) => state.user)

    const authLoading = userStore((state) => state.authLoading)

    if (authLoading) {
        return <div>Loading...</div>
    }

    console.log(user)
    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute;