import React, { useState } from 'react'
import { motion } from 'motion/react'
import Button from './ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-white">
      <div className="h-12"></div>
      
      <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center">
        <motion.div 
          className="max-w-2xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Let's Work Together
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Have a project in mind? I'd love to hear from you. Get in touch with me today!
            </motion.p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b4ff81] focus:outline-none focus:ring-2 focus:ring-[#b4ff81]/30 transition-all duration-300 bg-gray-50"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b4ff81] focus:outline-none focus:ring-2 focus:ring-[#b4ff81]/30 transition-all duration-300 bg-gray-50"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b4ff81] focus:outline-none focus:ring-2 focus:ring-[#b4ff81]/30 transition-all duration-300 bg-gray-50"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows="6"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#b4ff81] focus:outline-none focus:ring-2 focus:ring-[#b4ff81]/30 transition-all duration-300 bg-gray-50 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <button
                type="submit"
                className="w-full btn text-lg"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </motion.div>

            {submitted && (
              <motion.div
                className="mt-4 p-4 bg-[#b4ff81]/20 border border-[#b4ff81] rounded-lg text-center text-green-700 font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>

          {/* Alternative Contact Methods */}
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {[
              {
                icon: '📧',
                title: 'Email',
                value: 'andlo@example.com',
                link: 'mailto:andlo@example.com'
              },
              {
                icon: '💼',
                title: 'LinkedIn',
                value: 'Visit Profile',
                link: 'https://linkedin.com'
              },
              {
                icon: '𝕏',
                title: 'Twitter',
                value: '@andlodev',
                link: 'https://twitter.com'
              }
            ].map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-gray-50 hover:bg-[#b4ff81]/10 transition-colors duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-gray-900">{method.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{method.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

export default Contact