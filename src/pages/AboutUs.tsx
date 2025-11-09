import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'We believe in strong partnerships with our clients, working together to achieve remarkable results.'
    },
    {
      icon: <FaHeart />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in every project we undertake.'
    },
    {
      icon: <FaRocket />,
      title: 'Growth',
      description: 'We help businesses grow and transform through technology-driven solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Boolean Box Solutions</title>
        <meta 
          name="description" 
          content="Learn about Boolean Box Solutions - a team of highly capable IT professionals dedicated to delivering innovative software, AI, cybersecurity, and IoT solutions." 
        />
      </Helmet>

      <div className="about-page">
        <section className="about-hero section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-content"
            >
              <h1 className="section-title">About Boolean Box Solutions</h1>
              <p className="hero-text">
                Empowering businesses with innovative technology solutions since our inception
              </p>
            </motion.div>
          </div>
        </section>

        <section className="about-content section">
          <div className="container">
            <div className="about-grid">
              <motion.div
                className="about-text"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Who We Are</h2>
                <p>
                  Boolean Box Solutions is a premier IT services company dedicated to transforming 
                  businesses through cutting-edge technology. Our highly capable team of experts 
                  specializes in delivering best-in-class software solutions tailored to meet 
                  our clients' unique needs.
                </p>
                <p>
                  Founded on the principles of innovation and excellence, we have grown to become 
                  a trusted partner for businesses seeking to leverage technology for competitive advantage.
                </p>
              </motion.div>

              <motion.div
                className="about-image"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="image-placeholder">
                  <div className="placeholder-icon">
                    <FaRocket />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="expertise-section section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Expertise</h2>
              <p className="section-subtitle">What sets us apart</p>
            </motion.div>

            <div className="expertise-grid">
              <motion.div
                className="expertise-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3>Software Solutions</h3>
                <p>
                  We provide best-in-class software development services, utilizing the latest 
                  technologies and methodologies to create robust, scalable applications that 
                  drive business success.
                </p>
              </motion.div>

              <motion.div
                className="expertise-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3>AI Solutions</h3>
                <p>
                  Our focus on artificial intelligence enables us to deliver sophisticated AI 
                  solutions for various industries. We are developing our own AI monitoring 
                  platform to revolutionize industrial operations.
                </p>
              </motion.div>

              <motion.div
                className="expertise-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3>Cybersecurity</h3>
                <p>
                  Security is paramount in today's digital landscape. We provide comprehensive 
                  cybersecurity solutions and are building a dedicated platform to protect 
                  businesses from evolving threats.
                </p>
              </motion.div>

              <motion.div
                className="expertise-card card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3>IoT & Integration</h3>
                <p>
                  We specialize in IoT solutions and integration services, connecting devices 
                  and systems to create intelligent, automated environments that enhance 
                  operational efficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="values-section section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The principles that guide us</p>

            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section section">
          <div className="container">
            <motion.div
              className="team-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">Our Team</h2>
              <p className="team-description">
                At Boolean Box Solutions, we take pride in our highly capable team of professionals. 
                Our experts bring years of experience and deep technical knowledge across various 
                domains, ensuring that we deliver the best software solutions to our clients.
              </p>
              <p className="team-description">
                Our collaborative approach and commitment to continuous learning keep us at the 
                forefront of technological innovation, enabling us to tackle complex challenges 
                and deliver exceptional results.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
