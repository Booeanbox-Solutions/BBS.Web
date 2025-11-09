import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  FaCode, FaBrain, FaShieldAlt, FaNetworkWired, 
  FaCheck, FaMobileAlt, FaCloud, FaDatabase,
  FaRobot, FaLock, FaChartLine, FaCog
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your unique business requirements',
      features: [
        'Web Application Development',
        'Mobile App Development', 
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Cloud-Native Applications'
      ],
      gradient: 'var(--gradient-1)'
    },
    {
      icon: <FaBrain />,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for modern industries',
      features: [
        'Machine Learning Models',
        'AI Monitoring Platform',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      gradient: 'var(--gradient-2)'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: [
        'Security Audits & Assessment',
        'Penetration Testing',
        'Security Platform Development',
        'Compliance & Risk Management',
        'Incident Response'
      ],
      gradient: 'var(--gradient-3)'
    },
    {
      icon: <FaNetworkWired />,
      title: 'IoT & Integration',
      description: 'Seamless connectivity and integration for the Internet of Things',
      features: [
        'IoT Device Integration',
        'Smart Sensor Networks',
        'Industrial IoT Solutions',
        'API Integration Services',
        'System Automation'
      ],
      gradient: 'var(--gradient-1)'
    }
  ];

  const technologies = [
    { icon: <FaMobileAlt />, name: 'Mobile' },
    { icon: <FaCloud />, name: 'Cloud' },
    { icon: <FaDatabase />, name: 'Database' },
    { icon: <FaRobot />, name: 'AI/ML' },
    { icon: <FaLock />, name: 'Security' },
    { icon: <FaChartLine />, name: 'Analytics' },
    { icon: <FaCog />, name: 'DevOps' },
    { icon: <FaNetworkWired />, name: 'IoT' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Boolean Box Solutions</title>
        <meta 
          name="description" 
          content="Explore our comprehensive IT services: Custom Software Development, AI Solutions, Cybersecurity, and IoT Integration. Transform your business with Boolean Box Solutions." 
        />
        <meta 
          name="keywords" 
          content="software development, AI solutions, machine learning, cybersecurity, IoT integration, cloud services" 
        />
      </Helmet>

      <div className="services-page">
        <section className="services-hero section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="services-hero-content"
            >
              <h1 className="section-title">Our Services</h1>
              <p className="hero-text">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </motion.div>
          </div>
        </section>

        <section className="services-main section">
          <div className="container">
            <div className="services-list">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-detail card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="service-header">
                    <div className="service-icon-large" style={{ background: service.gradient }}>
                      {service.icon}
                    </div>
                    <div className="service-title-section">
                      <h2>{service.title}</h2>
                      <p className="service-description">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="service-features">
                    <h3>What We Offer:</h3>
                    <ul>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <FaCheck className="check-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="tech-stack-section section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Technologies We Work With</h2>
              <p className="section-subtitle">
                Leveraging cutting-edge technologies to deliver exceptional results
              </p>
            </motion.div>

            <div className="tech-grid">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-item card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="tech-icon">{tech.icon}</div>
                  <p>{tech.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Let's Build Something Amazing Together</h2>
              <p>Ready to transform your business with our expert services?</p>
              <a href="/contact" className="btn btn-primary">Get Started Today</a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
