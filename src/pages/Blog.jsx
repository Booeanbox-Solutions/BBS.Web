import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Discover how artificial intelligence is transforming the way businesses operate and make decisions in the modern digital landscape.',
      author: 'BBS Team',
      date: 'November 8, 2025',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for 2025',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to implementing robust security measures in your organization.',
      author: 'BBS Security Team',
      date: 'November 5, 2025',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/cybersecurity.jpg'
    },
    {
      id: 3,
      title: 'IoT Revolution: Connecting the Unconnected',
      excerpt: 'Explore how IoT technology is bridging the gap between physical and digital worlds, creating smarter ecosystems.',
      author: 'BBS IoT Team',
      date: 'November 1, 2025',
      readTime: '6 min read',
      category: 'IoT & Integration',
      image: '/blog/iot.jpg'
    },
    {
      id: 4,
      title: 'Building Scalable Cloud Applications',
      excerpt: 'Learn the essential principles and best practices for developing applications that scale seamlessly in the cloud.',
      author: 'BBS Development Team',
      date: 'October 28, 2025',
      readTime: '8 min read',
      category: 'Software Development',
      image: '/blog/cloud.jpg'
    },
    {
      id: 5,
      title: 'Machine Learning Models in Production',
      excerpt: 'A practical guide to deploying and maintaining machine learning models in real-world production environments.',
      author: 'BBS AI Team',
      date: 'October 25, 2025',
      readTime: '10 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ml-production.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Edge Computing',
      excerpt: 'Understanding edge computing and its role in reducing latency and improving real-time data processing capabilities.',
      author: 'BBS Team',
      date: 'October 20, 2025',
      readTime: '6 min read',
      category: 'Technology',
      image: '/blog/edge-computing.jpg'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Blog - Boolean Box Solutions | Tech Insights & Updates</title>
        <meta 
          name="description" 
          content="Read the latest insights on AI, cybersecurity, IoT, and software development from Boolean Box Solutions experts." 
        />
      </Helmet>

      <div className="blog-page">
        <section className="blog-hero section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="section-title">Our Blog</h1>
              <p className="hero-text">
                Insights, updates, and expert perspectives on technology and innovation
              </p>
            </motion.div>
          </div>
        </section>

        <section className="blog-content section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="blog-card card"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    <div className="blog-image-placeholder">
                      <div className="category-badge">{post.category}</div>
                    </div>
                    
                    <div className="blog-content-section">
                      <h2>{post.title}</h2>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      
                      <div className="blog-meta">
                        <span className="meta-item">
                          <FaUser /> {post.author}
                        </span>
                        <span className="meta-item">
                          <FaCalendar /> {post.date}
                        </span>
                        <span className="meta-item">
                          <FaClock /> {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
