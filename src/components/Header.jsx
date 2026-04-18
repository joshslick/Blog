import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <ul className={styles.menuitems}>
          <li>
            <Link to="/" className={styles.navLink}>Home</Link>
          </li>
          <li>
            <Link to="/blog" className={styles.navLink}>Blog</Link>
          </li>
          <li>
            <Link to="/about" className={styles.navLink}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
