import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaUser, FaClock, FaArrowLeft } from 'react-icons/fa';

interface BlogPostData {
  id: string | undefined;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog post data (in a real app, this would come from an API or database)
  const blogPost: BlogPostData = {
    id: id,
    title: 'The Future of AI in Enterprise Solutions',
    author: 'BBS Team',
    date: 'November 8, 2025',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    content: `
      <p>Artificial Intelligence is revolutionizing the way enterprises operate, making processes more efficient, decision-making more data-driven, and customer experiences more personalized. At Boolean Box Solutions, we're at the forefront of this transformation, developing cutting-edge AI solutions that drive real business value.</p>

      <h2>The Current State of Enterprise AI</h2>
      <p>Today's enterprises are increasingly adopting AI technologies to stay competitive in a rapidly evolving market. From predictive analytics to intelligent automation, AI is becoming an integral part of business operations across industries.</p>

      <h2>Key Trends Shaping the Future</h2>
      <h3>1. AI-Powered Automation</h3>
      <p>Intelligent automation is streamlining complex business processes, reducing manual effort, and minimizing errors. Our AI monitoring platform exemplifies this trend, providing sophisticated monitoring solutions for industrial operations.</p>

      <h3>2. Predictive Analytics</h3>
      <p>Machine learning models are enabling businesses to forecast trends, anticipate customer needs, and make proactive decisions. This shift from reactive to predictive operations is transforming entire industries.</p>

      <h3>3. Natural Language Processing</h3>
      <p>NLP is making human-computer interaction more natural and intuitive, powering chatbots, virtual assistants, and advanced search capabilities.</p>

      <h2>Our Approach to AI Solutions</h2>
      <p>At Boolean Box Solutions, we believe in developing AI solutions that are practical, scalable, and aligned with business objectives. Our team combines deep technical expertise with industry knowledge to deliver solutions that truly make a difference.</p>

      <h2>Looking Ahead</h2>
      <p>The future of AI in enterprise solutions is bright, with emerging technologies like edge AI, federated learning, and AI-driven cybersecurity set to reshape the landscape. We're excited to be part of this journey, helping businesses harness the power of AI to achieve their goals.</p>

      <p>Want to learn more about how AI can transform your business? <a href="/contact">Get in touch with our team</a> to discuss your specific needs and explore the possibilities.</p>
    `
  };

  return (
    <>
      <Helmet>
        <title>{blogPost.title} - Boolean Box Solutions Blog</title>
        <meta name="description" content={blogPost.title} />
      </Helmet>

      <div className="blog-post-page">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="blog-post-content"
          >
            <Link to="/blog" className="back-link">
              <FaArrowLeft /> Back to Blog
            </Link>

            <article className="post-article">
              <div className="post-header">
                <div className="category-badge">{blogPost.category}</div>
                <h1>{blogPost.title}</h1>
                
                <div className="post-meta">
                  <span className="meta-item">
                    <FaUser /> {blogPost.author}
                  </span>
                  <span className="meta-item">
                    <FaCalendar /> {blogPost.date}
                  </span>
                  <span className="meta-item">
                    <FaClock /> {blogPost.readTime}
                  </span>
                </div>
              </div>

              <div 
                className="post-content"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </article>

            <div className="post-footer">
              <Link to="/blog" className="btn btn-outline">
                <FaArrowLeft /> View All Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
