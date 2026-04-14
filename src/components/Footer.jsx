import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.content}`}>
        <div className={styles.section}>
          <h3>About</h3>
          <ul>
            <li><a href="#about">About Abby Unfiltered</a></li>
            <li><a href="#mission">Our Story</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Categories</h3>
          <ul>
            <li><a href="#parenting">Parenting Tips</a></li>
            <li><a href="#selfcare">Self-Care</a></li>
            <li><a href="#money">Money & Budget</a></li>
            <li><a href="#balance">Work-Life Balance</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Join Our Community</h3>
          <div className={styles.social}>
            <a href="#instagram" className={styles.socialLink} aria-label="Instagram">📷</a>
            <a href="#facebook" className={styles.socialLink} aria-label="Facebook">f</a>
            <a href="#pinterest" className={styles.socialLink} aria-label="Pinterest">📌</a>
            <a href="#email" className={styles.socialLink} aria-label="Email">✉️</a>
          </div>
        </div>
      </div>

      <div className={`${styles.container} ${styles.bottom}`}>
        <p>&copy; 2026 Abby Unfiltered. Made with 💗 for single moms everywhere.</p>
      </div>
    </footer>
  );
}
