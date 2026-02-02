"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import ParticleBackground from "./ParticleBackground"
import FloatingElements from "./FloatingElements"
import AnimatedCounter from "./AnimatedCounter"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 pt-24 pb-14 sm:pb-16 lg:pt-0">
      <ParticleBackground />
      <FloatingElements />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:max-w-lg lg:flex-shrink-0 lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="mb-4 border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Sparkles className="h-3 w-3 mr-1" />
              Available for Opportunities
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF8C00] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Anurag Gupta
            </motion.span>
          </motion.h1>


          <motion.p
            variants={itemVariants}
            className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg lg:text-left"
          >
            Computer Science Engineering Student at SRM University AP with expertise in Full Stack Development, AI/ML.. Passionate about building innovative solutions that make a difference.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {["Full Stack Developer", "AI/ML Enthusiast"].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, type: "spring" }}
              >
                <Badge variant="secondary" className="hover:bg-primary/20 transition-colors cursor-default">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:justify-start"
          >
            <Button asChild className="group">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" asChild className="group">
              <a href="/resume.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:justify-start"
          >
            {[
              { href: "mailto:anuragupta290@gmail.com", Icon: Mail, label: "Email" },
              { href: "tel:+916229052188", Icon: Phone, label: "Phone" },
              { href: "www.linkedin.com/in/anuragupta101", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/anuragg290", Icon: Github, label: "GitHub" },
            ].map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 flex justify-center lg:mt-0"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background to-primary/5">
            <CardContent className="p-6 sm:p-8">
              <motion.div
                className="relative h-[220px] w-[220px] rounded-full overflow-hidden border-4 border-primary/20 sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile-photo2.jpg"
                  alt="Anurag Gupta"
                  fill
                  className="object-cover"
                  priority
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </motion.div>

              <div className="mt-6 grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                <div>
                  <AnimatedCounter end={400} suffix="+" />
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                </div>
                <div>
                  <AnimatedCounter end={10} suffix="+" />
                  <p className="text-sm text-muted-foreground">Projects Built</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
