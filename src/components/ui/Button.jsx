import React from 'react'
import { motion } from 'motion/react'

const Button = ({ children, variant = 'primary', href = null, ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#b4ff81] to-green-400 text-black hover:shadow-lg',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white'
  }

  const classes = `${variants[variant]} px-6 py-3 rounded-full font-bold cursor-pointer transition-all duration-300 inline-block`

  if (href) {
    return (
      <motion.a 
        href={href}
        className={classes}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button 
      className={classes}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button