import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaPaperPlane, FaCheck, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: t('contact.info.email'),
      value: 'rashambachew@gmail.com',
      link: 'mailto:rashambachew@gmail.com',
      color: '#ea4335'
    },
    {
      icon: FaPhone,
      label: t('contact.info.phone'),
      value: '+251 991 733 134',
      link: 'tel:+251991733134',
      color: '#00d4ff'
    },
    {
      icon: FaMapMarkerAlt,
      label: t('contact.info.location'),
      value: 'Addis Ababa, Ethiopia',
      link: 'https://maps.google.com/?q=Addis+Ababa,Ethiopia',
      color: '#ff6b6b'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: '#333' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: '#0077b5' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: '#e4405f' }
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

  return (
    <div className="contact-container">
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

      <div className="contact-content">
        {/* Header Section */}
        <motion.section 
          className="contact-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="contact-title"
            variants={itemVariants}
          >
            {t('contact.title')}
          </motion.h1>
          
          <motion.p 
            className="contact-subtitle"
            variants={itemVariants}
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.section>

        <div className="contact-main">
          {/* Contact Information */}
          <motion.section
            className="contact-info-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              {t('contact.info.title')}
            </motion.h2>
            
            <motion.p 
              className="section-description"
              variants={itemVariants}
            >
              {t('contact.info.description')}
            </motion.p>
            
            <motion.div 
              className="contact-info-grid"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
                  variants={cardVariants}
                  whileHover="hover"
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="info-icon" style={{ color: info.color }}>
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <h3>{info.label}</h3>
                    {info.link ? (
                      <a href={info.link} className="info-link">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                  <motion.div
                    className="info-glow"
                    style={{ backgroundColor: info.color }}
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

            <motion.div 
              className="social-links-section"
              variants={itemVariants}
            >
              <h3>{t('contact.social.title')}</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ 
                      scale: 1.2,
                      y: -5,
                      rotate: [0, -10, 10, 0]
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10,
                      delay: index * 0.1
                    }}
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            className="contact-form-section"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="section-title"
              variants={itemVariants}
            >
              {t('contact.form.title')}
            </motion.h2>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="contact-form"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.name')}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder={t('contact.form.email')}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="form-textarea"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="loading-spinner"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    className={`status-message ${submitStatus}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheck />
                        Message sent successfully! I'll get back to you soon.
                      </>
                    ) : (
                      <>
                        <FaTimes />
                        Something went wrong. Please try again.
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </motion.section>
        </div>

        {/* Additional Info Section */}
        <motion.section 
          className="additional-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="info-card"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3>Let's Work Together</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
            <motion.a
              href="/work"
              className="view-work-btn"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowRight />
              View My Work
            </motion.a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact; 