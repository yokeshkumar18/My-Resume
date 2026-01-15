"use client"

import { ExternalLink, Github, Zap, Code2, Layers } from "lucide-react"

export default function ResumePreview() {
  const projects = [
    {
      name: "Appointment Booking System",
      description:
        "Dynamic organization subdomain routing with visitor, customer, admin, and owner portals. Implemented QR-based check-in system and role-based access control with fully responsive UI.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "QR Integration"],
      features: ["Subdomain Routing", "QR Check-in", "Role-based Access", "Real-time Updates"],
      impact: "Streamlined appointment management for 500+ users",
      links: { demo: "#", github: "#" },
    },
    {
      name: "ERP Management System",
      description:
        "Complete frontend for inventory, sales, customers, staff, and analytics modules. Built with reusable components, interactive dashboards, and comprehensive error handling.",
      technologies: ["React.js", "Context API", "Tailwind CSS", "Chart.js"],
      features: ["Inventory Tracking", "Sales Dashboard", "Analytics", "Staff Management"],
      impact: "Increased operational efficiency by 40%",
      links: { demo: "#", github: "#" },
    },
    {
      name: "Waitr Restaurant POS",
      description:
        "Real-time desktop POS application with order-taking, table management, kitchen display system, and offline-first architecture for seamless operations.",
      technologies: ["Electron.js", "React.js", "SQLite", "Node.js"],
      features: ["Order Management", "Table Tracking", "KDS", "Offline Mode"],
      impact: "Deployed in 15+ restaurants across India",
      links: { demo: "#", github: "#" },
    },
  ]

  return (
    <div className="bg-white text-slate-900 print:bg-white">
      {/* Header Section */}
      <section className="px-8 py-10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white border-b-2 border-blue-500">
        <div className="max-w-5xl mx-auto">
          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-5xl font-bold mb-2">YOKESH KUMAR T R</h1>
            <p className="text-xl text-blue-300 font-semibold">Software Engineer | Frontend Developer</p>
          </div>

          {/* Contact Info - Horizontal Layout */}
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>+91 7010509091</span>
            <span>•</span>
            <a href="mailto:yokeshk868@gmail.com" className="hover:text-blue-300 transition-colors">
              yokeshk868@gmail.com
            </a>
            <span>•</span>
            <span>India</span>
            <span>•</span>
            <a
              href="https://github.com/yokeshkumar18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              github.com/yokeshkumar18
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        {/* Professional Summary */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Professional Summary</h2>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            Software Engineer with 1+ year of professional experience building scalable web applications using React.js,
            Next.js, and TypeScript. Proven expertise in developing production-ready applications for ERP systems,
            appointment booking platforms, and desktop applications. Strong technical leadership, problem-solving
            abilities, and experience mentoring junior developers.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Code2 size={18} className="text-blue-500" />
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-slate-900 mb-2 text-sm">Frontend</p>
              <p className="text-sm text-slate-600">React.js, Next.js 15, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-slate-900 mb-2 text-sm">Tools & DevOps</p>
              <p className="text-sm text-slate-600">Git, GitHub, Docker, GitHub Actions, Electron.js</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
              <p className="font-semibold text-slate-900 mb-2 text-sm">Architecture</p>
              <p className="text-sm text-slate-600">Component-based, SSR, Responsive Design, Offline-first</p>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Zap size={18} className="text-blue-500" />
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Professional Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Experience 1 */}
            <div className="border-l-4 border-blue-400 pl-4 pb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900">Frontend Developer</h3>
                <span className="text-xs text-slate-500 bg-blue-100 px-2 py-1 rounded">Feb 2024 - Oct 2024</span>
              </div>
              <p className="text-sm text-blue-600 font-semibold mb-3">Primora Technologies</p>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Developed production-ready web applications using React.js, Next.js 15, and TypeScript</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Built Appointment Booking System with dynamic subdomain routing and QR-code check-in</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>
                    Developed complete ERP Management System handling inventory, sales, customers, and analytics
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Configured CI/CD pipelines for automated testing and deployment using GitHub Actions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Supervised and mentored junior developers on technical implementation and code quality</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-slate-900">Frontend Developer Intern</h3>
                <span className="text-xs text-slate-500 bg-blue-100 px-2 py-1 rounded">Nov 2024 - Present</span>
              </div>
              <p className="text-sm text-blue-600 font-semibold mb-3">Unityr Technologies</p>
              <ul className="space-y-1.5 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Built Conference Management Website with real-time content via RESTful APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>
                    Developed Waitr Restaurant POS desktop application using Electron.js with offline-first architecture
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Implemented automated deployment workflows and application configuration management</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 font-bold">•</span>
                  <span>Worked in Agile environment delivering consistent, reliable results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Projects - Enhanced Design */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={18} className="text-blue-500" />
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Featured Projects</h2>
          </div>

          <div className="space-y-5">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-3 border-b border-blue-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-slate-900 text-base">{project.name}</h3>
                  </div>
                </div>

                {/* Project Content */}
                <div className="px-5 py-4">
                  {/* Description */}
                  <p className="text-sm text-slate-700 mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">Key Features</p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="bg-blue-50 border border-blue-200 rounded px-3 py-2 mb-3">
                    <p className="text-xs text-blue-900 font-medium">
                      <span className="font-bold">Impact:</span> {project.impact}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-2 border-t border-slate-200">
                    <a
                      href={project.links.demo}
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      View Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="text-xs font-medium text-slate-600 hover:text-slate-700 flex items-center gap-1"
                    >
                      <Github size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Education</h2>
          </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-lg border border-slate-200">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-slate-900">B.Tech - CSBS</h3>
              <span className="text-xs text-slate-500 bg-slate-200 px-2 py-1 rounded">2022-2026</span>
            </div>
            <p className="text-sm text-slate-600">Computer Science and Business Systems</p>
          </div>
        </div>
      </section>
    </div>
  )
}
