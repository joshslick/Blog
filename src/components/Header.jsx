import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <Link to="/" className={styles.logo}>
          Abby Unfiltered
        </Link>
        
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
