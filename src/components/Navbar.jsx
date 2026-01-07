import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'motion/react'

const Navbar = () => {
  const [nav, setNav] =  useState(false)
  const [deviceWidth, setDeviceWidth] =  useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  const handleResize = () =>{
    setDeviceWidth(window.innerWidth)
  }

  const handleNavToggle = () =>{
    setNav(prevNav => !prevNav)
  }

  useEffect(() =>{
    window.addEventListener("resize", handleResize)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () =>{
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav 
      className={`h-12 w-full flex sm:justify-between items-center flex-col sm:flex-row px-4 md:px-6 py-2 fixed z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200" : "bg-white/40 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={"/"} onClick={() => setNav(false)} className={`flex w-9 h-9 hover:scale-110 transition-transform ${deviceWidth <= 640 ? "absolute top-[5px] left-4": ""}`}>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#b4ff81] to-green-500 flex items-center justify-center font-bold text-black">A</div>
      </Link>

      {deviceWidth <= 640 && 
      (<motion.img 
        src={nav ? "/close-icon.svg" : "/hamburger-icon.svg"} 
        className="w-8 absolute right-3 rounded-full p-1 hover:bg-gray-200 cursor-pointer z-10 transition-all" 
        onClick={handleNavToggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />)}

      <motion.ul 
        className={`list-none flex flex-col sm:flex-row gap-1 ${deviceWidth <= 640 ? "fixed top-12 -right-56 flex-col bg-gradient-to-br from-gray-900 to-black text-white rounded-bl-3xl p-6 w-56 h-screen transition-all duration-300" : ""} ${deviceWidth <= 640 && nav ? "translate-x-0" : "translate-x-56"}`}
        initial={deviceWidth <= 640 ? false : { opacity: 0, y: -10 }}
        animate={deviceWidth <= 640 ? false : { opacity: 1, y: 0 }}
        transition={deviceWidth <= 640 ? {} : { delay: 0.1 }}
      >
        <li>
          <NavLink 
            to={"/"} 
            onClick={handleNavToggle} 
            className={({isActive}) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-[#b4ff81] text-black" : "hover:bg-gray-100 text-gray-900"}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={"/projects"} 
            onClick={handleNavToggle} 
            className={({isActive}) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-[#b4ff81] text-black" : "hover:bg-gray-100 text-gray-900"}`}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={"/contact"} 
            onClick={handleNavToggle} 
            className={({isActive}) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-[#b4ff81] text-black" : "hover:bg-gray-100 text-gray-900"}`}
          >
            Contact
          </NavLink>
        </li>
      </motion.ul>
    </motion.nav>
  )
}

export default Navbar