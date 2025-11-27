import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
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
      value: 'Booleanboxsolutions@gmail.com',
      link: 'mailto:Booleanboxsolutions@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 9899672533',
      link: 'tel:+919899672533'
    },
    {
      icon: <FaWhatsapp />,
      title: 'Whatsapp',
      value: '+91 9953052462',
      link: 'https://wa.me/919953052462'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Rajasthan, India',
      link: null
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Delhi, India',
      link: null
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Kuala Lumpur, Malaysia',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - BooleanBox Solutions</title>
        <meta
          name="description"
          content="Get in touch with BooleanBox Solutions. Let's discuss how we can help transform your business with our IT solutions."
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
                className="contact-map-section"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2>Locate Us</h2>
                <p className="contact-intro">
                  Visit our headquarters to discuss your project in person. We are strategically located to serve clients globally while maintaining strong local roots.
                </p>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      id="gmap_canvas" 
                      src="https://maps.google.com/maps?q=Booleanbox+solutions&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      frameBorder="0" 
                      scrolling="no" 
                      marginHeight={0} 
                      marginWidth={0}
                      title="BooleanBox Solutions Location"
                    >
                    </iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
