import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCode, FaPalette, FaRocket, FaStar, FaTrophy, FaMedal, FaMobile } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Work.css';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: t('work.projects.ecommerce.title'),
      description: t('work.projects.ecommerce.description'),
      image: '/images/project1.jpg',
      category: 'web',
      technologies: t('work.projects.ecommerce.tech').split(', '),
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/project1',
      features: ['Responsive Design', 'Payment Integration', 'Admin Dashboard', 'User Authentication']
    },
    {
      id: 2,
      title: t('work.projects.dashboard.title'),
      description: t('work.projects.dashboard.description'),
      image: '/images/project2.jpg',
      category: 'web',
      technologies: t('work.projects.dashboard.tech').split(', '),
      liveUrl: 'https://project2.com',
      githubUrl: 'https://github.com/project2',
      features: ['Real-time Data', 'Interactive Charts', 'Custom Reports', 'Data Export']
    },
    {
      id: 3,
      title: t('work.projects.mobile.title'),
      description: t('work.projects.mobile.description'),
      image: '/images/project3.jpg',
      category: 'mobile',
      technologies: t('work.projects.mobile.tech').split(', '),
      liveUrl: 'https://project3.com',
      githubUrl: 'https://github.com/project3',
      features: ['Cross-platform', 'Offline Support', 'Push Notifications', 'Native Performance']
    },
    {
      id: 4,
      title: t('work.projects.portfolio.title'),
      description: t('work.projects.portfolio.description'),
      image: '/images/project4.jpg',
      category: 'design',
      technologies: t('work.projects.portfolio.tech').split(', '),
      liveUrl: 'https://project4.com',
      githubUrl: 'https://github.com/project4',
      features: ['Modern Design', 'Smooth Animations', 'Responsive Layout', 'SEO Optimized']
    },
    {
      id: 5,
      title: t('work.projects.blog.title'),
      description: t('work.projects.blog.description'),
      image: '/images/project5.jpg',
      category: 'web',
      technologies: t('work.projects.blog.tech').split(', '),
      liveUrl: 'https://project5.com',
      githubUrl: 'https://github.com/project5',
      features: ['Content Management', 'Markdown Support', 'SEO Optimization', 'Comment System']
    },
    {
      id: 6,
      title: t('work.projects.chat.title'),
      description: t('work.projects.chat.description'),
      image: '/images/project6.jpg',
      category: 'web',
      technologies: t('work.projects.chat.tech').split(', '),
      liveUrl: 'https://project6.com',
      githubUrl: 'https://github.com/project6',
      features: ['Real-time Messaging', 'File Sharing', 'Video Calls', 'Group Chats']
    }
  ];

  const filters = [
    { id: 'all', label: t('work.filter.all') },
    { id: 'web', label: t('work.filter.web') },
    { id: 'mobile', label: t('work.filter.mobile') },
    { id: 'design', label: t('work.filter.design') }
  ];

  const stats = [
    { number: '2+', label: t('work.stats.completed'), icon: FaCode, color: '#00d4ff' },
    { number: '1', label: t('work.stats.ongoing'), icon: FaPalette, color: '#ff6b6b' },
    { number: '100%', label: t('work.stats.satisfaction'), icon: FaRocket, color: '#4ecdc4' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const filterIcons = {
    all: <FaStar />,
    web: <FaCode />,
    mobile: <FaMobile />,
    design: <FaPalette />,
  };

  return (
    <div className="work-container">
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

      <div className="work-content">
        {/* Header Section */}
        <motion.section 
          className="work-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="work-title"
            variants={itemVariants}
          >
            {t('work.title')}
          </motion.h1>
          
          <motion.p 
            className="work-subtitle"
            variants={itemVariants}
          >
            {t('work.subtitle')}
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

        {/* Filter Section */}
        <motion.section 
          className="filter-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="filter-container">
            {filters.map((filter, index) => (
              <motion.button
                key={filter.id}
                className={`work-filter-btn${activeFilter === filter.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ 
                  scale: 1.09,
                  y: -3,
                  boxShadow: `0 0 18px 2px #00d4ff, 0 0 40px 0px #1a1a2e` 
                }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="work-filter-icon">{filterIcons[filter.id]}</span>
                <span>{filter.label}</span>
                <span className="work-filter-glow" />
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section 
          className="projects-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <motion.div
                      className="project-links"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub />
                      </a>
                    </motion.div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <motion.div
                  className="project-glow"
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
        </motion.section>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <FaTimes />
              </button>
              
              <div className="modal-content">
                <div className="modal-image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="modal-info">
                  <h2>{selectedProject.title}</h2>
                  <p>{selectedProject.description}</p>
                  
                  <div className="modal-technologies">
                    <h3>Technologies Used:</h3>
                    <div className="tech-list">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-features">
                    <h3>Key Features:</h3>
                    <ul>
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-links">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link live"
                    >
                      <FaExternalLinkAlt />
                      View Live
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-link github"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work; 