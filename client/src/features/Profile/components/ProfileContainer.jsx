import {useState} from 'react'
import useStore from '../../../store'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPencil, faPowerOff, faEllipsisV } from "@fortawesome/free-solid-svg-icons"
import { toast } from 'react-toastify'
import api from '../../../utils/axios'
import { LOGOUT_ROUTE } from '../../../constants/routes'

const ProfileContainer = () => {
    const user = useStore((state) => state.user)
    // const logout = userStore((state) => state.logout)/
    const navigate = useNavigate()
    const [open, setOpen] = useState(false) 
    const handleEdit = () => {
        navigate("/profile")
        setOpen(false)
    }
    const handleLogout = async () => {
        try{

            const res = await api.post(LOGOUT_ROUTE)
            if(res.data.success){
                toast.success("Logged out successfully")
                useStore.setState({user: null})
                navigate("/login")
                setOpen(false)
            }
        }catch(err){
            toast.error(err.response?.data?.message || "Logout failed")
        }
        setOpen(false)
    }

    return (
        <div className="h-16 sm:h-[89px] px-3 sm:px-4 py-2 sm:border-t bg-transparent sm:bg-gray-900 border-gray-800 flex items-center gap-2 sm:gap-3">

            {/* Profile Image */}
            <div onClick={handleEdit} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1 ring-gray-700/50 flex-shrink-0">
                <img
                    src={user.profileImage}
                    alt="profile"
                    className="w-full h-full object-cover blur-[0.6px]"
                />
            </div>

            {/* Name + Username */}
            <div className="flex-1 hidden sm:flex flex-col justify-center">
                <div className="flex gap-1">
                    <p className="text-sm  sm:text-base text-white font-medium leading-tight">
                        {user.firstName}
                    </p>
                    <p className="text-sm sm:text-base text-white font-medium leading-tight">
                        {user.lastName}
                    </p>
                </div>
                <p className="text-xs text-blue-400">
                    @{user.userName}
                </p>
            </div>

            {/* Edit Icon */}
            <button onClick={handleEdit} className="w-8 h-8 hidden sm:flex items-center justify-center text-gray-300 hover:text-white transition rounded-full bg-gray-800">
                <FontAwesomeIcon icon={faPencil} className="text-sm" />
            </button>

            {/* Logout Icon */}
            <button onClick={handleLogout} className=" hidden sm:flex w-8 h-8  items-center justify-center text-red-400 hover:text-red-300 transition rounded-full bg-red-900/40">
                <FontAwesomeIcon icon={faPowerOff} className="text-sm" />
            </button>

            {/* Mobile Menu (3 dots) */}
            <div className="sm:hidden relative ml-1">
                <button
                    onClick={() => setOpen(!open)}
                    className="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white"
                >
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="absolute right-0 mt-3 w-36 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
                        <button
                            onClick={handleEdit}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-800"
                        >
                            <FontAwesomeIcon icon={faPencil} />
                            Edit Profile
                        </button>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-800"
                        >
                            <FontAwesomeIcon icon={faPowerOff} />
                            Logout
                        </button>
                    </div>
                )}
            </div>


        </div>
    )
}

export default ProfileContainer