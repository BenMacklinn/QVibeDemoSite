'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Animate connections counter
    const targetConnections = 500 // Update this with actual LinkedIn connections count
    const duration = 2000
    const steps = 60
    const increment = targetConnections / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= targetConnections) {
        setConnections(targetConnections)
        clearInterval(timer)
      } else {
        setConnections(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [])

  const experiences = [
    {
      title: 'President and Founder',
      company: 'Queen\'s Applied AI Club - QVibe',
      period: 'Oct 2025 - Present',
      description: 'Queen\'s University\'s first AI-builder community teaching students (technical and non technical) how to use modern AI tools to build. I lead workshops, partnerships, and oversee projects that turn ideas into real products.',
    },
    {
      title: 'Campus Ambassador',
      company: 'Cursor',
      period: 'Oct 2025 - Present',
      description: 'Selected as 1 of 5 brand ambassadors in Canada, helping grow Cursor on Campus at Queen\'s University.',
    },
    {
      title: 'VC Technology Analyst',
      company: 'Awz',
      period: 'Jul 2025 - Aug 2025',
      description: 'Built a locally hosted AI workflow to automate the entire investment memo generation process, combining both Perplexity Deep Research API and internal documentation retrieval with RAG using Qdrant, cutting prep time by 80%. Worked closely with portfolio seed-stage companies, gaining hands-on experience with startup operations, founder dynamics, and the venture capital decision-making process.',
      skills: ['Workflow Automation', 'Defense Technology'],
    },
    {
      title: 'Co-Founder',
      company: 'Case AI',
      period: 'May 2025',
      description: 'Developed an AI-powered software to help thousands of students excel in case interview preparation.',
      skills: ['Full-Stack Development'],
    },
    {
      title: 'GTM Sales Intern',
      company: 'North American Produce Buyers LTD',
      period: 'Apr 2024 - Jul 2024',
      description: 'Helped grow the child company (The Fruit Cart) by taking the lead on overall sales and promotion.',
      skills: ['Sales and Marketing', 'Customer Relationship Management (CRM)'],
    },
  ]

  const projects = [
    {
      name: 'Case AI',
      description: 'An AI-powered case interview coach that lets you practice cases, get real-time, high-level feedback, and actually help you improve. Uses GPT-4 for dynamic prompts and structured feedback, Whisper for real-time transcription, and a responsive React frontend for a clean, intuitive user experience.',
      tech: ['React', 'FastAPI', 'GPT-4', 'Whisper', 'Material UI'],
      link: 'https://www.caseai.ca',
    },
    {
      name: 'Reception - AI Powered Voice Receptionist',
      description: 'Built an AI-powered voice receptionist that answers real phone calls, interacts naturally with callers, and books appointments automatically. Uses Vapi for voice interaction, n8n for workflow automation, and integrates with Google Calendar and CRMs.',
      tech: ['Vapi', 'n8n', 'Supabase', 'Google Calendar API'],
    },
    {
      name: 'Robotic Hand Project',
      description: 'Built a physical robotic hand using Gaël Langevin\'s open source hand model (InMoov), focusing on power management, PSUs, and PDBs. Explored the intersection of computer vision and robotics using MediaPipe and OpenCV for hand tracking.',
      tech: ['MediaPipe', 'OpenCV', 'InMoov', 'Power Systems'],
    },
  ]

  const skills = [
    'Full-Stack Development',
    'Workflow Automation',
    'Machine Learning',
    'Investment Process',
    'Defense Technology',
    'Conversational AI Development',
    'Sales and Marketing',
    'Customer Relationship Management (CRM)',
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-50/80 backdrop-blur-md z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Ben Macklin</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/profile-picture.png"
                  alt="Ben Macklin"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Ben Macklin
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Computer Engineering @ Queen's University
            </p>
            <p className="text-lg md:text-xl text-primary-600 mb-8">
              Cursor Campus Ambassador
            </p>
            <p className="text-base text-gray-500 mb-4">
              Greater Toronto Area, Canada
            </p>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-blue-200">
                <div className="text-3xl font-bold text-primary-600">{connections}+</div>
                <div className="text-sm text-gray-600">LinkedIn Connections</div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition shadow-lg"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Passionate about AI and entrepreneurship, I'm driven by applying AI tools to become more productive, efficient, and creative in building new solutions. I'm focused on the intersection of technology and business, exploring how emerging tools can evolve into scalable ventures and reshape industries.
              </p>
              <p>
                I thrive in collaborative, fast-paced environments, always eager to learn, experiment, and turn innovative ideas into real impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                      <p className="text-lg text-primary-600">{exp.company}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-600 mb-3">{exp.description}</p>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition h-full flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white text-gray-700 rounded text-xs border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      Visit Project →
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">Bachelor's degree, Computer Engineering</h3>
                <p className="text-lg text-primary-600">Stephen J. R. Smith Faculty of Engineering and Applied Science at Queen's University</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900">High School Diploma, Engineering</h3>
                <p className="text-lg text-primary-600">TanenbaumCHAT</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about AI and technology.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ben-macklin-927576297/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition shadow-lg"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white relative">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Ben Macklin. All rights reserved.</p>
        </div>
        {/* LinkedIn Link in Bottom Corner */}
        <a
          href="https://www.linkedin.com/in/ben-macklin-927576297/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
          aria-label="Connect on LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </footer>
    </main>
  )
}

