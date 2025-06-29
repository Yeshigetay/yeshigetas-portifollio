import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaPalette, FaComments, FaCheck, FaArrowRight, FaStar, FaTrophy, FaMedal, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useTranslation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      id: 'web',
      icon: FaCode,
      title: t('services.services.web.title'),
      description: t('services.services.web.description'),
      features: t('services.services.web.features', { returnObjects: true }),
      color: '#00d4ff'
    },
    {
      id: 'mobile',
      icon: FaMobile,
      title: t('services.services.mobile.title'),
      description: t('services.services.mobile.description'),
      features: t('services.services.mobile.features', { returnObjects: true }),
      color: '#ff6b6b'
    },
    {
      id: 'uiux',
      icon: FaPalette,
      title: t('services.services.uiux.title'),
      description: t('services.services.uiux.description'),
      features: t('services.services.uiux.features', { returnObjects: true }),
      color: '#4ecdc4'
    },
    {
      id: 'consulting',
      icon: FaComments,
      title: t('services.services.consulting.title'),
      description: t('services.services.consulting.description'),
      features: t('services.services.consulting.features', { returnObjects: true }),
      color: '#feca57'
    }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      title: t('services.pricing.basic.title'),
      price: t('services.pricing.basic.price'),
      description: t('services.pricing.basic.description'),
      features: t('services.pricing.basic.features', { returnObjects: true }),
      color: '#00d4ff',
      popular: false
    },
    {
      id: 'standard',
      title: t('services.pricing.standard.title'),
      price: t('services.pricing.standard.price'),
      description: t('services.pricing.standard.description'),
      features: t('services.pricing.standard.features', { returnObjects: true }),
      color: '#ff6b6b',
      popular: true
    },
    {
      id: 'premium',
      title: t('services.pricing.premium.title'),
      price: t('services.pricing.premium.price'),
      description: t('services.pricing.premium.description'),
      features: t('services.pricing.premium.features', { returnObjects: true }),
      color: '#4ecdc4',
      popular: false
    }
  ];

  const achievements = [
    { icon: FaStar, title: 'Project Excellence', description: 'Delivered high-quality solutions' },
    { icon: FaTrophy, title: 'Client Satisfaction', description: '100% client satisfaction rate' },
    { icon: FaMedal, title: 'Technical Expertise', description: 'Mastered modern technologies' }
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
    <div className="services-container">
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

      <div className="services-content">
        {/* Header Section */}
        <motion.section 
          className="services-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="services-title"
            variants={itemVariants}
          >
            {t('services.title')}
          </motion.h1>
          
          <motion.p 
            className="services-subtitle"
            variants={itemVariants}
          >
            {t('services.subtitle')}
          </motion.p>
          
          <motion.p 
            className="services-description"
            variants={itemVariants}
          >
            {t('services.description')}
          </motion.p>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="services-grid-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="services-grid"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="service-icon" style={{ color: service.color }}>
                  <service.icon />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheck className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.div
                  className="service-glow"
                  style={{ backgroundColor: service.color }}
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

        {/* Pricing Section */}
        <motion.section 
          className="pricing-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="pricing-header" variants={itemVariants}>
            <h2 className="section-title">
              {t('services.pricing.title')}
            </h2>
            <p className="pricing-subtitle">
              Choose the perfect plan for your project needs
            </p>
          </motion.div>
          
          <motion.div 
            className="pricing-grid"
            variants={containerVariants}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="popular-badge"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <FaStar />
                    <span>Most Popular</span>
                    <div className="badge-glow"></div>
                  </motion.div>
                )}
                
                {/* Card Header */}
                <div className="pricing-header-content">
                  <div className="plan-icon" style={{ backgroundColor: plan.color }}>
                    {plan.id === 'basic' && <FaRocket />}
                    {plan.id === 'standard' && <FaTrophy />}
                    {plan.id === 'premium' && <FaStar />}
                  </div>
                  
                  <h3 className="plan-title">{plan.title}</h3>
                  
                  <div className="pricing-display">
                    <div className="price-container">
                      <span className="currency">$</span>
                      <span className="price-amount">
                        {plan.price.replace('$', '')}
                      </span>
                      <span className="price-period">/project</span>
                    </div>
                    <div className="price-savings">
                      {plan.id === 'standard' && <span>Save 20%</span>}
                      {plan.id === 'premium' && <span>Best Value</span>}
                    </div>
                  </div>
                  
                  <p className="plan-description">{plan.description}</p>
                </div>
                
                {/* Features List */}
                <div className="features-container">
                  <h4 className="features-title">What's Included:</h4>
                  <ul className="pricing-features">
                    {plan.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.1) }}
                        className="feature-item"
                      >
                        <div className="feature-icon">
                          <FaCheck />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="pricing-actions">
                  <motion.button
                    className={`pricing-button primary ${plan.popular ? 'popular' : ''}`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      boxShadow: `0 20px 40px ${plan.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ 
                      backgroundColor: plan.color,
                      borderColor: plan.color
                    }}
                  >
                    <span>Get Started</span>
                    <FaArrowRight />
                  </motion.button>
                  
                  <motion.button
                    className="pricing-button secondary"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Learn More</span>
                  </motion.button>
                </div>
                
                {/* Additional Benefits */}
                <div className="plan-benefits">
                  {plan.id === 'basic' && (
                    <div className="benefit-item">
                      <FaRocket />
                      <span>Perfect for startups</span>
                    </div>
                  )}
                  {plan.id === 'standard' && (
                    <div className="benefit-item">
                      <FaTrophy />
                      <span>Most popular choice</span>
                    </div>
                  )}
                  {plan.id === 'premium' && (
                    <div className="benefit-item">
                      <FaStar />
                      <span>Enterprise solution</span>
                    </div>
                  )}
                </div>
                
                {/* Animated Glow Effects */}
                <motion.div
                  className="pricing-glow primary"
                  style={{ backgroundColor: plan.color }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="pricing-glow secondary"
                  style={{ backgroundColor: plan.color }}
                  animate={{
                    opacity: [0.1, 0.4, 0.1],
                    scale: [1.2, 1.5, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.5 + 1,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pricing Footer */}
          <motion.div 
            className="pricing-footer"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="pricing-note">
              <FaStar />
              <p>All plans include free consultation and project planning</p>
            </div>
            <div className="pricing-guarantee">
              <FaTrophy />
              <p>100% satisfaction guarantee or your money back</p>
            </div>
          </motion.div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section 
          className="achievements-section"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="achievements-grid"
            variants={containerVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                variants={cardVariants}
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <motion.div 
                  className="achievement-icon"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <achievement.icon />
                </motion.div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <motion.div
                  className="achievement-glow"
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="service-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-icon" style={{ color: selectedService.color }}>
                  <selectedService.icon />
                </div>
                <h2>{selectedService.title}</h2>
                <button
                  className="modal-close"
                  onClick={() => setSelectedService(null)}
                >
                  ×
                </button>
              </div>
              
              <div className="modal-content">
                <p>{selectedService.description}</p>
                
                <div className="modal-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {selectedService.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheck className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.button
                  className="modal-cta"
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 15px 35px rgba(0, 212, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ backgroundColor: selectedService.color }}
                >
                  <FaArrowRight />
                  Get This Service
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services; 