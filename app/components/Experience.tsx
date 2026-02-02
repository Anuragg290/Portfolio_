"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Website Development",
    company: "Satyadip International",
    location: "Remote",
    duration: "May 2024 - July 2024",
    description: [
      "Built the entire SatyaDeep International website to professionally showcase the company’s services and offerings.",
      "Implemented form validation and real-time feedback to enhance user engagement and reduce errors.",
    ],
    technologies: ["JavaScript", " Tailwind CSS", "Email.js"],
    github: "https://github.com/Anuragg290/Internship-Project",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and project experiences</p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-primary">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      {exp.github && (
                        <a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:underline text-sm"
                        >
                          <ExternalLink className="h-3 w-3" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
