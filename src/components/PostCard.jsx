import { Link } from 'react-router-dom';
import styles from '../styles/PostCard.module.css';
import { formatDate } from '../utils/searchUtils';

export default function PostCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className={styles.postCard}>
      <img 
        src={post.image} 
        alt={post.title}
        className={styles.postImage}
      />
      <div className={styles.postContent}>
        <h3 className={styles.postTitle}>{post.title}</h3>
        
        <div className={styles.postMeta}>
          <span className={styles.postAuthor}>{post.author}</span>
          <span className={styles.postDate}>{formatDate(post.date)}</span>
        </div>

        <p className={styles.postExcerpt}>{post.excerpt}</p>

        {/* Tags commented out */}
        {/* <div className={styles.postTags}>
          {post.tags.slice(0, 3).map(tag => (
            <span key={tag} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div> */}
      </div>
    </Link>
  );
}
