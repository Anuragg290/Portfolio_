"use client"

import { motion } from "framer-motion"

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📝" },
  { name: "Express.js", icon: "🚀" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "⚡" },
  { name: "FastAPI", icon: "⚡" },
]

export default function TechStackMarquee() {
  return (
    <div className="py-12 bg-gradient-to-r from-background via-secondary/10 to-background overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-4 sm:gap-6 lg:gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 30,
          }}
        >
          {/* First set of tech stack */}
          {techStack.map((tech, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex min-w-fit items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-3 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex min-w-fit items-center gap-2 px-4 py-2 sm:gap-3 sm:px-6 sm:py-3 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-medium text-foreground">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-muted-foreground text-sm">Technologies I work with to build amazing projects</p>
      </div>
    </div>
  )
}
