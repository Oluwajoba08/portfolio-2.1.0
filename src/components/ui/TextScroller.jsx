import React from "react"

const TextScroller = ({ text }) => {
  return (
    <div className="scroller mb-10">
      <div className="scroller__inner flex flex-nowrap items-center mx-auto">
        <h2 className="text-7xl sm:text-9xl font-bold text-black select-none">{text.toUpperCase()}</h2>
        <span className="text-7xl sm:text-9xl font-bold text-black select-none">.</span>
        <h2 className="text-7xl sm:text-9xl font-bold text-black select-none">{text.toUpperCase()}</h2>
        <span className="text-7xl sm:text-9xl font-bold text-black select-none">.</span>
        <h2 className="text-7xl sm:text-9xl font-bold text-black select-none">{text.toUpperCase()}</h2>
        <span className="text-7xl sm:text-9xl font-bold text-black select-none">.</span>
        <h2 className="text-7xl sm:text-9xl font-bold text-black select-none">{text.toUpperCase()}</h2>
        <span className="text-7xl sm:text-9xl font-bold text-black select-none">.</span>
        <h2 className="text-7xl sm:text-9xl font-bold text-black select-none">{text.toUpperCase()}</h2>
      </div>
    </div>
  )
}

export default TextScroller
