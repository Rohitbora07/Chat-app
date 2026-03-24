import React from 'react'

const Button = ({ description, type, className, ...rest }) => {
    return (
            <button
                type={type || "button"}
                className={`w-full mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] transition-all text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/40 ${className || ''}`}
                {...rest}
            >
                {description}
            </button>
    )
}

export default Button
