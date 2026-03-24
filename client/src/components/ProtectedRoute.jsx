import { Navigate } from "react-router-dom";
import useStore from "../store";

const ProtectedRoute = ({ children }) => {

    const user = useStore((state) => state.user)

    const authLoading = useStore((state) => state.authLoading)

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