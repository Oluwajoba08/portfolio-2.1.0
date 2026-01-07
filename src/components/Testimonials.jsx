import React from 'react'
import { motion } from "motion/react"

const Testimonials = () => {
  const reviews = [
    {
      name: "Jude Oscar",
      role: "Founder, InvoFi",
      content: "Excellent work on our website redesign. Delivered on time and exceeded expectations.",
      image: "/js-logo.png"
    },
    {
      name: "Emmanuel Babatope",
      role: "CEO, Mindvolta",
      content: "Outstanding development skills! Our web app is now faster and more user-friendly thanks to your expertise.",
      image: "/chess-lg.png"
    },
    {
      name: "Teminijesu Adewale",
      role: "Tech Enthusiast",
      content: "Professional and reliable. Highly recommend for any web development needs.",
      image: "/react-code.png"
    },
    // Add more testimonials
  ]

  return (
    <section className="py-8 px-4 section-bg sm:px-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl md:text-3xl text-center font-bold text-primary-blue mb-6">Client Testimonials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <p className="italic mb-4">{review.content}</p>
            <div className="flex items-center">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials