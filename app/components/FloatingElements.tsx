"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Brain, Zap, Globe } from "lucide-react"
import { useEffect, useState } from "react"

const floatingIcons = [
  { Icon: Code, delay: 0 },
  { Icon: Database, delay: 0.5 },
  { Icon: Smartphone, delay: 1 },
  { Icon: Brain, delay: 1.5 },
  { Icon: Zap, delay: 2 },
  { Icon: Globe, delay: 2.5 },
]

export default function FloatingElements() {
  const [positions, setPositions] = useState<{ left: string; top: string; xPath: number }[]>([])

  useEffect(() => {
    // Generate random positions only on client
    const newPositions = floatingIcons.map(() => ({
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 80 + 10}%`,
      xPath: Math.random() * 100 - 50,
    }))
    setPositions(newPositions)
  }, [])

  if (positions.length === 0) return null // Avoid rendering on first SSR pass

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-amber-500/20"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 0],
            y: [-100, -200, -300],
            x: [0, positions[index].xPath, positions[index].xPath * 2],
          }}
          transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          style={{
            left: positions[index].left,
            top: positions[index].top,
          }}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  )
}
