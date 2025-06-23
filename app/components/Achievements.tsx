"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Award, BookOpen, Users, Target, Star, ExternalLink } from "lucide-react"

const achievements = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Research Publications",
    items: [
      {
        title: "IEEE Research Paper (Under Review)",
        description: "Enhancing Gene Selection in DNA Microarray Data Using Fuzzy-Rough Sets",
        details:
          "Collaborated with faculty and a PhD researcher to develop a fuzzy-rough set gene selection method (FRGS), cutting computational time by 30% and boosting cancer diagnosis accuracy by 15% over 10+ algorithms.",
      },
      {
        title: "mRMR Algorithm Optimization",
        description: "Research collaboration with professor",
        details:
          "Partnered with my professor to accelerate the mRMR algorithm by 10x, improving feature selection efficiency in ML models.",
      },
    ],
  },
  {
    icon: <Trophy className="h-6 w-6" />,
    title: "Competitive Programming",
    items: [
      {
        title: "LeetCode Knight (Rating: 1870+)",
        description: "Solved 800+ coding problems across platforms",
        details: "Active on LeetCode, CodeChef (3-Star), and GeeksforGeeks",
        links: [
          { name: "LeetCode", url: "https://leetcode.com/u/Govind_0007/" },
          { name: "CodeChef", url: "https://www.codechef.com/users/govind_0007" },
          { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/govind_007/" },
        ],
      },
      {
        title: "2nd Rank in Code Combat",
        description: "Infinitus, SRM AP's National Tech Fest",
        details: "Demonstrated exceptional problem-solving skills in competitive programming",
      },
    ],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Hackathons & Team Leadership",
    items: [
      {
        title: "Smart India Hackathon Qualifier",
        description: "2023 & 2024 - Team Leader",
        details:
          "Secured selection by the university during the college-level internal hackathon for Smart India Hackathon 2023 & 2024",
      },
      {
        title: "Hack SRM National Hackathon",
        description: "Agentic AI LMS Project",
        details: "Built an innovative AI-powered Learning Management System with a team of 5, sponsored by Six Ladders",
      },
    ],
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Recognition & Impact",
    items: [
      {
        title: "Most Valuable Engineer",
        description: "Krishi Yog Project",
        details:
          "Recognized for developing AI-enhanced disease prediction feature that reduced manual inspection time by 40%",
      },
      {
        title: "High Academic Performance",
        description: "GPA: 8.77/10",
        details: "Consistent academic excellence while actively participating in projects and competitions",
      },
    ],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground">Recognition, awards, and milestones in my journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{category.icon}</div>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-primary/20 pl-4 space-y-3">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-primary mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                      {item.links && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.links.map((link) => (
                            <Button key={link.name} variant="outline" size="sm" asChild>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {link.name}
                              </a>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              <Target className="h-4 w-4 mr-2" />
              800+ Problems Solved
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Award className="h-4 w-4 mr-2" />
              Multiple Hackathon Winner
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" />
              Research Publications
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Team Leadership
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
