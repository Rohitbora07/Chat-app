import React from 'react'

const ProfileCard = ({ user, onClick }) => {


    // console.log(user)

    return (
        <div className="flex items-center gap-4 w-full p-3 rounded-xl hover:bg-gray-800/70 active:scale-[0.98] transition-all duration-200 cursor-pointer" onClick={onClick}>

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold text-lg shrink-0">
                {
                    user.profileImage ? (
                        <img
                            src={user.profileImage}
                            alt="profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        user.firstName?.charAt(0).toUpperCase()
                    )
                }
            </div>

            {/* User Info */}
            <div className="flex flex-col flex-1 overflow-hidden">

                {/* Name */}
                <p className="text-white font-medium text-sm truncate">
                    {user.firstName} {user.lastName}
                </p>

                {/* Username */}
                {
                    user.userName && (
                        <p className="text-blue-400 text-xs truncate">
                            @{user.userName}
                        </p>
                    )
                }

                {/* Email */}
                <p className="text-gray-400 text-xs truncate">
                    {user.email}
                </p>

            </div>

            {/* Optional right side (status dot) */}
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>

        </div>
    )
}

export default ProfileCard