// Sample blog posts data
export const blogPosts = [
  
];

export const getPostById = (id) => {
  return blogPosts.find(post => post.id === parseInt(id));
};

export const getFeaturedPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};
