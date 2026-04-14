// Search and filter utilities for blog posts

export const searchPosts = (posts, query) => {
  if (!query.trim()) return posts;
  
  const lowerQuery = query.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery)
  );
};

export const filterByCategory = (posts, category) => {
  if (!category) return posts;
  return posts.filter(post => post.categories.includes(category));
};

export const filterByTag = (posts, tag) => {
  if (!tag) return posts;
  return posts.filter(post => post.tags.includes(tag));
};

export const sortPostsByDate = (posts, order = 'desc') => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return order === 'desc' ? dateB - dateA : dateA - dateB;
  });
};

export const getRelatedPosts = (post, allPosts, limit = 3) => {
  return allPosts
    .filter(p => p.id !== post.id && 
                 (p.categories.some(cat => post.categories.includes(cat)) ||
                  p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, limit);
};

export const getAllCategories = (posts) => {
  const categories = new Set();
  posts.forEach(post => {
    post.categories.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
};

export const getAllTags = (posts) => {
  const tags = new Set();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
