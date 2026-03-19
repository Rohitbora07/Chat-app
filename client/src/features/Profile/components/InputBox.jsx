import React from 'react'

const InputBox = ({ value, placeholder, ...rest }) => {
    return (
        <div>
            <input value={value || ""} type="text" placeholder={placeholder} className="w-full bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition" {...rest} />
        </div>
    )
}

export default InputBox
