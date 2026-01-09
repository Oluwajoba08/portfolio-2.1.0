import React from "react"
import { motion } from "motion/react"
import TwitterLogo from "/twitter-transparent-black.svg"
import GithubLogo from "/github-icon.svg"
import MailLogo from "/mail-logo.svg"
import LinkedInLogo from "/linkedin-black.png"

const Footer = () => {
  const links = [
    { label: "Terms and conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Sitemap", href: "#" },
  ]

  const socials = [
    { icon: TwitterLogo, href: "https://x.com/OluwajobaBukola", label: "X" },
    { icon: LinkedInLogo, href: "https://linkedin.com/oluwajoba-bukola", label: "LinkedIn" },
    { icon: GithubLogo, href: "https://github.com/Oluwajoba08", label: "GitHub" },
    { icon: MailLogo, href: "mailto:oluwajobaisaac@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-dark-bg text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 rounded-full bg-white border border-gray-700 flex items-center justify-center font-bold text-white text-xl mb-4">
              <img src={"/jb-logo.png"} alt="logo" className="w-8 h-8" />
            </div>
            <p className="text-light-gray leading-relaxed">A passionate designer and developer crafting beautiful digital experiences.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-light-gray hover:text-lime-accent transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="font-bold text-lg mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-gray border border-gray-700 flex items-center justify-center hover:bg-lime-accent hover:text-black transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <img src={social.icon} alt={social.label} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <motion.div className="flex flex-col sm:flex-row justify-between items-center gap-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-light-gray text-sm">© 2025 Oluwajoba Bukola. All rights reserved.</p>
          {/* <p className="text-light-gray text-sm">
            Designed & Built with <span className="text-lime-accent">❤️</span> by Oluwajoba Bukola
          </p> */}
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
