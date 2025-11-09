import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string | null;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@booleanboxsolutions.com',
      link: 'mailto:info@booleanboxsolutions.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Your Location, Country',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Boolean Box Solutions</title>
        <meta 
          name="description" 
          content="Get in touch with Boolean Box Solutions. Let's discuss how we can help transform your business with our IT solutions." 
        />
      </Helmet>

      <div className="contact-page">
        <section className="contact-hero section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title">Get In Touch</h1>
              <p className="hero-text">
                Let's discuss how we can help you achieve your technology goals
              </p>
            </motion.div>
          </div>
        </section>

        <section className="contact-content section">
          <div className="container">
            <div className="contact-grid">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Contact Information</h2>
                <p className="contact-intro">
                  We'd love to hear from you. Reach out to us through any of the following channels, 
                  and our team will get back to you as soon as possible.
                </p>

                <div className="contact-details">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-item">
                      <div className="contact-icon">{info.icon}</div>
                      <div className="contact-text">
                        <h3>{info.title}</h3>
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="contact-form-section card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <FaPaperPlane /> Send Message
                  </button>

                  {submitted && (
                    <motion.div
                      className="success-message"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
