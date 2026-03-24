import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api from '../../../utils/axios';
import useStore from '../../../store';
import InputBox from '../../../components/ui/InputBox';
import Button from '../../../components/ui/Button';
import { SIGNUP_ROUTE } from '../../../constants/routes';

const SignUpForm = () => {

    const navigate = useNavigate()
    const setUser = useStore((state) => state.setUser)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post(SIGNUP_ROUTE,{firstName,email, password},{ withCredentials: true })
            if(response.data.success){
                toast.success("From is submmited")
                setUser(response.data.user)
                console.log(response.data)
                if(response.data.user.profileSetup){
                    navigate("/")
                }else{
                    navigate("/profile")
                }
            }else {
                toast.error(response.data.message)
            }
            

        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }
    return (
        <>
            <div className="relative mb-6 text-center">
                <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
                <p className="text-gray-400 text-sm mt-1">Sign up to get started</p>
            </div>
            <form
            onSubmit={handleFormSubmit}
            className="relative space-y-5">
            
            <InputBox value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" type="text" />
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


                <Button description="Sign Up" type="submit" />

                <p className="text-center text-xs text-gray-400 pt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-indigo-400 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </form>

        </>
    );
}

export default SignUpForm
