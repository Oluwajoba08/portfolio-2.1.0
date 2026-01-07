import React from "react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const PageRedirect = () => {
  return (
    <main className="bg-white">
      <div className="h-12"></div>
      <section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md"
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-8xl sm:text-9xl font-bold mb-4 bg-gradient-to-r from-[#b4ff81] to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p 
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Sorry, the page you're looking for doesn't exist. Let me help you get back on track.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              to="/"
              className="inline-block bg-gradient-to-r from-[#b4ff81] to-green-400 text-black px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Go to Home Page
            </Link>
          </motion.div>

          {/* Decoration */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🔍
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

export default PageRedirect
