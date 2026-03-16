import React from 'react'
import FormData from '../components/FormData'
import { useLocation } from 'react-router-dom'

const AuthPage = () => {

    const location = useLocation()
    const mode = location.pathname.toLocaleLowerCase() === "/login" ? "login" : "signup"
    return (
        <FormData initialMode = {mode} />
    )

}

export default AuthPage
