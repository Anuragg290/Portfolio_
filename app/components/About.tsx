"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, MapPin, Calendar, Award, TrendingUp } from "lucide-react"
import { useRef, useEffect, useState } from "react"
import AnimatedCounter from "./AnimatedCounter"

const skills = [
  { name: "Full Stack Development", level: 85 },
  { name: "AI/ML", level: 75 },
  { name: "Problem Solving", level: 80 },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [progressValues, setProgressValues] = useState(skills.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const timers = skills.map((skill, index) =>
        setTimeout(() => {
          setProgressValues((prev) => {
            const newValues = [...prev]
            newValues[index] = skill.level
            return newValues
          })
        }, index * 200),
      )
      return () => timers.forEach(clearTimeout)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold text-foreground sm:text-4xl mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
           I'm a passionate Computer Science Engineering student with a strong foundation in full-stack development and AI/ML. I thrive on solving complex problems and enjoy building innovative, impactful solutions.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-primary" />
                My Journey
              </h3>
              <p className="text-muted-foreground mb-6">
                Currently pursuing a B.Tech in Computer Science and Engineering at SRM University AP. I'm in my final year, with a current GPA of 8.52/10. I have 1 years of hands-on experience in building full-stack applications.
              </p>
              <p className="text-muted-foreground mb-6">
               I've worked on a variety of projects including UniLink, a professional networking platform for students, and a customer retention analytics system using machine learning. I'm always eager to explore new technologies and take on challenging, real-world problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card className="p-4 text-center hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="p-0">
                  <AnimatedCounter end={8.52} suffix="/10" />
                  <p className="text-sm text-muted-foreground">Current GPA</p>
                </CardContent>
              </Card>
              <Card className="p-4 text-center hover:shadow-lg transition-shadow border-primary/20">
                <CardContent className="p-0">
                  <AnimatedCounter end={1} suffix=" Years" />
                  <p className="text-sm text-muted-foreground">Experience</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-foreground mb-4">Technical Proficiency</h4>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{progressValues[index]}%</span>
                  </div>
                  <Progress value={progressValues[index]} className="h-2" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="p-2 bg-primary/10 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h4 className="text-xl font-semibold">Education</h4>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-foreground">B.Tech in Computer Science and Engineering</h5>
                    <p className="text-muted-foreground">SRM University AP</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4" />
                      Oct 2022 - June 2026 | GPA: 8.52/10
                    </p>
                  </div>

                  <div>
                    <h6 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      Relevant Coursework:
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Operating Systems",
                        "Machine Learning",
                        "Computer Networks",
                        "Database Management",
                        "Web Technologies",
                        "Object Oriented Programming",
                      ].map((course) => (
                        <motion.div key={course} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Badge variant="outline" className="hover:bg-primary/20 transition-colors cursor-default">
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Vijayawada, India</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
