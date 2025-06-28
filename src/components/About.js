import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaGraduationCap, FaBriefcase, FaHeart, FaAward, FaUsers, FaLightbulb, FaGlobe, FaStar, FaTrophy, FaMedal, FaArrowRight, FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React', level: 90, color: '#00d4ff', icon: '⚛️', description: t('about.skills.react') },
    { name: 'JavaScript', level: 85, color: '#f7df1e', icon: '⚡', description: t('about.skills.javascript') },
    { name: 'HTML/CSS', level: 95, color: '#e34f26', icon: '🎨', description: t('about.skills.htmlcss') },
    { name: 'Node.js', level: 80, color: '#339933', icon: '🟢', description: t('about.skills.nodejs') },
    { name: 'Python', level: 75, color: '#3776ab', icon: '🐍', description: t('about.skills.python') },
    { name: 'UI/UX Design', level: 85, color: '#ff6b6b', icon: '✨', description: t('about.skills.uiux') }
  ];

  const experiences = [
    {
      title: t('about.experience.freelance.title'),
      company: t('about.experience.freelance.company'),
      period: t('about.experience.freelance.period'),
      description: t('about.experience.freelance.description'),
      achievements: t('about.experience.freelance.achievements', { returnObjects: true }),
      icon: FaStar,
      color: '#00d4ff'
    },
    {
      title: t('about.experience.digital.title'),
      company: t('about.experience.digital.company'),
      period: t('about.experience.digital.period'),
      description: t('about.experience.digital.description'),
      achievements: t('about.experience.digital.achievements', { returnObjects: true }),
      icon: FaTrophy,
      color: '#ff6b6b'
    },
    {
      title: t('about.experience.startup.title'),
      company: t('about.experience.startup.company'),
      period: t('about.experience.startup.period'),
      description: t('about.experience.startup.description'),
      achievements: t('about.experience.startup.achievements', { returnObjects: true }),
      icon: FaMedal,
      color: '#4ecdc4'
    }
  ];

  const education = [
    {
      degree: t('about.education.degree'),
      school: t('about.education.school'),
      period: t('about.education.period'),
      description: t('about.education.description'),
      gpa: '3.3/4.0',
      icon: FaGraduationCap,
      color: '#feca57'
    },
    {
      degree: t('about.education.degree'),
      school: t('about.education.school'),
      period: t('about.education.period'),
      description: t('about.education.foundation'),
      gpa: '3.3/4.0',
      icon: FaAward,
      color: '#9c88ff'
    }
  ];

  const personalInfo = [
    { label: t('about.personal.name'), value: t('home.name'), icon: FaHeart, color: '#ff6b6b' },
    { label: t('about.personal.age'), value: '22 years', icon: FaAward, color: '#feca57' },
    { label: t('about.personal.location'), value: 'Addis Ababa, Ethiopia', icon: FaGlobe, color: '#4ecdc4' },
    { label: t('about.personal.experience'), value: '2 years', icon: FaBriefcase, color: '#667eea' },
    { label: t('about.personal.freelance'), value: 'Available', icon: FaUsers, color: '#a55eea' },
    { label: t('about.personal.languages'), value: 'English, Amharic', icon: FaLightbulb, color: '#ff9ff3' }
  ];

  const stats = [
    { number: '2+', label: t('home.stats.projects'), icon: FaCode, color: '#00d4ff' },
    { number: '3', label: t('home.stats.clients'), icon: FaPalette, color: '#ff6b6b' },
    { number: '2', label: t('home.stats.experience'), icon: FaRocket, color: '#4ecdc4' },
    { number: '0+', label: t('home.stats.awards'), icon: FaAward, color: '#feca57' }
  ];

  const tabs = [
    { id: 'skills', name: t('about.tabs.skills'), icon: FaCode },
    { id: 'experience', name: t('about.tabs.experience'), icon: FaBriefcase },
    { id: 'education', name: t('about.tabs.education'), icon: FaGraduationCap },
    { id: 'personal', name: t('about.tabs.personal'), icon: FaHeart }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateX: -90, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      y: -20,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const renderSkills = () => (
    <motion.div 
      className="skills-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="skill-card"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: index * 0.1 }}
        >
          <div className="skill-header">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </div>
          <div className="skill-description">{skill.description}</div>
          <div className="skill-bar">
            <motion.div
              className="skill-progress"
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 2, delay: index * 0.2, ease: "easeOut" }}
              style={{ backgroundColor: skill.color }}
            />
            <motion.div
              className="skill-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 + 1 }}
              style={{ backgroundColor: skill.color }}
            />
          </div>
          <motion.div
            className="skill-card-glow"
            style={{ backgroundColor: skill.color }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div 
      className="timeline"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: index * 0.2 }}
        >
          <div className="timeline-marker" style={{ backgroundColor: exp.color }}>
            <exp.icon />
          </div>
          <div className="timeline-content">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <span className="period">{exp.period}</span>
            <p>{exp.description}</p>
            <ul className="achievements-list">
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + i * 0.1 }}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            className="timeline-glow"
            style={{ backgroundColor: exp.color }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  const renderEducation = () => (
    <motion.div 
      className="education-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {education.map((edu, index) => (
        <motion.div
          key={index}
          className="education-card"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: index * 0.2 }}
        >
          <div className="education-icon" style={{ color: edu.color }}>
            <edu.icon />
          </div>
          <div className="education-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.school}</h4>
            <span className="period">{edu.period}</span>
            <p>{edu.description}</p>
            <div className="gpa">GPA: {edu.gpa}</div>
          </div>
          <motion.div
            className="education-glow"
            style={{ backgroundColor: edu.color }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  const renderPersonalInfo = () => (
    <motion.div 
      className="personal-info-grid"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {personalInfo.map((info, index) => (
        <motion.div
          key={index}
          className="personal-info-card"
          variants={cardVariants}
          whileHover="hover"
          transition={{ delay: index * 0.1 }}
        >
          <div className="info-icon" style={{ color: info.color }}>
            <info.icon />
          </div>
          <div className="info-content">
            <h3>{info.label}</h3>
            <p>{info.value}</p>
          </div>
          <motion.div
            className="info-glow"
            style={{ backgroundColor: info.color }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <div className="about-container">
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
      {/* Mouse Follower Glow */}
      <motion.div
        className="home-mouse-follower"
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      <div className="about-content">
        {/* Header Section */}
        <motion.section 
          className="about-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="about-title"
            variants={itemVariants}
          >
            {t('about.title')}
          </motion.h1>
          
          <motion.p 
            className="about-subtitle"
            variants={itemVariants}
          >
            {t('about.subtitle')}
          </motion.p>

          {/* Stats Section */}
          <motion.div 
            className="stats-section"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="stat-icon"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  style={{ color: stat.color }}
                >
                  <stat.icon />
                </motion.div>
                <motion.div
                  className="stat-number"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
                <motion.div
                  className="stat-glow"
                  style={{ backgroundColor: stat.color }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Tab Navigation */}
        <motion.section 
          className="tab-navigation"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="tab-container">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0, 212, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <tab.icon className="tab-icon" />
                {tab.name}
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Tab Content */}
        <motion.section 
          className="tab-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'skills' && renderSkills()}
              {activeTab === 'experience' && renderExperience()}
              {activeTab === 'education' && renderEducation()}
              {activeTab === 'personal' && renderPersonalInfo()}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="about-cta"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="cta-content"
            variants={itemVariants}
          >
            <h2>{t('about.cta.title')}</h2>
            <p>{t('about.cta.subtitle')}</p>
            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="cta-button primary"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowRight />
                {t('about.cta.getInTouch')}
              </motion.a>
              <motion.a
                href="/work"
                className="cta-button secondary"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                {t('about.cta.viewPortfolio')}
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 