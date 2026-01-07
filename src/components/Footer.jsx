import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
  const links = [
    { label: 'Terms and conditions', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Sitemap', href: '#' }
  ]

  const socials = [
    { icon: '𝕏', href: 'https://twitter.com', label: 'Twitter' },
    { icon: '💼', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: '🐙', href: 'https://github.com', label: 'GitHub' },
    { icon: '📧', href: 'mailto:andlo@example.com', label: 'Email' }
  ]

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b4ff81] to-green-500 flex items-center justify-center font-bold text-black text-xl mb-4">
              A
            </div>
            <p className="text-gray-300 leading-relaxed">
              A passionate designer and developer crafting beautiful digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-[#b4ff81] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#b4ff81] hover:text-black transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Andlo. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Designed & Built with <span className="text-[#b4ff81]">❤️</span> by Andlo
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer