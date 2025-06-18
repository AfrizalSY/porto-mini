"use client"

import { useState } from "react"
import Link from "next/link"
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Phone, Briefcase, Code, Camera, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 text-6xl">🐍</div>
        <div className="absolute top-40 right-40 text-6xl">⚛️</div>
        <div className="absolute bottom-40 left-40 text-6xl">📊</div>
        <div className="absolute bottom-20 right-20 text-6xl">🖥️</div>
        <div className="absolute top-1/2 left-1/3 text-6xl">🔍</div>
        <div className="absolute top-1/4 right-1/4 text-6xl">🧠</div>
        <div className="absolute bottom-1/3 right-1/3 text-6xl">🌐</div>
        <div className="absolute top-1/3 left-1/4 text-6xl">📷</div>
        <div className="absolute bottom-1/4 left-1/2 text-6xl">🎬</div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 relative z-10">
        <nav className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <Link href="/" className="text-xl font-bold text-orange-400">
            &gt; AfrizalSY_
          </Link>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-orange-400 border-b-2 border-orange-400 text-orange-400 pb-1">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-400 text-gray-300 transition-colors">
              About
            </Link>
            <Link href="#education" className="hover:text-orange-400 text-gray-300 transition-colors">
              Education
            </Link>
            <Link href="#experience" className="hover:text-orange-400 text-gray-300 transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-orange-400 text-gray-300 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-orange-400 text-gray-300 transition-colors">
              Projects
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-orange-400 transition-all"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
          {/* Left Column - Hero */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hello <span className="inline-block animate-bounce">👋</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I&apos;m <span className="text-orange-400">Afrizal Syahruluddin Yusuf</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">Informatics Graduate | Videographer | Photographer</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#experience">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                  See My Journey →
                </Button>
              </Link>
              <Link href="#about">
                <Button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all bg-transparent">
                  About Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="w-full lg:w-2/5 bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-2xl">
            <h3 className="text-orange-400 font-mono mb-6 text-lg">// get-in-touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Location</p>
                  <p className="text-gray-400">Bangkalan, Jawa Timur, 69116</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-green-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Phone</p>
                  <a href="tel:+6281234113911" className="text-orange-400 hover:text-orange-300 transition-colors">
                    +62 81234113911
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">Email</p>
                  <a
                    href="mailto:afrizalsyahruluddinyusuf@gmail.com"
                    className="text-orange-400 hover:text-orange-300 transition-colors break-all"
                  >
                    afrizalsyahruluddinyusuf@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Github className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">GitHub</p>
                  <a
                    href="https://github.com/AfrizalSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    github.com/AfrizalSY
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Linkedin className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-white mb-1">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/afrizalsy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    linkedin.com/in/afrizalsy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Informatics graduate with a strong background in information technology and good analytical skills. I have
              experience managing data, compiling reports, and using various software, including Microsoft Office
              (Excel, Word, and PowerPoint), to support decision-making. I also have practical communication skills,
              both individually and in a team, which allows me to coordinate with various departments to achieve common
              goals.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              With a detail-oriented work approach and proven problem-solving skills, I am accustomed to working under
              pressure to meet set targets and deadlines. I am eager to contribute to ensuring that the development of
              mobile broadband infrastructure runs according to planned standards and schedules.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Education</h2>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Telkom University</h3>
                <p className="text-gray-400 text-lg">Bachelor's Degree in Informatics</p>
              </div>
              <div className="mt-4 lg:mt-0 text-right">
                <p className="text-orange-400 font-semibold text-lg">Aug 2019 - Sep 2023</p>
                <p className="text-gray-400">GPA: 3.67/4.00</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-4 text-white text-lg">Activities & Memberships:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-lg">
                <li>Member of Proclub Telkom University</li>
                <li>Member of Artificial Intelligence Laboratory Telkom University</li>
                <li>Member of Student's Activities for Research and Competition Handling Telkom University</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
          </div>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Elbond Education Organizer</h3>
                  <p className="text-gray-400">Videographer & Photographer – Freelance</p>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-orange-400 font-semibold">Jul 2024 - Feb 2025 (Present)</p>
                  <p className="text-gray-400">Batu, Indonesia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Outing PT Elite Air Industrial</li>
                <li>Outing PT Husky-CNOOC Madura Limited</li>
                <li>Outing PT Jambuluwuk</li>
                <li>Employee Gathering PT Gadai Mas Jatim</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Aesthetic Studio Event Documentation</h3>
                  <p className="text-gray-400">Videographer & Photographer – Freelance</p>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-orange-400 font-semibold">May 2024 - Feb 2025 (Present)</p>
                  <p className="text-gray-400">Malang, Indonesia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Photography and Videography Exercise Malang Creative Center</li>
                <li>KPU Mascot Parade of Lowokwaru District, Malang</li>
                <li>Inauguration and Opening of the East Java Gadai Mas Office Building</li>
                <li>Ground Breaking of 2024 Plants of Perum Perhutani, East Java Regional Division</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">PT. Nutrifood Indonesia – Telkom University</h3>
                  <p className="text-gray-400">Research Assistant – Intern</p>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-orange-400 font-semibold">Jul 2022 - Sep 2022</p>
                  <p className="text-gray-400">Bandung, Indonesia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Develop of a classification model Gated Recurrent Unit (GRU)</li>
                <li>Processing 20.000+ fake news data</li>
                <li>Create Enterpirse Social Media Monitoring System (ESM-MS) software development</li>
                <li>Create administration, finance and report preparation</li>
                <li>Create Term of Reference (TOR) for company-organized training</li>
              </ul>
            </div>

            {/* Experience 4 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Balitbang SDM Kementerian Kominfo</h3>
                  <p className="text-gray-400">Independent Study. Network Programmability (MSIB)</p>
                </div>
                <div className="mt-4 lg:mt-0 text-right">
                  <p className="text-orange-400 font-semibold">Feb 2022 - Jul 2022</p>
                  <p className="text-gray-400">Jakarta, Indonesia</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Achieved CCNA certification covering topics such as network fundamentals, security, and automation:
                  Introduction to Networks, Switching, Routing, and Wireless Essentials, Enterprise Networking,
                  Security, and Automation, DevNet Associate, NDG Linux Unhatched, and Programming Essentials in Python.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Skills</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="text-orange-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Hard Skills</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">Videography & Photography</span>
                    <span className="text-orange-400">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">Editing</span>
                    <span className="text-orange-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">Programming (Python)</span>
                    <span className="text-orange-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-orange-500 h-3 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-orange-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Leadership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Teamwork</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="text-gray-300">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>

          {/* Software & Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Software */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Laptop className="text-orange-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Software</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Premiere", "After Effect", "Filmora", "Capcut", "Microsoft", "VS Code", "R Studio", "Power BI"].map(
                  (software) => (
                    <div key={software} className="bg-gray-700 border border-gray-600 p-3 rounded-lg text-center">
                      <p className="text-gray-200 font-medium">{software}</p>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Camera className="text-orange-400" size={28} />
                <h3 className="text-2xl font-bold text-white">Tools</h3>
              </div>
              <div className="space-y-3">
                {["DSLR & Mirrorless", "Drone (DJI)", "Stabilizer (DJI)", "Lightning", "Laptop", "Desktop"].map(
                  (tool) => (
                    <div key={tool} className="flex items-center space-x-3">
                      <span className="text-orange-400 text-xl">•</span>
                      <span className="text-gray-300">{tool}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Some of my recent work and personal projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300 hover:border-orange-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">COVID-19 Dashboard</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Interactive dashboard for visualizing COVID-19 data with various filters and charts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    Python
                  </span>
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    Data Viz
                  </span>
                </div>
                <a
                  href="https://github.com/AfrizalSY/covid-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300 hover:border-orange-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Smart Contract App</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Simple application for blockchain smart contracts with web interface.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    JavaScript
                  </span>
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    Blockchain
                  </span>
                </div>
                <a
                  href="https://github.com/AfrizalSY/simple-smart-contract-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-orange-500/10 hover:shadow-2xl transition-all duration-300 hover:border-orange-500/50">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">Fuzzy Logic Implementation</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Implementation of fuzzy logic algorithms for decision-making systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    Python
                  </span>
                  <span className="bg-gray-700 border border-gray-600 px-3 py-1 rounded-full text-sm text-gray-300">
                    AI
                  </span>
                </div>
                <a
                  href="https://github.com/AfrizalSY/Fuzzy_Logic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-700 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Afrizal Syahruluddin Yusuf. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/AfrizalSY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/afrizalsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
