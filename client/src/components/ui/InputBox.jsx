import React from 'react'

const InputBox = ({value, placeholder, onChange, type, className, ...rest}) => {
    return (
        <div className="relative">
            <input
                type={type || "text"}
                placeholder={placeholder}
                required
                value={value || ""}
                onChange={onChange}
                className={` w-full bg-gray-800 border border-gray-700 text-gray-200 placeholder-gray-500 px-5 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition ${className || ''}`}
                {...rest}
            />
        </div>
    )
}

export default InputBox
