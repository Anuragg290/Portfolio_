import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-10 flex justify-center space-x-10">
          <a href="mailto:anuragupta290@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
          <a href="tel:+916299052188" className="text-muted-foreground hover:text-primary transition-colors">
            <span className="sr-only">Phone</span>
            <Phone className="h-6 w-6" />
          </a>
          <a
            href="https://github.com/anuragg290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/anuragupta101/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          © 2025 Anurag Gupta. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
