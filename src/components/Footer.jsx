import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-b">B</span>oolean <span className="logo-b">B</span>ox{' '}
              <span className="logo-b">S</span>olutions
            </h3>
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
              <li><Link to="/services">Software Solutions</Link></li>
              <li><Link to="/services">AI Solutions</Link></li>
              <li><Link to="/services">Cybersecurity</Link></li>
              <li><Link to="/services">IoT Integration</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaEnvelope />
                <a href="mailto:info@booleanboxsolutions.com">info@booleanboxsolutions.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Your Location, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Boolean Box Solutions. All rights reserved.</p>
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
