import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import api from '../../../utils/axios';
import userStore from '../../../app/store';

const SignUpForm = () => {

    const navigate = useNavigate()
    const setUser = userStore((state) => state.setUser)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')


    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post("/auth/signup",{firstName,email, password},{ withCredentials: true })
            if(response.data.success){
                toast.success("From is submmited")
                setUser(response.data.user)
                console.log(response.data)
                navigate("/")
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
            
                <div className="relative">
                    <input
                        type="text"
                        placeholder=" First Name"
                        required
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                        className="peer w-full px-4 py-2 rounded-xl bg-gray-800/70 text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                </div>

                <div className="relative">
                    <input
                        type="email"
                        placeholder=" Email Address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="peer w-full px-4 py-2 rounded-xl bg-gray-800/70 text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                </div>

                <div className="relative">
                    <input
                        type="password"
                        placeholder=" Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="peer w-full px-4 py-2 rounded-xl bg-gray-800/70 text-white  focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />
                </div>

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

                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 hover:shadow-indigo-500/30 text-white font-semibold transition duration-300"
                >
                    Sign Up
                </button>

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
