"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, Github, Star } from "lucide-react"
import ProjectImageCarousel from "./ProjectImageCarousel"
import { useRef } from "react"

// const projects = [
//   {
//     title: "UniLink",
//     description:
//       "A role-based university networking platform enabling profile management, real-time chat, certificate verification, and admin moderation — enhancing academic connectivity and credential validation.",
//     details:
//       "Developed the full-stack system using React.js, Node.js, and MongoDB, with Socket.io for real-time messaging, Multer for file uploads, Email.js for notifications, and JWT-based secure authentication — optimized for scalability and deployed with CI/CD on Vercel and Render.",
//     technologies: ["React.js", "Node.js", "JWT", "Socket.io", "NodeMailer", "MongoDB", "Firebase"],
//     date: "April 2025",
//     github: "https://github.com/Anuragg290/UniLink-Frontend",
//     featured: true,
  
//     images: [
//       "/images/unilink_landing.png",
//       "/images/unilink_friend.png",
//       "/images/unilink_report.png",
//       "/images/unilink_profile.png",
//       "/images/unilink_admin.png",
//     ],
//   },
//   {
//     title: "Expense Tracker",
//     description:
//       "A responsive expense tracking application enabling users to log, categorize, and manage daily spending through a clean, interactive interface.",
//     details:
//       "Built with React, Tailwind CSS, and Node.js, utilizing JSON Server as a mock backend for real-time CRUD operations — delivering seamless performance across all devices with an intuitive user experience.",
//     technologies: ["React.js", "Tailwind CSS", "Node.js", "JSON Server", "Chart.js"],
//     date: "Nov 2024",
//     github: "https://github.com/Anuragg290/expense-tracker",
//     featured: true,
    
//     images: [
//       "/images/Expense_Dashboard.png",
//       "/images/expense_feature.png",
//       "/images/expense_landing.png",
   
//     ],
//   },
//   {
//     title: "Bus Reservation System",
//     description:
//       "A role-based bus reservation and live tracking system enabling students, staff, and drivers to manage registrations, monitor bus locations, and update real-time passenger data through a centralized portal.",
//     details:
//       "Built with HTML, CSS, PHP, and SQL, and styled using the Bootstrap framework for full responsiveness. Implements user authentication, role-specific dashboards, live location updates, and dynamic passenger tracking — supporting streamlined transport management within educational institutions.",


//     technologies: ["JavaScript","Bootstrap","PHP","JavaScript Map", "SQL",],
//     date: "July 2024",
//     github: "https://github.com/Anuragg290/Bus-Reservation",
 
//     images: [
//       "/images/Bus_login.png",
//       "/images/bus_student_portal.png",
//       "/images/bus_map.png",
//     ],
//   },
// ]
const projects = [
  {
    title: "UniLink",
    description:
      "A full-stack university social and professional networking platform enabling students to build profiles, connect, chat in real time, and verify academic certificates with admin moderation.",
    details:
      "Built using React.js, Node.js, Express, and MongoDB with OAuth 2.0 and JWT-based authentication. Implemented real-time messaging using Socket.io, role-based access control for admins, certificate uploads, and SMTP email notifications. Designed for scalability and deployed using CI/CD pipelines on Vercel and Render.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OAuth 2.0",
      "Socket.io",
      "Nodemailer",
    ],
    date: "April 2025",
    github: "https://github.com/Anuragg290/UniLink-Frontend",
    featured: true,
    images: [
      "/images/unilink_landing.png",
      "/images/unilink_friend.png",
      "/images/unilink_report.png",
      "/images/unilink_profile.png",
      "/images/unilink_admin.png",
    ],
  },

  {
    title: "ResumeXpert",
    description:
      "A full-stack resume builder platform allowing users to create, customize, preview, and export professional resumes in real time.",
    details:
      "Developed with React and Tailwind CSS on the frontend and Node.js, MongoDB on the backend. Implemented JWT-based authentication, REST APIs, real-time preview, PDF export, and modular resume sections with advanced form validation using React Hooks.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    date: "March 2025",
    github: "https://github.com/Anuragg290",
    featured: true,
    images: [
      "/images/landing_resumeexpert.png",
      "/images/updating_resume.png",
      "/images/template_resume.png",
      "/images/preview_resume.png",
    ],
  },

  {
    title: "Quiz Lab",
    description:
      "An AI-powered quiz-based learning platform designed to help students assess and improve their Computer Science fundamentals.",
    details:
      "Built using Next.js and TypeScript with MongoDB for data storage. Integrated Gemini AI to auto-generate quizzes and provide personalized feedback. Includes interactive dashboards to track quiz history, topic-wise performance, and learning progress.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Gemini AI",
    ],
    date: "Oct 2024",
    github: "https://github.com/Anuragg290",
    images: [
      "/images/landing_quizlab.png",
       "/images/hero_quizlab.png",
      "/images/dashboard_quizlab.png",
   "/images/quiz.png",
   "/images/result_quizlab.png",
      "/images/Achievements_quizlab.png",
     
    ],
  },

  // {
  //   title: "Bus Reservation System",
  //   description:
  //     "A role-based bus reservation and live tracking system for students, staff, and drivers within educational institutions.",
  //   details:
  //     "Developed using PHP, SQL, HTML, CSS, and Bootstrap. Features include authentication, role-specific dashboards, live bus location tracking, and real-time passenger management through an interactive map interface.",
  //   technologies: [
  //     "PHP",
  //     "SQL",
  //     "JavaScript",
  //     "Bootstrap",
  //     "Maps API",
  //   ],
  //   date: "July 2024",
  //   github: "https://github.com/Anuragg290/Bus-Reservation",
  //   images: [
  //     "/images/Bus_login.png",
  //     "/images/bus_student_portal.png",
  //     "/images/bus_map.png",
  //   ],
  // },
  {
    title: "MindThread",
    description:
      "A real-time collaborative group chat application designed for seamless communication, file sharing, and AI-powered conversation summarization.",
    details:
      "Developed using the MERN stack with React and Tailwind CSS for the frontend, and Node.js with Express for backend APIs. Real-time messaging, typing indicators, and live updates are powered by Socket.IO. Implemented secure JWT-based authentication with role-based access control for group chats. Integrated Cloudinary for secure file uploads and Gemini AI to generate concise summaries of chat conversations. Architected with a clear separation between RESTful data persistence and WebSocket-based real-time communication for scalability.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
      "Gemini AI",
    ],
    date: "2025",
    github: "https://github.com/Anuragg290/MindThread",
    featured: true,
    images: [
      "/images/login_mindthread.png",
      "/images/dashboard_mindthread.png",
      "/images/chatui.png",
      "/images/summary_mindthread.png",
    ],
  },
  
]


export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        damping: 15,
      },
    },
  }

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
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
            Featured Projects
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects and innovations that solve real-world problems
          </p>
          <Separator className="w-24 mx-auto mt-6 bg-primary" />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center gap-12 sm:gap-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full max-w-full lg:max-w-[80%]"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 w-full">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2 text-center sm:text-left">
                      <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                        {project.title}
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                          >
                            <Badge className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </motion.div>
                        )}
                      </CardTitle>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground sm:justify-start">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{project.date}</span>
                        </div>
                        {project.stats && (
                          <div className="flex items-center gap-4 flex-wrap">
                            {Object.entries(project.stats).map(([key, value]) => (
                              <Badge key={key} variant="outline" className="text-xs">
                                {value}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="w-full">
                    <ProjectImageCarousel images={project.images} alt={project.title} />
                  </div>

                  <div className="space-y-4 w-full">
                    <p className="text-left text-muted-foreground leading-relaxed sm:text-justify">{project.description}</p>
                    <p className="text-left text-sm text-muted-foreground leading-relaxed sm:text-justify">{project.details}</p>
                  </div>

                  <Separator className="w-full" />

                  <div className="space-y-4 w-full">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 w-full justify-center sm:justify-start">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full flex-wrap gap-3 pt-4 justify-center sm:justify-start">
                    <Button variant="default" size="sm" asChild className="group">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
