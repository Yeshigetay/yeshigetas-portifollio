import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaPython, FaPalette, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Home.css';

const skillsData = [
  { name: 'React', icon: <FaReact />, color: '#00d4ff', level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#4ecdc4', level: 80 },
  { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e', level: 85 },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26', level: 95 },
  { name: 'Python', icon: <FaPython />, color: '#3776ab', level: 75 },
  { name: 'UI/UX', icon: <FaPalette />, color: '#ff6b6b', level: 85 },
];

const statsData = [
  { label: 'Projects', value: '2+', color: '#00d4ff' },
  { label: 'Clients', value: '3', color: '#ff6b6b' },
  { label: 'Years', value: '2', color: '#4ecdc4' },
  { label: 'Awards', value: '0+', color: '#feca57' },
];

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub', color: '#333' },
  { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram', color: '#e4405f' },
];

const Home = () => {
  const { t } = useTranslation();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skillsData.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: 'spring' } },
  };
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: (i) => ({
      opacity: 1, scale: 1, y: 0,
      transition: { delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 },
    }),
  };
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: (i) => ({
      opacity: 1, scale: 1,
      transition: { delay: 0.3 + i * 0.08, type: 'spring', stiffness: 200 },
    }),
  };

  return (
    <div className="home-advanced-container">
      {/* Animated Gradient Background */}
      <div className="home-gradient-bg" />
      {/* Animated Floating Neon Shapes */}
      <div className="home-floating-shapes">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`floating-shape shape-${i % 4}`}
            animate={{
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: i * 0.5,
              ease: 'linear',
            }}
          />
        ))}
      </div>
      {/* Animated Particle Layer */}
      <div className="home-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="home-particle"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Mouse Follower Glow */}
      <motion.div
        className="home-mouse-follower"
        animate={{
          x: mouse.x - 60,
          y: mouse.y - 60,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
      {/* Hero Section */}
      <motion.section
        className="home-hero-advanced"
        ref={heroRef}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="home-hero-profile" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
          <div className="home-hero-img-glow">
            <img src="/images/Pro.jpg" alt="Yeshigeta Ambachew" className="home-hero-img" />
            <motion.div
              className="home-hero-img-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <div className="home-hero-social-orbs">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-orb"
                style={{ '--orb-color': social.color }}
                whileHover={{ scale: 1.2, boxShadow: `0 0 30px ${social.color}` }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {social.icon}
                <span className="home-social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.div className="home-hero-text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: 'spring' }}>
          <h1 className="home-hero-title">
            <span className="home-hero-greeting">{t('home.greeting')}</span>
            <span className="home-hero-name-gradient">{t('home.name')}</span>
          </h1>
          <motion.div className="home-hero-dynamic-title" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
            {t('home.title')}
          </motion.div>
          <p className="home-hero-desc">{t('home.description')}</p>
          <div className="home-hero-cta-btns">
            <motion.a
              href="/contact"
              className="home-hero-cta primary"
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px #00d4ff' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowRight /> {t('home.cta')}
            </motion.a>
            <motion.a
              href="/work"
              className="home-hero-cta secondary"
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px #fff' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('home.viewWork')}
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
      {/* Stats Section */}
      <motion.section className="home-advanced-stats" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="home-advanced-stats-grid">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="home-advanced-stat-card"
              custom={i}
              variants={statVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.08, boxShadow: `0 0 30px ${stat.color}` }}
            >
              <div className="home-advanced-stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="home-advanced-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* Skills Carousel/Ring */}
      <motion.section className="home-advanced-skills" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="home-advanced-section-title">{t('home.skills.title')}</h2>
        <div className="home-advanced-skills-carousel">
          <AnimatePresence initial={false}>
            {skillsData.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={`home-advanced-skill-card${activeSkill === i ? ' active' : ''}`}
                custom={i}
                variants={skillVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.12, boxShadow: `0 0 30px ${skill.color}` }}
                style={{ borderColor: skill.color, zIndex: activeSkill === i ? 2 : 1 }}
              >
                <div className="home-advanced-skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                <div className="home-advanced-skill-info">
                  <h3>{skill.name}</h3>
                  <div className="home-advanced-skill-bar">
                    <motion.div
                      className="home-advanced-skill-progress"
                      initial={{ width: 0 }}
                      animate={{ width: activeSkill === i ? `${skill.level}%` : 0 }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      style={{ background: skill.color }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 