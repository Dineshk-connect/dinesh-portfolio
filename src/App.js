import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { SiMongodb, SiReact, SiNodedotjs, SiExpress, SiPostgresql, SiFirebase, SiTailwindcss, SiDocker, SiPostman, SiPrisma, SiVercel } from "react-icons/si";
import DineshPhoto from "./assets/dinesh.jpg";
import { Typewriter } from "react-simple-typewriter";

/* ─── DESIGN TOKENS ─────────────────────────────────────── */
const ACCENT = "#00C896";
const ACCENT_DIM = "#00C89622";
const INK = "#0C0C0E";
const SURFACE = "#141417";
const CARD = "#1A1A1E";
const BORDER = "#2A2A2F";
const TEXT_PRIMARY = "#F0EEE8";
const TEXT_MUTED = "#7A7A85";
const TEXT_DIM = "#4A4A55";

/* ─── DATA ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    name: "Agentic Umbrella Platform",
    label: "Full-Stack · B2B",
    description:
      "B2B contractor payroll system with UK compliance, automated payslip generation, and secure payment reconciliation.",
    tech: ["Node.js", "Prisma", "PostgreSQL", "React", "Railway", "Vercel"],
    github: "https://github.com/Dineshk-connect",
    featured: true,
  },
  {
    id: 2,
    name: "DevComrades",
    label: "Real-Time · MERN",
    description:
      "Developer networking platform with real-time 1-on-1 chat, connection system, and low-latency messaging via Socket.io.",
    tech: ["React", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/Dineshk-connect/DevComrades.git",
    featured: true,
  },
  {
    id: 3,
    name: "NeuralGuide AI",
    label: "AI · LLM",
    description:
      "AI-powered developer assistant with code analysis, chat-based guidance, persistent memory, and Gemini API integration.",
    tech: ["React", "Node.js", "MongoDB", "Firebase", "Gemini API"],
    github: "https://github.com/Dineshk-connect/NeuralGuideAI.git",
    featured: true,
  },
  {
    id: 4,
    name: "CineHub-GPT",
    label: "AI · Media",
    description:
      "Netflix-style movie discovery platform with AI-driven recommendations and dynamic TMDB API integration.",
    tech: ["React", "Firebase", "Gemini API", "TMDB"],
    github: "https://github.com/Dineshk-connect/cinehub-gpt.git",
    featured: false,
  },
];

const EXPERIENCE = [
  {
    company: "Mobilean Technologies",
    role: "Full Stack Web Development Intern",
    type: "Remote",
    period: "Feb 2026 – Present",
    bullets: [
      "Developing scalable full-stack applications using React, Node.js, MongoDB with responsive UI and modular architecture.",
      "Integrating REST APIs, optimizing backend performance, and implementing clean code practices for maintainable systems.",
      "Exposure to IoT solutions and Generative AI concepts within Oracle Cloud infrastructure.",
    ],
    current: true,
  },
  {
    company: "VTECH Integrated Solutions",
    role: "Front-End Developer Intern",
    type: "Bengaluru",
    period: "March 2024",
    bullets: [
      "Built reusable React.js components with responsive design to enhance UI/UX performance.",
      "Collaborated with teams to optimize frontend performance and improve usability standards.",
    ],
    current: false,
  },
];

const SKILLS = {
  Frontend: { items: ["React.js", "Redux", "Tailwind CSS", "HTML5", "CSS3"] },
  Backend: { items: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC"] },
  Database: { items: ["MongoDB", "PostgreSQL", "Prisma", "Firebase"] },
  "AI & LLM": { items: ["Gemini API", "LLM Workflows", "NLP", "Prompt Engineering"] },
  DevOps: { items: ["Docker", "Vercel", "Railway", "Git", "Postman"] },
};

const CERTIFICATIONS = [
  { name: "Cloud Computing", org: "NPTEL — IIT Kharagpur", year: "2025" },
  { name: "Natural Language Processing", org: "PEC", year: "2026 (Ongoing)" },
  { name: "Research Methodologies & IPR", org: "VTU", year: "2025" },
];

/* ─── ANIMATION VARIANTS ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── REUSABLE COMPONENTS ────────────────────────────────── */
function SectionLabel({ children }) {
  return (
    <p style={{ fontSize: 11, letterSpacing: "0.18em", color: ACCENT, fontFamily: "'DM Sans', sans-serif", textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>
      {children}
    </p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontFamily: "'Syne', sans-serif", fontWeight: 700, color: TEXT_PRIMARY, marginBottom: 40, lineHeight: 1.1 }}>
      {children}
    </h2>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      fontSize: 11, padding: "3px 10px", borderRadius: 20,
      background: ACCENT_DIM, color: ACCENT,
      fontFamily: "'DM Sans', sans-serif", fontWeight: 500, whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

function AnimatedSection({ children, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} style={style}>
      {children}
    </motion.div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = ["About", "Projects", "Experience", "Contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(16px, 5vw, 80px)",
        height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? `${INK}EC` : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `0.5px solid ${BORDER}` : "none",
        transition: "all 0.3s ease",
      }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: TEXT_PRIMARY, letterSpacing: "-0.02em" }}>
          DK<span style={{ color: ACCENT }}>.</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 28 }} className="nav-desktop">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: 13, color: TEXT_MUTED, textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s",
            }}
              onMouseEnter={e => e.target.style.color = TEXT_PRIMARY}
              onMouseLeave={e => e.target.style.color = TEXT_MUTED}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="nav-hamburger"
          style={{
            display: "none", flexDirection: "column", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 1.5, background: TEXT_PRIMARY,
              borderRadius: 2, transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                : "scaleX(0)"
                : "none",
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 56, left: 0, right: 0,
          background: `${INK}F5`, backdropFilter: "blur(20px)",
          borderBottom: `0.5px solid ${BORDER}`,
          padding: "8px clamp(16px, 5vw, 80px) 16px",
          zIndex: 99, display: "flex", flexDirection: "column",
        }} className="nav-mobile">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 16, color: TEXT_MUTED, padding: "14px 0",
                borderBottom: `0.5px solid ${BORDER}`,
                fontFamily: "'DM Sans', sans-serif", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = TEXT_PRIMARY}
              onMouseLeave={e => e.target.style.color = TEXT_MUTED}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

/* ─── HERO ───────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      paddingTop: "clamp(80px, 12vh, 120px)",
      paddingBottom: "clamp(50px, 8vh, 80px)",
      paddingLeft: "clamp(16px, 8vw, 120px)",
      paddingRight: "clamp(16px, 8vw, 120px)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(${BORDER}44 1px, transparent 1px), linear-gradient(90deg, ${BORDER}44 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 80%)",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: -100, left: "50%", transform: "translateX(-50%)",
        width: 600, height: 400, borderRadius: "50%",
        background: `radial-gradient(ellipse, ${ACCENT}18 0%, transparent 70%)`,
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 880 }}>
        {/* Avatar + meta */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
          style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
          <div style={{
            width: 58, height: 58, borderRadius: "50%",
            border: `2px solid ${ACCENT}`, overflow: "hidden", flexShrink: 0,
          }}>
            <img src={DineshPhoto} alt="Dinesh K" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div>
            <p style={{ fontSize: 13, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", marginBottom: 4 }}>
              Dinesh K — Bengaluru, India
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <Tag>MCA · GPA 9.0</Tag>
              <Tag>Open to Opportunities</Tag>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(36px, 7vw, 88px)", color: TEXT_PRIMARY,
            lineHeight: 1.0, letterSpacing: "-0.03em", marginBottom: 18,
          }}>
          Full-Stack<br />
          <span style={{ color: ACCENT }}>Engineer</span> &<br />
          AI Builder
        </motion.h1>

        {/* Typewriter */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
          style={{ fontSize: "clamp(14px, 2vw, 19px)", color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", marginBottom: 32, minHeight: 28 }}>
          <Typewriter
            words={["MERN Stack Developer", "LLM Integration Specialist", "Real-Time Systems Builder", "Scalable Architecture Engineer"]}
            loop={0} cursor cursorStyle="|" typeSpeed={55} deleteSpeed={35} delaySpeed={2000}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
          style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
          <a href="#projects" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: ACCENT, color: INK, fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600, fontSize: 14, padding: "11px 26px", borderRadius: 40,
            textDecoration: "none", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          >
            View Projects
          </a>
          <a href="/DINESH K RESUME 2026.pdf" download style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            border: `1px solid ${BORDER}`, color: TEXT_PRIMARY,
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
            padding: "11px 26px", borderRadius: 40, textDecoration: "none",
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = ACCENT}
            onMouseLeave={e => e.currentTarget.style.borderColor = BORDER}
          >
            <FaDownload style={{ fontSize: 12 }} /> Download Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
          style={{ display: "flex", gap: 20 }}>
          {[
            { icon: <FaGithub />, href: "https://github.com/Dineshk-connect", label: "GitHub" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/connectdinesh", label: "LinkedIn" },
            { icon: <FaEnvelope />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=dinesh.k.connect@gmail.com", label: "Email" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              title={s.label}
              style={{ color: TEXT_DIM, fontSize: 20, transition: "color 0.2s", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = ACCENT}
              onMouseLeave={e => e.currentTarget.style.color = TEXT_DIM}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────── */
function About() {
  const stats = [
    { label: "GPA", value: "9.0" },
    { label: "Projects", value: "6+" },
    { label: "Internships", value: "2" },
    { label: "Certifications", value: "3" },
  ];
  return (
    <section id="about" style={{ padding: "70px clamp(16px, 8vw, 120px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>Building at the intersection<br />of scale and intelligence.</SectionTitle>
        </AnimatedSection>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 40, alignItems: "start",
        }}>
          <AnimatedSection>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", marginBottom: 16 }}>
              MCA student at The Oxford College of Engineering (VTU), graduating May 2026 with a 9.0 GPA.
              I specialize in building production-grade full-stack systems using the MERN stack with a strong focus on
              AI integration, real-time systems, and scalable backend architecture.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif" }}>
              Currently interning at Mobilean Technologies working on IoT-integrated web applications and
              Generative AI workflows. I've published academic research on the DevComrades platform architecture
              as part of my MCA coursework.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {stats.map(s => (
                <div key={s.label} style={{
                  background: CARD, border: `0.5px solid ${BORDER}`,
                  borderRadius: 16, padding: "20px 18px",
                }}>
                  <p style={{ fontSize: 34, fontFamily: "'Syne', sans-serif", fontWeight: 800, color: TEXT_PRIMARY, margin: 0, lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", marginTop: 6, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─────────────────────────────────────────────── */
function Skills() {
  return (
    <section style={{ padding: "70px clamp(16px, 8vw, 120px)", background: SURFACE }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection>
          <SectionLabel>Stack</SectionLabel>
          <SectionTitle>Technical expertise</SectionTitle>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
          {Object.entries(SKILLS).map(([category, { items }], i) => (
            <motion.div key={category} variants={fadeUp} custom={i * 0.5}
              whileHover={{ y: -4, borderColor: ACCENT }}
              style={{
                background: CARD, border: `0.5px solid ${BORDER}`,
                borderRadius: 16, padding: "20px 18px",
                transition: "border-color 0.2s",
              }}>
              <p style={{ fontSize: 11, color: ACCENT, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
                {category}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {items.map(item => (
                  <span key={item} style={{ fontSize: 13, color: TEXT_PRIMARY, fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ───────────────────────────────────────────── */
function Projects() {
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: "70px clamp(16px, 8vw, 120px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection>
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>Selected work</SectionTitle>
        </AnimatedSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18, marginBottom: 18 }}>
          {featured.map((p, i) => (
            <motion.div key={p.id} variants={fadeUp} custom={i}
              whileHover={{ y: -6 }}
              style={{
                background: CARD, border: `0.5px solid ${BORDER}`,
                borderRadius: 20, padding: "24px 20px",
                display: "flex", flexDirection: "column", gap: 14,
                position: "relative", overflow: "hidden",
              }}>
              <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 2, background: ACCENT, borderRadius: "0 0 2px 2px" }} />
              <div>
                <span style={{ fontSize: 11, color: TEXT_DIM, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.label}</span>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: TEXT_PRIMARY, marginTop: 5, lineHeight: 1.2 }}>{p.name}</h3>
              </div>
              <p style={{ fontSize: 13, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, flex: 1 }}>{p.description}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = ACCENT}
                onMouseLeave={e => e.currentTarget.style.color = TEXT_MUTED}
              >
                <FaGithub /> View on GitHub <FaExternalLinkAlt style={{ fontSize: 10 }} />
              </a>
            </motion.div>
          ))}
        </div>

        {rest.map(p => (
          <motion.div key={p.id} variants={fadeUp}
            whileHover={{ borderColor: ACCENT }}
            style={{
              background: CARD, border: `0.5px solid ${BORDER}`,
              borderRadius: 14, padding: "18px 20px", marginBottom: 12,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 14, flexWrap: "wrap",
              transition: "border-color 0.2s",
            }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <span style={{ fontSize: 11, color: TEXT_DIM, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.label}</span>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: TEXT_PRIMARY, margin: "4px 0 6px" }}>{p.name}</h3>
              <p style={{ fontSize: 13, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6, margin: 0 }}>{p.description}</p>
            </div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
              {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
            <a href={p.github} target="_blank" rel="noreferrer"
              style={{ color: TEXT_DIM, fontSize: 18, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = ACCENT}
              onMouseLeave={e => e.currentTarget.style.color = TEXT_DIM}
            >
              <FaGithub />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── EXPERIENCE ─────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" style={{ padding: "70px clamp(16px, 8vw, 120px)", background: SURFACE }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection>
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>Where I've worked</SectionTitle>
        </AnimatedSection>

        <div>
          {EXPERIENCE.map((exp, i) => (
            <AnimatedSection key={i}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "clamp(100px, 18%, 160px) 1fr",
                gap: "24px clamp(16px, 3vw, 32px)",
                borderTop: `0.5px solid ${BORDER}`,
                padding: "28px 0",
                alignItems: "start",
              }}>
                <div>
                  <p style={{ fontSize: 12, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>{exp.period}</p>
                  <span style={{
                    fontSize: 10, color: exp.current ? ACCENT : TEXT_DIM,
                    fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em",
                    textTransform: "uppercase", display: "block", marginTop: 6,
                  }}>
                    {exp.current ? "● Current" : "Completed"}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: TEXT_PRIMARY, margin: "0 0 3px" }}>{exp.role}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: ACCENT, marginBottom: 14 }}>
                    {exp.company} · {exp.type}
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 7 }}>
                    {exp.bullets.map((b, j) => (
                      <li key={j} style={{
                        fontSize: 13, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif",
                        lineHeight: 1.7, paddingLeft: 14, position: "relative",
                      }}>
                        <span style={{ position: "absolute", left: 0, color: ACCENT }}>›</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Education */}
          <AnimatedSection>
            <div style={{
              display: "grid",
              gridTemplateColumns: "clamp(100px, 18%, 160px) 1fr",
              gap: "24px clamp(16px, 3vw, 32px)",
              borderTop: `0.5px solid ${BORDER}`,
              padding: "28px 0",
              alignItems: "start",
            }}>
              <div>
                <p style={{ fontSize: 12, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif" }}>Expected May 2026</p>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: TEXT_PRIMARY, margin: "0 0 3px" }}>Master of Computer Applications</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: ACCENT, marginBottom: 10 }}>
                  The Oxford College of Engineering (VTU) · Bengaluru
                </p>
                <Tag>GPA: 9.0 / 10</Tag>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── RESEARCH + CERTS ───────────────────────────────────── */
function ResearchAndCerts() {
  return (
    <section style={{ padding: "70px clamp(16px, 8vw, 120px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40 }}>
          <AnimatedSection>
            <SectionLabel>Research</SectionLabel>
            <div style={{ background: CARD, border: `0.5px solid ${BORDER}`, borderRadius: 20, padding: "24px 20px" }}>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: TEXT_PRIMARY, marginBottom: 6 }}>
                DevComrades: A Social Networking Platform for Developers
              </h3>
              <p style={{ fontSize: 12, color: ACCENT, fontFamily: "'DM Sans', sans-serif", marginBottom: 10 }}>2026 · Academic Research Paper</p>
              <p style={{ fontSize: 13, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
                Authored research documenting system architecture, real-time communication design, and full implementation
                details of the DevComrades platform as part of MCA coursework. (Unpublished)
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionLabel>Certifications</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} style={{
                  background: CARD, border: `0.5px solid ${BORDER}`,
                  borderRadius: 12, padding: "14px 18px",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12,
                }}>
                  <div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 13, color: TEXT_PRIMARY, margin: 0 }}>{c.name}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: TEXT_MUTED, margin: "3px 0 0" }}>{c.org}</p>
                  </div>
                  <span style={{ fontSize: 11, color: TEXT_DIM, fontFamily: "'DM Sans', sans-serif", whiteSpace: "nowrap" }}>{c.year}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{ padding: "70px clamp(16px, 8vw, 120px)", background: SURFACE }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{
            border: `0.5px solid ${BORDER}`, borderRadius: 24,
            padding: "50px clamp(20px, 5vw, 80px)",
            display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 20,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", bottom: -60, right: -60,
              width: 280, height: 280, borderRadius: "50%",
              background: `radial-gradient(ellipse, ${ACCENT}12 0%, transparent 70%)`,
            }} />

            <SectionLabel>Contact</SectionLabel>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(26px, 5vw, 52px)", color: TEXT_PRIMARY,
              lineHeight: 1.1, margin: 0,
            }}>
              Let's build something<br />
              <span style={{ color: ACCENT }}>exceptional</span> together.
            </h2>
            <p style={{ fontSize: 15, color: TEXT_MUTED, fontFamily: "'DM Sans', sans-serif", maxWidth: 480, lineHeight: 1.7, margin: 0 }}>
              Open to full-time SWE roles, AI-focused product teams, and impactful collaborations.
              Currently available for opportunities starting mid-2026.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dinesh.k.connect@gmail.com"
                target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: ACCENT, color: INK, fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600, fontSize: 14, padding: "11px 26px", borderRadius: 40,
                  textDecoration: "none",
                }}>
                <FaEnvelope style={{ fontSize: 13 }} /> Email Me
              </a>
              <a href="https://linkedin.com/in/connectdinesh" target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  border: `1px solid ${BORDER}`, color: TEXT_PRIMARY,
                  fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 14,
                  padding: "11px 26px", borderRadius: 40, textDecoration: "none",
                }}>
                <FaLinkedin style={{ fontSize: 13 }} /> LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      borderTop: `0.5px solid ${BORDER}`,
      padding: "20px clamp(16px, 8vw, 120px)",
      display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10,
    }}>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: TEXT_DIM }}>
        © {new Date().getFullYear()} Dinesh K
      </span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: TEXT_DIM }}>
        dinesh.k.connect@gmail.com · 9742466980
      </span>
    </footer>
  );
}

/* ─── APP ────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${INK}; color: ${TEXT_PRIMARY}; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: ${INK}; }
        ::-webkit-scrollbar-thumb { background: ${BORDER}; border-radius: 4px; }
        a { color: inherit; }

        /* Desktop nav visible, hamburger hidden */
        .nav-desktop { display: flex !important; }
        .nav-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>

      <div style={{ background: INK, minHeight: "100vh" }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ResearchAndCerts />
        <Contact />
        <Footer />
      </div>
    </>
  );
}