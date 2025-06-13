"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Moon, Sun, Github, Linkedin, Mail, MapPin, Phone, Award, Briefcase, Code, Camera, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <div className="min-h-screen bg-[#f5f2ea] dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative overflow-hidden">
      {/* Background Tech Icons */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none z-0 select-none">
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
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-orange-500">
            &gt; AfrizalSY_
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-orange-500 border-b-2 border-orange-500">
              Home
            </Link>
            <Link href="#about" className="hover:text-orange-500">
              About
            </Link>
            <Link href="#education" className="hover:text-orange-500">
              Education
            </Link>
            <Link href="#experience" className="hover:text-orange-500">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-orange-500">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-orange-500">
              Projects
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Column - Hero */}
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">
              Hello <span className="inline-block animate-wave">👋</span>
            </h1>
            <h2 className="text-4xl font-bold mb-4">
              I&apos;m <span className="text-orange-500">Afrizal Syahruluddin Yusuf</span>
            </h2>
            <p className="text-xl mb-8">Informatics Graduate | Videographer | Photographer</p>

            <div className="flex space-x-4">
              <Link href="#experience">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md flex items-center space-x-2">
                  <span>See My Journey</span>
                  <span>&rarr;</span>
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-100 dark:hover:bg-gray-800 px-6 py-2 rounded-md"
                >
                  About Me
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="w-full md:w-2/5 bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-orange-500 font-mono mb-4">// get-in-touch</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-500 mt-1" size={18} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Bangkalan, Jawa Timur, 69116</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-green-500 mt-1" size={18} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+6281234113911" className="text-orange-500 hover:underline">
                    +62
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-blue-500 mt-1" size={18} />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:afrizalsyahruluddinyusuf@gmail.com" className="text-orange-500 hover:underline">
                    afrizalsyahruluddinyusuf@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Github className="text-purple-500 mt-1" size={18} />
                <div>
                  <p className="font-medium">GitHub</p>
                  <a
                    href="https://github.com/AfrizalSY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    github.com/AfrizalSY
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Linkedin className="text-blue-600 mt-1" size={18} />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/afrizalsy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    linkedin.com/in/afrizalsy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 mt-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Informatics graduate with a strong background in information technology and good analytical skills. I have
              experience managing data, compiling reports, and using various software, including Microsoft Office
              (Excel, Word, and PowerPoint), to support decision-making. I also have practical communication skills,
              both individually and in a team, which allows me to coordinate with various departments to achieve common
              goals.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              With a detail-oriented work approach and proven problem-solving skills, I am accustomed to working under
              pressure to meet set targets and deadlines. 
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Telkom University</h3>
                <p className="text-gray-600 dark:text-gray-400">Bachelor's Degree in Informatics</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-orange-500 font-medium">Aug 2019 - Sep 2023</p>
                <p className="text-gray-600 dark:text-gray-400">GPA: 3.67/4.00</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Activities & Memberships:</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Member of Proclub Telkom University</li>
                <li>Member of Artificial Intelligence Laboratory Telkom University</li>
                <li>Member of Student's Activities for Research and Competition Handling Telkom University</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
          </div>

          {/* Experience 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Elbond Education Organizer</h3>
                <p className="text-gray-600 dark:text-gray-400">Videographer & Photographer – Freelance</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-orange-500 font-medium">Jul 2024 - Feb 2025 (Present)</p>
                <p className="text-gray-600 dark:text-gray-400">Batu, Indonesia</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Outing PT Elite Air Industrial</li>
                <li>Outing PT Husky-CNOOC Madura Limited</li>
                <li>Outing PT Jambuluwuk</li>
                <li>Employee Gathering PT Gadai Mas Jatim</li>
              </ul>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Aesthetic Studio Event Documentation</h3>
                <p className="text-gray-600 dark:text-gray-400">Videographer & Photographer – Freelance</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-orange-500 font-medium">May 2024 - Feb 2025 (Present)</p>
                <p className="text-gray-600 dark:text-gray-400">Malang, Indonesia</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Photography and Videography Exercise Malang Creative Center</li>
                <li>KPU Mascot Parade of Lowokwaru District, Malang</li>
                <li>Inauguration and Opening of the East Java Gadai Mas Office Building</li>
                <li>Ground Breaking of 2024 Plants of Perum Perhutani, East Java Regional Division</li>
              </ul>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">PT. Nutrifood Indonesia – Telkom University</h3>
                <p className="text-gray-600 dark:text-gray-400">Research Assistant – Intern</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-orange-500 font-medium">Jul 2022 - Sep 2022</p>
                <p className="text-gray-600 dark:text-gray-400">Bandung, Indonesia</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Develop of a classification model Gated Recurrent Unit (GRU)</li>
                <li>Processing 20.000+ fake news data</li>
                <li>Create Enterpirse Social Media Monitoring System (ESM-MS) software development</li>
                <li>Create administration, finance and report preparation</li>
                <li>Create Term of Reference (TOR) for company-organized training</li>
              </ul>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Balitbang SDM Kementerian Kominfo</h3>
                <p className="text-gray-600 dark:text-gray-400">Independent Study. Network Programmability (MSIB)</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-orange-500 font-medium">Feb 2022 - Jul 2022</p>
                <p className="text-gray-600 dark:text-gray-400">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  Achieved CCNA certification covering topics such as network fundamentals, security, and automation:
                  Introduction to Networks, Switching, Routing, and Wireless Essentials, Enterprise Networking,
                  Security, and Automation, DevNet Associate, NDG Linux Unhatched, and Programming Essentials in Python.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Award className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Test of English as a Foreign Language (TOEFL)</p>
                  <p className="text-gray-600 dark:text-gray-400">By English Vit (Score 577), 2024</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Microsoft Azure Data Fundamentals</p>
                  <p className="text-gray-600 dark:text-gray-400">by Microsoft And Mereka, 2023</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Microsoft Power BI Data Analyst</p>
                  <p className="text-gray-600 dark:text-gray-400">by Microsoft And Mereka, 2023</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="text-yellow-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium">Cisco Certified Network Associate</p>
                  <p className="text-gray-600 dark:text-gray-400">2022</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Code className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Hard Skills</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">Videography & Photography</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Editing</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Programming (Python)</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Soft Skills</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Leadership</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Communicative</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Teamwork</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Collaboration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Problem Solving</span>
                </li>
              </ul>
            </div>

            {/* Software */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Laptop className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Software</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>Premiere</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>After Effect</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>Filmora</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>Capcut</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>Microsoft</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>VS Code</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>R Studio</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center">
                  <p>Power BI</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-center space-x-3 mb-6">
                <Camera className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold">Tools</h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>DSLR & Mirrorless</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Drone (DJI)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Stabilizer (DJI)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Lightning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Laptop</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-orange-500">•</span>
                  <span>Desktop</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some of my recent work and personal projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">COVID-19 Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interactive dashboard for visualizing COVID-19 data with various filters and charts.
                </p>
                <div className="flex space-x-2 text-sm">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Python</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Data Viz</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/AfrizalSY/covid-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smart Contract App</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Simple application for blockchain smart contracts with web interface.
                </p>
                <div className="flex space-x-2 text-sm">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Blockchain</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/AfrizalSY/simple-smart-contract-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fuzzy Logic Implementation</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Implementation of fuzzy logic algorithms for decision-making systems.
                </p>
                <div className="flex space-x-2 text-sm">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">Python</span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">AI</span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/AfrizalSY/Fuzzy_Logic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:underline"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Afrizal Syahruluddin Yusuf. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/AfrizalSY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-orange-500"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/afrizalsy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-orange-500"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
