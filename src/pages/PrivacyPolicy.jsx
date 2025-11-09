import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Boolean Box Solutions</title>
        <meta 
          name="description" 
          content="Privacy Policy for Boolean Box Solutions. Learn how we collect, use, and protect your personal information." 
        />
      </Helmet>

      <div className="privacy-page">
        <section className="privacy-hero section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title">Privacy Policy</h1>
              <p className="hero-text">Last updated: November 9, 2025</p>
            </motion.div>
          </div>
        </section>

        <section className="privacy-content section">
          <div className="container">
            <motion.div
              className="privacy-document card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2>1. Introduction</h2>
              <p>
                Boolean Box Solutions ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul>
                <li>Fill out contact forms on our website</li>
                <li>Subscribe to our newsletters or blog updates</li>
                <li>Request information about our services</li>
                <li>Engage with our customer support</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, company name, 
                and any other information you choose to provide.
              </p>

              <h3>2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information about 
                your device, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraudulent activities and enhance security</li>
              </ul>

              <h2>4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may 
                share your information only in the following circumstances:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party 
                  service providers who assist us in operating our website and conducting our business
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by 
                  law or in response to valid requests by public authorities
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or 
                  sale of assets, your information may be transferred
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing of your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your 
                browsing experience. You can control cookie settings through your browser preferences.
              </p>

              <h2>8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices of these external sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>

              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly 
                collect personal information from children. If you believe we have inadvertently 
                collected such information, please contact us immediately.
              </p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please 
                contact us at:
              </p>
              <div className="contact-details">
                <p><strong>Boolean Box Solutions</strong></p>
                <p>Email: <a href="mailto:privacy@booleanboxsolutions.com">privacy@booleanboxsolutions.com</a></p>
                <p>Phone: +1 (234) 567-890</p>
              </div>

              <div className="policy-footer">
                <p>
                  By using our website and services, you acknowledge that you have read and 
                  understood this Privacy Policy and agree to its terms.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
