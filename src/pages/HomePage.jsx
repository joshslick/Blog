import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { blogPosts, getFeaturedPosts } from '../data/posts';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);

  return (
    <div className={styles.homePage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Welcome to Abby Unfiltered</h1>
          <p>Nurturing yourself while raising amazing humans—one day at a time</p>
          <Link to="/blog" className={styles.ctaButton}>
            Read Our Stories
          </Link>
        </section>

        {/* Features Section */}
        {/*<section>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💪</div>
              <h3>Empowerment</h3>
              <p>Real stories from single moms navigating life with grace and strength</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>Community</h3>
              <p>Connect with other moms who understand your journey and celebrate your wins</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>✨</div>
              <h3>Self-Care</h3>
              <p>Practical tips and inspiration to care for yourself while caring for others</p>
            </div>
          </div>
        </section>*/}

        {/* Featured Posts */}
        <section>
          <h2 className={styles.sectionTitle}>Featured Articles</h2>
          <div className={styles.postGrid}>
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className={styles.sectionTitle}>Latest Posts</h2>
          <div className={styles.postGrid}>
            {blogPosts.slice(0, 6).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <div className={styles.centered}>
            <Link to="/blog" className={styles.ctaButton}>
              View All Posts
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
