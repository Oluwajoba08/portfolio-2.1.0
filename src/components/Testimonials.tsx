import React, { useState, useRef } from "react"
import { motion } from "motion/react"
import TextScroller from "./ui/TextScroller"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Joba was a fantastic experience. He is not only highly skilled but also incredibly reliable and communicative. Joba consistently delivered quality work on time and was proactive in finding solutions. I would happily recommend them to anyone looking for a dedicated professional.",
    author: "Silas Idowu",
    authorImage: "/silas-image.jpg",
    role: "Mobile App Developer at Azawire",
    image: "/learn-more-link-list.jpeg",
    tags: ["Mobile", "Development"],
  },
  {
    id: 2,
    quote: "Outstanding work on our website redesign. The attention to detail and creative approach really impressed us.",
    author: "Jude Oscar",
    authorImage: "/jude-image.jpg",
    role: "Fullstack Developer",
    image: "/flash-image.jpeg",
    tags: ["Website", "Development"],
  },
  // {
  //   id: 3,
  //   quote: "Outstanding work on our website redesign. The attention to detail and creative approach really impressed us.",
  //   author: "John Hone ",
  //   authorImage: "/oluwajoba-image.png",
  //   role: "Client",
  //   image: "/invofi-home-screen.jpg",
  //   tags: ["Graphic", "Design"],
  // },
]

const Testimonials = () => {
  const [scrollLeft, setScrollLeft] = useState(0)
  const scrollerRef = useRef<HTMLDivElement>(null)

  const handleLeftClick = () => {
    if (scrollLeft < scrollerRef.current?.clientWidth! || scrollLeft === scrollerRef.current?.clientWidth!) {
      setScrollLeft(0)
      scrollerRef.current?.scroll({ top: 0, left: 0, behavior: "smooth" })
    } else {
      setScrollLeft(scrollLeft - scrollerRef.current?.clientWidth!)
      scrollerRef.current?.scroll({
        top: 0,
        left: scrollLeft - scrollerRef.current?.clientWidth!,
        behavior: "smooth",
      })
    } // else {
    //   setScrollLeft();
    //   scrollerRef.current?.scroll({top: 0, left: 0, behavior: "smooth"});
    // }
  }

  const handleRightClick = () => {
    if (scrollLeft < scrollerRef.current?.scrollWidth! && scrollerRef.current?.scrollWidth! - scrollLeft > scrollerRef.current?.clientWidth!) {
      setScrollLeft(scrollLeft + scrollerRef.current?.clientWidth!)
      scrollerRef.current?.scroll({
        top: 0,
        left: scrollLeft + scrollerRef.current?.clientWidth!,
        behavior: "smooth",
      })
    } else {
      setScrollLeft(scrollerRef.current?.scrollWidth! - scrollerRef.current?.clientWidth!)
      scrollerRef.current?.scroll({
        top: 0,
        left: scrollerRef.current?.scrollWidth - scrollerRef.current?.clientWidth,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="pt-20 pb-0 relative overflow-hidden">
      <TextScroller text="TESTIMONIALS" />

      <div className="max-w-7xl mx-auto relative z-10 ">
        <div ref={scrollerRef} className="overflow-hidden">
          <div className="flex [width:max-content] gap-10 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className={`p-8 lg:p-12 rounded-2xl w-[calc(100vw-10rem)] flex gap-10 items-stretch justify-center bg-neutral-300 text-black hover:bg-lime-accent transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img src={testimonial.image} alt={testimonial.author} className="w-1/2 h-[calc(100vh-14rem)] rounded-xl object-cover" />
                <div className="flex flex-col justify-between align-center">
                  {/* <div className="flex gap-2">
                    {testimonial.tags.map((tag) => (
                      <p className="text-sm px-3 py-2 rounded-full border-[1.5px] border-black">{tag}</p>
                    ))}
                  </div> */}
                  <p className="text-xl">"{testimonial.quote}"</p>
                  <div className="flex gap-4 items-center">
                    <img className="w-12 h-12 rounded-full" src={testimonial.authorImage} alt={testimonial.author} />
                    <div className="flex flex-col">
                      <p>{testimonial.author}</p>
                      <p className="text-sm font-light text-gray-700">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-end gap-4 mt-8 mb-20">
          <button onClick={handleLeftClick} className="w-10 h-10 rounded-full bg-white border border-gray-700 flex items-center justify-center text-black hover:bg-lime-accent transition-all duration-300" aria-label="Previous testimonial">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={handleRightClick} className="w-10 h-10 rounded-full bg-dark-gray border border-gray-700 flex items-center justify-center text-white hover:bg-lime-accent transition-all duration-300" aria-label="Next testimonial">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
