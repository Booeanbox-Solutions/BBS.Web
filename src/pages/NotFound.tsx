import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaHome, FaRocket, FaExclamationTriangle } from 'react-icons/fa';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Boolean Box Solutions</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="not-found">
        <div className="not-found-container">
          {/* Animated background particles */}
          <div className="particles-404">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particle-404"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.5,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <motion.div
            className="not-found-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Glitch effect 404 */}
            <motion.div
              className="error-code"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                type: 'spring',
                stiffness: 200,
                damping: 10
              }}
            >
              <div className="glitch" data-text="404">404</div>
            </motion.div>

            {/* Icon */}
            <motion.div
              className="error-icon"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <FaExclamationTriangle />
            </motion.div>

            {/* Error message */}
            <motion.h1
              className="error-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Page Not Found
            </motion.h1>

            <motion.p
              className="error-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Looks like you've ventured into uncharted digital territory.
              The page you're looking for doesn't exist in this dimension.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              className="error-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/" className="btn-404 btn-primary-404">
                <FaHome />
                <span>Back to Home</span>
              </Link>
              <Link to="/contact" className="btn-404 btn-outline-404">
                <FaRocket />
                <span>Contact Support</span>
              </Link>
            </motion.div>

            {/* Suggested links */}
            <motion.div
              className="suggested-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <p>You might be looking for:</p>
              <div className="links-grid">
                <Link to="/services">Our Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Animated orbit rings */}
          <div className="orbit-rings">
            <motion.div
              className="orbit-ring ring-1"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="orbit-ring ring-2"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="orbit-ring ring-3"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
