import React, { useState } from "react"
import { motion } from "motion/react"
import Button from "./ui/Button"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    window.location.href = "https://mailto:oluwajobaisaac08@gmail.com"
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="bg-dark-bg">
      <div className="h-16"></div>

      <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-dark-bg flex flex-col items-center justify-center">
        <motion.div className="max-w-2xl w-full" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
              Let's Work Together
            </motion.h1>
            <motion.p className="text-xl text-light-gray" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              Have a project in mind? I'd love to hear from you. Get in touch with me today!
            </motion.p>
          </div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} className="bg-dark-gray rounded-3xl shadow-xl p-8 md:p-12 border border-gray-800" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-lime-accent focus:outline-none focus:ring-2 focus:ring-lime-accent/30 transition-all duration-300 bg-dark-bg text-white placeholder-gray-500"
                />
              </motion.div>

              {/* Email */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-lime-accent focus:outline-none focus:ring-2 focus:ring-lime-accent/30 transition-all duration-300 bg-dark-bg text-white placeholder-gray-500"
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div className="mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-white">
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
                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-lime-accent focus:outline-none focus:ring-2 focus:ring-lime-accent/30 transition-all duration-300 bg-dark-bg text-white placeholder-gray-500"
              />
            </motion.div>

            {/* Message */}
            <motion.div className="mb-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
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
                className="w-full px-4 py-3 rounded-lg border border-gray-700 focus:border-lime-accent focus:outline-none focus:ring-2 focus:ring-lime-accent/30 transition-all duration-300 bg-dark-bg text-white placeholder-gray-500 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <button type="submit" className="w-full btn text-lg">
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </motion.div>

            {submitted && (
              <motion.div className="mt-4 p-4 bg-lime-accent/20 border border-lime-accent rounded-lg text-center text-lime-accent font-semibold" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                Thank you! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>

          {/* Alternative Contact Methods */}
          <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            {[
              {
                icon: "📧",
                title: "Email",
                value: "oluwajobaisaac08@gmail.com",
                link: "mailto:oluwajobaisaac08@gmail.com",
              },
              {
                icon: "💼",
                title: "LinkedIn",
                value: "Visit Profile",
                link: "https://linkedin.com/in/oluwajoba-bukola",
              },
              {
                icon: "𝕏",
                title: "Twitter",
                value: "@OluwajobaBukola",
                link: "https://twitter.com/OluwajobaBukola",
              },
            ].map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-dark-gray border border-gray-800 hover:bg-lime-accent/10 hover:border-lime-accent/50 transition-colors duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                <h3 className="font-semibold text-white">{method.title}</h3>
                <p className="text-sm text-light-gray mt-1">{method.value}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

export default Contact
