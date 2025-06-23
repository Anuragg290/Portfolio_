"use client"

import { motion } from "framer-motion"
import { Code, Database, Smartphone, Brain, Zap, Globe } from "lucide-react"

const floatingIcons = [
  { Icon: Code, delay: 0 },
  { Icon: Database, delay: 0.5 },
  { Icon: Smartphone, delay: 1 },
  { Icon: Brain, delay: 1.5 },
  { Icon: Zap, delay: 2 },
  { Icon: Globe, delay: 2.5 },
]

export default function FloatingElements() {
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
            x: [0, Math.random() * 100 - 50, Math.random() * 200 - 100],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
        >
          <Icon className="h-8 w-8" />
        </motion.div>
      ))}
    </div>
  )
}
