import useStore from "../../../store"
import InputBox from "../../../components/ui/InputBox"
import Button from "../../../components/ui/Button"
import { useState } from "react"
import api from "../../../utils/axios"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import ProfileAvatar from "../components/ProfileAvatar"
import { CREATE_PROFILE_ROUTE, UPDATE_PROFILE_ROUTE } from "../../../constants/routes"

const Profile = () => {


    const navigate = useNavigate()

    const user = useStore((state) => state.user)

    const newUser = !user?.profileSetup

    const [firstName, setFirstName] = useState(user.firstName || "")
    const [lastName, setLastName] = useState(user.lastName || "")
    const [userName, setUsername] = useState(user.userName || "")
    const [profileImage, setProfileImage] = useState(null)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        if( firstName )formData.append("firstName", firstName)
        if( lastName )formData.append("lastName", lastName)
        if( userName )formData.append("userName", userName)
        if( profileImage )formData.append("profileImage", profileImage)
        if (newUser) {
            try {
                const res = await api.post(CREATE_PROFILE_ROUTE, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                if (res.data.success) {
                    toast.success(newUser ? "Profile created successfully" : "Profile updated successfully")
                    useStore.setState((state) => ({
                        user: {
                            ...state.user,
                            firstName,
                            lastName,
                            userName,
                            profileImage: res.data.profileImage,
                            profileSetup: true
                        }
                    }))
                    navigate("/")
                }
                console.log(res)
            } catch (err) {
                toast.error(err.response?.data?.message || "Failed to create profile")
            }
        } else {
            try {
                const res = await api.post(UPDATE_PROFILE_ROUTE, formData)
                if (res.data.success) {
                    toast.success(newUser ? "Profile created successfully" : "Profile updated successfully")
                    useStore.setState((state) => ({
                        user: {
                            ...state.user,
                            firstName,
                            lastName,
                            userName,
                            profileImage: profileImage ? res.data.profileImage : state.user.profileImage
                        }
                    }))
                }
                console.log(res)
            } catch (err) {
                console.log(err.response)
                console.log(err.response?.data)
                toast.error(err.response?.data?.message || "Failed to update profile")
            }

        }

    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">

            <div className="w-full max-w-lg md:max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10">

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Avatar Section */}
                    <ProfileAvatar profileImage={profileImage} userImage={user?.profileImage} setProfileImage={setProfileImage} />

                    {/* Form Section */}
                    <div className="flex-1 w-full">

                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {newUser ? "Welcome! Let's set up your profile" : "Update Your Profile"}
                            </h2>
                            <p className="text-gray-400 mt-2">
                                {newUser ? "Start by adding your details and a profile picture." : "Make changes to your profile information below."}
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleFormSubmit}>

                            <InputBox value={firstName} placeholder="First name" required onChange={(e) => setFirstName(e.target.value)} />
                            <InputBox value={lastName} placeholder="Last name" required onChange={(e) => setLastName(e.target.value)} />
                            <InputBox value={userName} placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />

                            <Button description={newUser ? "Create Profile" : "Update Profile"} type="submit" />

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile