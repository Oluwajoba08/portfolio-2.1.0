import React, { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion } from "motion/react"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  const handleResize = () => {
    setDeviceWidth(window.innerWidth)
  }

  const handleNavToggle = () => {
    setNav((prevNav) => !prevNav)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav className={`h-16 w-full flex justify-between items-center px-6 md:px-8 lg:px-12 py-4 fixed z-50 transition-all duration-300 bg-white`} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      {/* Logo */}
      <Link to={"/"} onClick={() => setNav(false)} className="flex items-center hover:scale-110 transition-transform">
        {/* <div className="w-10 h-10 rounded-lg bg-dark-gray flex items-center justify-center font-bold text-white border border-gray-300">H</div> */}
        <img src={"/jb-logo.png"} alt="logo" className="w-10 h-10" />
      </Link>

      {/* Desktop Navigation */}
      <motion.ul className={`list-none hidden md:flex items-center gap-2`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <li>
          <NavLink to={"/"} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/projects"} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blog"} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
            Blog
          </NavLink>
        </li>
      </motion.ul>

      {/* Let's Talk Button */}
      <motion.button className="hidden md:flex items-center gap-2 bg-lime-accent text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#8FE000] transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Let's talk
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>

      {/* Mobile Menu Toggle */}
      {deviceWidth < 768 && (
        <motion.button className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={handleNavToggle} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {nav ? (
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.button>
      )}

      {/* Mobile Menu */}
      {deviceWidth < 768 && (
        <motion.div className={`fixed top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-6 transition-all duration-300 ${nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`} initial={false}>
          <ul className="list-none flex flex-col gap-4">
            <li>
              <NavLink to={"/"} onClick={handleNavToggle} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium block ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={handleNavToggle} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium block ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/projects"} onClick={handleNavToggle} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium block ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} onClick={handleNavToggle} className={({ isActive }) => `px-4 py-2 rounded-lg transition-all duration-300 font-medium block ${isActive ? "bg-lime-accent text-black" : "text-gray-900 hover:text-lime-accent"}`}>
                Blog
              </NavLink>
            </li>
            <li>
              <button className="w-full flex items-center justify-center gap-2 bg-lime-accent text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#8FE000] transition-all duration-300" onClick={handleNavToggle}>
                Let's talk
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
