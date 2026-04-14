import { useState, useMemo } from 'react';
import PostCard from '../components/PostCard';
import { blogPosts } from '../data/posts';
import { 
  searchPosts, 
  filterByCategory, 
  filterByTag,
  getAllCategories,
  getAllTags 
} from '../utils/searchUtils';
import styles from '../styles/BlogPage.module.css';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const categories = getAllCategories(blogPosts);
  const tags = getAllTags(blogPosts);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Search
    if (searchQuery) {
      posts = searchPosts(posts, searchQuery);
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      posts = posts.filter(post =>
        selectedCategories.some(cat => post.categories.includes(cat))
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      posts = posts.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
    }

    return posts;
  }, [searchQuery, selectedCategories, selectedTags]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleTagChange = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>Abby Unfiltered Blog</h1>
          <p>Stories, strategies, and support for the single mom journey</p>
        </div>

        <div className={styles.controls}>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBox}
          />
          {(searchQuery || selectedCategories.length > 0 || selectedTags.length > 0) && (
            <button 
              onClick={clearFilters}
              className={styles.filterButton}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className={styles.sidebar}>
          {/* Filters Sidebar */}
          <div className={styles.filters}>
            <div className={styles.filterSection}>
              <h3>Categories</h3>
              <ul className={styles.filterList}>
                {categories.map(category => (
                  <li key={category} className={styles.filterItem}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterSection}>
              <h3>Tags</h3>
              <ul className={styles.filterList}>
                {tags.slice(0, 8).map(tag => (
                  <li key={tag} className={styles.filterItem}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                      />
                      #{tag}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Posts */}
          <div>
            {filteredPosts.length > 0 ? (
              <div className={styles.postGrid}>
                {filteredPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No posts found matching your criteria.</p>
                <button 
                  onClick={clearFilters}
                  className={styles.filterButton}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
