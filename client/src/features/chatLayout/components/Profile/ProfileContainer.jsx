import React from 'react'
import userStore from '../../../../app/store'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faPowerOff } from "@fortawesome/free-solid-svg-icons"

const ProfileContainer = () => {
    const user = userStore((state) => state.user)
    const logout = userStore((state) => state.logout)
    const navigate = useNavigate()
    const handleEdit = () => {
        navigate("/profile")
    }

    return (
        <div className="h-20 px-4 py-[44px] border-t bg-gray-900 border-gray-800 flex items-center gap-3">

            {/* Profile Image */}
            <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-gray-700/50 flex-shrink-0">
                <img
                    src={user.profileImage}
                    alt="profile"
                    className="w-full h-full object-cover blur-[0.6px]"
                />
            </div>

            {/* Name + Username */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="flex gap-1">
                    <p className="text-white font-medium leading-tight">
                        {user.firstName}
                    </p>
                    <p className="text-white font-medium leading-tight">
                        {user.lastName}
                    </p>
                </div>
                <p className="text-xs text-blue-400">
                    @{user.userName}
                </p>
            </div>

            {/* Edit Icon */}
            <button onClick={handleEdit} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition rounded-full bg-gray-800">
                <FontAwesomeIcon icon={faPencil} className="text-sm" />
            </button>

            {/* Logout Icon */}
            <button onClick={logout} className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-300 transition rounded-full bg-red-900/40">
                <FontAwesomeIcon icon={faPowerOff} className="text-sm" />
            </button>

        </div>
    )
}

export default ProfileContainer