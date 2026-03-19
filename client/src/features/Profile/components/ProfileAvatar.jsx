import React from "react"

const ProfileAvatar = ({ profileImage, userImage, setProfileImage }) => {
    return (
        <label className="flex flex-col items-center cursor-pointer">
            <div className="relative group">

                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px]">

                    <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden border border-gray-800 flex items-center justify-center">
                        {profileImage ? (
                            <img
                                src={URL.createObjectURL(profileImage)}
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        ) : userImage ? (
                            <img
                                src={userImage}
                                alt="Profile"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        ) : (
                            <span className="text-gray-400 text-sm">Upload</span>
                        )}
                    </div>

                </div>

                <div className="absolute inset-0 rounded-full bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
                    Change
                </div>

            </div>

            <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => setProfileImage(e.target.files[0])}
            />
        </label>
    )
}

export default ProfileAvatar