import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DineshPhoto from "./assets/dinesh.jpg";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white">

      {/* NAVBAR */}
      <nav className="fixed w-full bg-slate-900/70 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl text-primary">Dinesh K</h1>
          <div className="space-x-6 hidden md:flex text-sm">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#projects" className="hover:text-primary">Projects</a>
            <a href="#experience" className="hover:text-primary">Experience</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
     <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-24 px-6 overflow-hidden">

  {/* Glow background */}
  <div className="absolute w-[400px] h-[400px] bg-primary opacity-20 blur-3xl rounded-full -z-10"></div>

  <motion.img
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    src={DineshPhoto}
    alt="Dinesh"
    className="w-40 h-40 rounded-full border-4 border-primary shadow-2xl mb-6"
  />

  <h1 className="text-4xl md:text-6xl font-bold mb-4">
    <span className="text-primary">Dinesh K</span>
  </h1>
<span className="text-sm bg-primary/20 text-primary px-4 py-1 rounded-full">
  MCA | GPA 9.0 | AI-Focused Engineer
</span>

  <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
    <Typewriter
      words={[
  "MERN Stack Engineer",
  "AI Integration Specialist",
  "Real-Time Systems Builder",
  "LLM-Powered Application Developer"
]
}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={40}
      delaySpeed={1500}
    />
  </h2>

  <p className="text-slate-300 max-w-2xl text-lg">
    Building scalable platforms, AI-powered applications, and real-time systems
    using modern JavaScript architecture.
  </p>

  <div className="flex gap-6 mt-8 text-xl">
    <a href="https://github.com/Dineshk-connect" target="_blank" rel="noreferrer">
      <FaGithub className="hover:text-primary transition" />
    </a>
    <a href="https://linkedin.com/in/connectdinesh" target="_blank" rel="noreferrer">
      <FaLinkedin className="hover:text-primary transition" />
    </a>
    <a href="/resume.pdf" download>
      <FaEnvelope className="hover:text-primary transition" />
    </a>
  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-slate-300 leading-relaxed">
          MCA student at The Oxford College of Engineering (GPA 9.0) focused on 
          building scalable full-stack systems and AI-integrated platforms. 
          Experienced in REST APIs, JWT authentication, Firebase Auth, 
          real-time communication with Socket.io, and LLM-based API integration.
        </p>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16">
  <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-slate-700 rounded-2xl p-10 backdrop-blur-lg">

    <h2 className="text-3xl font-bold mb-6 text-primary text-center">
      AI & Engineering Focus
    </h2>

    <div className="grid md:grid-cols-3 gap-8 text-center">

      <div>
        <h3 className="text-xl font-semibold mb-2">LLM Integration</h3>
        <p className="text-slate-400 text-sm">
          Built AI-driven platforms using Gemini API with persistent chat memory,
          structured prompt workflows, and dynamic recommendation systems.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Real-Time Systems</h3>
        <p className="text-slate-400 text-sm">
          Designed low-latency communication platforms using Socket.io
          with secure JWT authentication and optimized REST APIs.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Scalable Architecture</h3>
        <p className="text-slate-400 text-sm">
          Developed modular full-stack systems using React, Node.js,
          MongoDB, Firebase Auth, and production-ready backend patterns.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-12 text-primary text-center">
    Technical Stack
  </h2>

  <div className="bg-slate-800/40 backdrop-blur-lg p-6 rounded-2xl border border-slate-700 transition hover:border-primary hover:-translate-y-1"
>

    <SkillBlock title="Frontend" skills={["React", "Redux", "Tailwind", "HTML5", "CSS3"]} />
    <SkillBlock title="Backend" skills={["Node.js", "Express.js", "REST APIs", "JWT"]} />
    <SkillBlock title="Database" skills={["MongoDB", "Firebase", "SQL"]} />
    <SkillBlock title="AI & Tools" skills={["Gemini API", "LLM Workflows", "Git", "Postman"]} />

  </div>
</section>


      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12 text-primary">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <ProjectCard
            title="NeuralGuide AI"
            description="AI-powered developer assistant with persistent memory, secure authentication, and Gemini API integration."
            tech="React • Node • MongoDB • Firebase • Gemini API"
          />

          <ProjectCard
            title="DevComrades"
            description="Real-time developer networking platform with 1–1 chat, secure auth, and low-latency Socket.io communication."
            tech="React • Express • MongoDB • Socket.io"
          />

          <ProjectCard
            title="CineHub-GPT"
            description="Netflix-style movie platform with AI-driven recommendations and dynamic TMDB API integration."
            tech="React • Firebase • Gemini API • TMDB"
          />

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold mb-10 text-primary text-center">
    Experience
  </h2>

  <div className="relative border-l border-slate-700 pl-8 space-y-10">

    <div>
      <span className="absolute -left-3 w-6 h-6 bg-primary rounded-full"></span>
      <h3 className="text-xl font-semibold">
        Front-End Developer Intern — VTECH Integrated Solutions
      </h3>
      <p className="text-slate-400 text-sm mt-2">
        Developed responsive UI components using React.js and modern CSS frameworks.
        Optimized performance and improved layout consistency across multiple devices.
      </p>
      <span className="text-xs text-slate-500">March 2024</span>
    </div>

  </div>
</section>

<section className="py-16 px-6">
  <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-slate-700 rounded-2xl p-12 backdrop-blur-lg">

    <h2 className="text-3xl font-bold mb-4">
      Let’s Build Something Scalable
    </h2>

    <p className="text-slate-400 mb-8">
      Open to full-time software engineering roles and AI-focused product teams.
    </p>

    <a
      href="/resume.pdf"
      download
      className="bg-primary hover:bg-accent px-8 py-3 rounded-full transition font-semibold"
    >
      Download Resume
    </a>

  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold text-primary mb-6">Let’s Connect</h2>
        <p className="text-slate-400 mb-6">
          Open to full-time opportunities, collaborations, and AI-driven projects.
        </p>

        <a
          href="mailto:dinesh.k.connect@gmail.com"
          className="bg-primary hover:bg-accent px-6 py-3 rounded-full transition font-semibold"
        >
          Contact Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-slate-400 text-sm border-t border-slate-800">
        © {new Date().getFullYear()} Dinesh K — Built with React & Tailwind
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tech }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative bg-slate-800/40 backdrop-blur-lg p-6 rounded-2xl border border-slate-700 overflow-hidden"
    >
      {/* Gradient border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

      <h3 className="text-xl font-semibold mb-3 relative z-10">{title}</h3>

      <p className="text-slate-400 mb-4 relative z-10">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {tech.split(" • ").map((item, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 relative z-10">
        <button className="text-sm bg-primary px-4 py-2 rounded-full hover:bg-accent transition">
          GitHub
        </button>
        <button className="text-sm border border-slate-600 px-4 py-2 rounded-full hover:border-primary transition">
          Live Demo
        </button>
      </div>
    </motion.div>
  );
}

function SkillBlock({ title, skills }) {
  return (
    <div className="bg-slate-800/40 backdrop-blur-lg p-6 rounded-2xl border border-slate-700">
      <h3 className="font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-slate-700 text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

