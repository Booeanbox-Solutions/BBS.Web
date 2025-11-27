import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo_icon_booleanbox_sol_white.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="BooleanBox Solutions" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              Transforming businesses with cutting-edge IT solutions, AI innovation, and cybersecurity excellence.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services#software-development">Software Solutions</Link></li>
              <li><Link to="/services#ai-solutions">AI Solutions</Link></li>
              <li><Link to="/services#cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/services#iot-integration">IoT Integration</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:booleanboxsolutions@gmail.com">booleanboxsolutions@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+919899672533">+91 9899672533</a>
              </li>
              <li>
                <FaWhatsapp />
                <a href="https://wa.me/919953052462" target="_blank" rel="noopener noreferrer">+91 99530 52462</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BooleanBox Solutions. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/privacy-policy">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
