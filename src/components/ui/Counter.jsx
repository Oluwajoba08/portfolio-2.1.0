import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

export default function Counter({ number, styleText }) {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, number, { duration: 3 })
        return () => controls.stop()
    }, [])

    return (
        <div className="flex items-center">
            <motion.pre className={styleText}>{rounded}</motion.pre>
            <span className={styleText}>+</span>
        </div>
    )
}