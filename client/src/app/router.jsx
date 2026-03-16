import { createBrowserRouter } from "react-router-dom";
// import LoginPage from "../features/Auth/pages/LoginPage";
import AuthPage from "../features/Auth/pages/AuthPage";
import Chatpage from "../features/chatLayout/pages/Chatpage";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../features/Profile/pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Chatpage />
            </ProtectedRoute>
        )
    },
    {
        path:"/profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    },
    {
        path: "/login",
        element: <AuthPage />
    },
    {
        path: "/signup",
        element: <AuthPage  />
    },
]);