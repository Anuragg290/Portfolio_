"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Wrench, Layers, Zap, Brain } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import TechStackMarquee from "./TechStackMarquee"

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["C++", "C", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3", "Bash"],
    color: "from-amber-500 to-yellow-600",
  },
  {
    title: "Libraries/Frameworks",
    icon: <Layers className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    color: "from-yellow-600 to-amber-700",
  },
  {
    title: "Tools/Technologies",
    icon: <Wrench className="h-6 w-6" />,
    skills: [ "AWS", "Postman", "REST API", "Jupyter Notebook", "VS Code",  "Git & GitHub"],
    color: "from-amber-700 to-yellow-800",
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MySQL", "MongoDB", "Firebase"],
    color: "from-yellow-500 to-amber-600",
  },
]

const expertiseAreas = [
  { name: "Full Stack Development", level: 85, icon: <Zap className="h-5 w-5" /> },
  { name: "AI/ML", level: 75, icon: <Brain className="h-5 w-5" /> },
  { name: "Problem Solving", level: 80, icon: <Database className="h-5 w-5" /> },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [progressValues, setProgressValues] = useState(expertiseAreas.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const timers = expertiseAreas.map((area, index) =>
        setTimeout(() => {
          setProgressValues((prev) => {
            const newValues = [...prev]
            newValues[index] = area.level
            return newValues
          })
        }, index * 300),
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="skills" className="py-16 sm:py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground sm:text-4xl mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Technical Arsenal
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Expertise Areas */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8">Expertise Areas</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full text-primary">{area.icon}</div>
                        <span className="font-semibold">{area.name}</span>
                      </div>
                      <span className="text-sm font-medium">{progressValues[index]}%</span>
                    </div>
                    <Progress value={progressValues[index]} className="h-3" />
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skill Categories */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
            <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/30 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      className={`mx-auto mb-4 p-3 rounded-full bg-gradient-to-r ${category.color} text-white w-fit`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.icon}
                    </motion.div>
                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs hover:bg-primary/20 transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />
    </section>
  )
}
