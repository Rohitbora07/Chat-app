import userStore from "../../../app/store"
import InputBox from "../components/inputBox"

const Profile = () => {

    const user = userStore((state) => state.user)

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">

            <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10">

                <div className="flex items-center gap-12">

                    {/* Avatar Section */}
                    <div className="flex flex-col items-center">

                        <div className="relative group cursor-pointer">

                            <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px]">

                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-gray-400 text-sm border border-gray-800">
                                    Upload
                                </div>

                            </div>

                            <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
                                Change
                            </div>

                        </div>

                        <p className="text-gray-400 text-xs mt-3">
                            Click to upload profile photo
                        </p>

                    </div>

                    {/* Form Section */}
                    <div className="flex-1">

                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-white tracking-tight">
                                Complete your profile
                            </h2>
                            <p className="text-gray-400 mt-2">
                                Set up your profile to start chatting with others
                            </p>
                        </div>

                        <form className="space-y-5">

                            <InputBox value={user.firstName || ""} placeholder="First name" />
                            <InputBox value={user.lastName || ""} placeholder="Last name" />
                            <InputBox value={user.username || ""} placeholder="Username" />

                            <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/40">
                                Continue
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile