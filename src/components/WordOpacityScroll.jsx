import React, { useRef } from "react"
import { useScroll, motion, useTransform } from "motion/react"

export default function WordOpacityScroll({ value }) {
  const element = useRef(null)
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = value.split(" ")

  return (
    <p className="flex flex-wrap leading-none text-gray-900 text-2xl sm:text-4xl mb-6" ref={element}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        )
      })}
    </p>
  )
}

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="mr-2 mt-2 relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}
