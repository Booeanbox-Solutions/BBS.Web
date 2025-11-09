import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaCode, FaBrain, FaShieldAlt, FaNetworkWired, 
  FaRocket, FaChartLine, FaUsers, FaAward 
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      icon: <FaCode />,
      title: 'Software Solutions',
      description: 'Custom software development tailored to your business needs with the latest technologies and best practices.',
      gradient: 'var(--gradient-1)'
    },
    {
      icon: <FaBrain />,
      title: 'AI Solutions',
      description: 'Advanced AI-powered solutions and our proprietary monitoring platform for sophisticated industrial applications.',
      gradient: 'var(--gradient-2)'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity.',
      gradient: 'var(--gradient-3)'
    },
    {
      icon: <FaNetworkWired />,
      title: 'IoT Integration',
      description: 'Seamless IoT integration services connecting devices and systems for intelligent automation.',
      gradient: 'var(--gradient-1)'
    }
  ];

  const stats = [
    { icon: <FaUsers />, value: '100+', label: 'Happy Clients' },
    { icon: <FaRocket />, value: '200+', label: 'Projects Delivered' },
    { icon: <FaAward />, value: '15+', label: 'Years Experience' },
    { icon: <FaChartLine />, value: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Boolean Box Solutions - IT Services, AI Solutions & Cybersecurity</title>
        <meta 
          name="description" 
          content="Boolean Box Solutions provides cutting-edge IT services, AI solutions, cybersecurity, and IoT integration. Transform your business with our expert team." 
        />
        <meta 
          name="keywords" 
          content="IT services, software development, AI solutions, cybersecurity, IoT integration, Boolean Box Solutions" 
        />
        <meta property="og:title" content="Boolean Box Solutions - IT Services & AI Solutions" />
        <meta 
          property="og:description" 
          content="Expert IT services, AI solutions, and cybersecurity for modern businesses" 
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://booleanboxsolutions.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Boolean Box Solutions",
            "description": "IT Services, AI Solutions, Cybersecurity & IoT Integration",
            "url": "https://booleanboxsolutions.com",
            "logo": "https://booleanboxsolutions.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-890",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://linkedin.com/company/booleanboxsolutions",
              "https://twitter.com/booleanboxsol"
            ]
          })}
        </script>
      </Helmet>

      <div className="home">
        {/* Hero Section */}
        <section className="hero" ref={heroRef}>
          <div className="hero-background">
            <div className="hero-particles">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 2}px`,
                    height: `${Math.random() * 4 + 2}px`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="container hero-container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Transform Your Business with
                <span className="gradient-text glow-text"> Next-Gen Technology</span>
              </motion.h1>
              
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Boolean Box Solutions delivers cutting-edge IT services, AI-powered solutions, 
                cybersecurity excellence, and seamless IoT integration to drive your success.
              </motion.p>

              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-outline">
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <div className="floating-element">
                <div className="tech-circle circle-1"></div>
                <div className="tech-circle circle-2"></div>
                <div className="tech-circle circle-3"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section section" ref={featuresRef}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive IT solutions powered by expertise and innovation
              </p>
            </motion.div>

            <motion.div
              className="services-grid"
              variants={containerVariants}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="service-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section" ref={statsRef}>
          <div className="container">
            <motion.div
              className="stats-grid"
              variants={containerVariants}
              initial="hidden"
              animate={statsInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  variants={itemVariants}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's discuss how we can help you achieve your technology goals</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
