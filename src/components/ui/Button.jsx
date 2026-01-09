import React from 'react'
import { motion } from 'motion/react'

const Button = ({ children, variant = 'primary', href = null, ...props }) => {
  const variants = {
    primary: 'bg-lime-accent text-black hover:bg-[#8FE000] shadow-sm',
    secondary: 'bg-dark-gray text-white hover:bg-gray-700 border border-gray-700',
    outline: 'border-2 border-lime-accent text-lime-accent hover:bg-lime-accent hover:text-black'
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