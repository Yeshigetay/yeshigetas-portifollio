import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaTelegram, 
  FaTiktok, 
  FaInstagram, 
  FaEnvelope, 
  FaArrowRight,
  FaCode,
  FaPalette,
  FaMobile,
  FaRocket,
  FaUsers,
  FaTrophy,
  FaStar
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();
  const [currentText, setCurrentText] = useState(0);
  const texts = t('home.typing', { returnObjects: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const services = [
    {
      icon: <FaCode />,
      title: t('home.services.0.title'),
      description: t('home.services.0.description'),
      color: "#00d4ff"
    },
    {
      icon: <FaPalette />,
      title: t('home.services.1.title'),
      description: t('home.services.1.description'),
      color: "#ff6b6b"
    },
    {
      icon: <FaMobile />,
      title: t('home.services.2.title'),
      description: t('home.services.2.description'),
      color: "#4ecdc4"
    },
    {
      icon: <FaRocket />,
      title: t('home.services.3.title'),
      description: t('home.services.3.description'),
      color: "#feca57"
    }
  ];

  const stats = [
    { number: "50+", label: t('home.stats.projects'), icon: <FaTrophy /> },
    { number: "3+", label: t('home.stats.experience'), icon: <FaStar /> },
    { number: "100%", label: t('home.stats.satisfaction'), icon: <FaUsers /> }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-left">
            <motion.div className="profile-card" variants={itemVariants}>
              <div className="profile-image-wrapper">
                <img 
                  src="/images/Pro.jpg" 
                  alt={t('home.hero.name')} 
                  className="profile-image"
                />
                <div className="profile-glow"></div>
                <div className="profile-ring"></div>
              </div>
              
              <div className="social-links">
                <a href="https://t.me/Moon2854" className="social-link" style={{"--hover-color": "#0088cc"}}>
                  <FaTelegram />
                </a>
                <a href="https://www.tiktok.com/@your_tiktok_username" className="social-link" style={{"--hover-color": "#000000"}}>
                  <FaTiktok />
                </a>
                <a href="https://www.instagram.com/benjamingx54" className="social-link" style={{"--hover-color": "#e4405f"}}>
                  <FaInstagram />
                </a>
                <a href="mailto:rashambachew@gmail.com" className="social-link" style={{"--hover-color": "#ea4335"}}>
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="hero-right">
            <motion.div variants={itemVariants}>
              <h1 className="hero-title">
                {t('home.hero.greeting')} <span className="highlight">{t('home.hero.name')}</span>
              </h1>
            </motion.div>

            <motion.div className="typing-container" variants={itemVariants}>
              <h2 className="typing-text">
                {t('home.hero.im')} <span className="typing-highlight">{texts[currentText]}</span>
                <span className="cursor">|</span>
              </h2>
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
              {t('home.description')}
            </motion.p>

            <motion.div className="cta-buttons" variants={itemVariants}>
              <Link to="/work" className="cta-button primary large">
                {t('home.ctaWork')}
                <FaArrowRight className="cta-icon" />
              </Link>
              <Link to="/contact" className="cta-button secondary">
                {t('home.ctaContact')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <motion.div 
          className="services-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('home.servicesTitle')}</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-glow" style={{ background: `radial-gradient(circle, ${service.color}20, transparent)` }}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <motion.div 
          className="stats-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="contact-cta">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t('home.ctaSection.title')}</h2>
          <p>{t('home.ctaSection.desc')}</p>
          <Link to="/contact" className="cta-button primary large">
            {t('home.ctaSection.button')}
            <FaArrowRight className="cta-icon" />
          </Link>
        </motion.div>
      </section>

      {/* Navigation Dots */}
      <div className="nav-dots">
        <div className="nav-dot active"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
        <div className="nav-dot"></div>
      </div>
    </div>
  );
};

export default Home; 