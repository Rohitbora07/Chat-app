import  { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api from '../../../utils/axios';
import InputBox from '../../../components/ui/InputBox';
import Button from '../../../components/ui/Button';
import { LOGIN_ROUTE } from '../../../constants/routes';
import userStore from '../../../store';

const LoginForm = () => {

    const navigate = useNavigate()

    const setUser = userStore((state) => state.setUser)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginSubmit = async (e) => {
        e.preventDefault()

        try {

            const res = await api.post(LOGIN_ROUTE, {email, password}, {withCredentials: true})
            if(res.data.success){
                setUser(res.data.user)
                toast.success("Logged in Succesfully")
                if(res.data.user.profileSetup){
                    navigate("/")
                }else{
                    navigate("/profile")
                }
            }else {
                toast.error(res.data.message)
            }
            
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }

    }

    return (
        <>
            <div className="relative mb-6 text-center">
                <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
                <p className="text-gray-400 text-sm mt-1">Login to your account</p>
            </div>
            <form
            onSubmit={handleLoginSubmit}
            className="relative space-y-5">

                <InputBox value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <InputBox value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />

                <div className="flex justify-between items-center text-xs text-gray-400">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="accent-indigo-500" />
                        <span>Remember me</span>
                    </label>
                    <Link
                        to="/forgot-password"
                        className="hover:text-indigo-400 transition"
                    >
                        Forgot password?
                    </Link>
                </div>

                <Button description="Login" type="submit" />

                <p className="text-center text-xs text-gray-400 pt-2">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-indigo-400 hover:underline"
                
                    >
                        Sign up
                    </Link>
                </p>
            </form>

        </>
    );
}

export default LoginForm
