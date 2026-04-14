import { useParams, Link } from 'react-router-dom';
import { getPostById, blogPosts } from '../data/posts';
import { getRelatedPosts, formatDate } from '../utils/searchUtils';
import styles from '../styles/PostPage.module.css';

export default function PostPage() {
  const { id } = useParams();
  const post = getPostById(id);

  if (!post) {
    return (
      <div className={styles.postPage}>
        <div className={styles.container}>
          <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>
          <h1>Post not found</h1>
          <p>The post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post, blogPosts);

  return (
    <div className={styles.postPage}>
      <div className={styles.container}>
        <Link to="/blog" className={styles.backLink}>← Back to Blog</Link>

        {/* Post Header */}
        <article>
          <header className={styles.postHeader}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <div className={styles.postMeta}>
              <div className={styles.metaItem}>
                👤 <span>{post.author}</span>
              </div>
              <div className={styles.metaItem}>
                📅 <span>{formatDate(post.date)}</span>
              </div>
              <div className={styles.metaItem}>
                📂 <span>{post.categories.join(', ')}</span>
              </div>
            </div>
          </header>

          <img 
            src={post.image} 
            alt={post.title}
            className={styles.postImage}
          />

          <div className={styles.content}>
            {/* Main Content */}
            <div className={styles.postBody}>
              {post.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.trim().startsWith('**') || paragraph.trim().startsWith('1.') || paragraph.trim().startsWith('-')) {
                  // Handle as formatted text
                  return (
                    <div key={idx} dangerouslySetInnerHTML={{
                      __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .split('\n').map(line => line.replace(/^- /, '')).join('<br/>')
                    }} />
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}

              {/* Tags */}
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <a href={`#tag-${tag}`} key={tag} className={styles.tag}>
                    #{tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {relatedPosts.length > 0 && (
                <div className={styles.relatedPosts}>
                  <h3>Related Posts</h3>
                  <ul className={styles.relatedPostsList}>
                    {relatedPosts.map(relatedPost => (
                      <li key={relatedPost.id} className={styles.relatedPost}>
                        <Link 
                          to={`/post/${relatedPost.id}`}
                          className={styles.relatedPostLink}
                        >
                          {relatedPost.title}
                        </Link>
                        <div className={styles.relatedPostMeta}>
                          by {relatedPost.author}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </article>
      </div>
    </div>
  );
}
