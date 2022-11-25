import React from 'react'

const Button = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
