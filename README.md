# Abby Unfiltered - A Blog for Single Moms

A beautiful, modern blog built with React and Vite, designed specifically for single mothers. Featuring a gorgeous pink floral color scheme, advanced search & filtering, and content that celebrates the strength and resilience of single moms.

## 🌸 Features

- **Beautiful Pink Floral Design** - Gorgeous pink aesthetic that women love
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Search & Filter** - Find articles by keywords, categories, or tags
- **6 Curated Posts** - Topics relevant to single mothers: self-care, budgeting, co-parenting, time management, finances, and raising resilient kids
- **Related Posts Sidebar** - Discover similar content on individual post pages
- **Fast Development** - Built with Vite for lightning-fast HMR (Hot Module Replacement)
- **CSS Modules** - Scoped styling for no naming conflicts
- **Clean Navigation** - Intuitive routing with React Router v6

## 📋 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation and theme toggle
│   ├── Footer.jsx      # Footer with community links
│   └── PostCard.jsx    # Blog post card component
├── pages/              # Page components
│   ├── HomePage.jsx    # Home page with featured posts
│   ├── BlogPage.jsx    # Blog listing with search/filter
│   ├── PostPage.jsx    # Individual post view
│   └── AboutPage.jsx   # About page with team info
├── context/            # React Context for state management
│   └── ThemeContext.jsx # Dark mode theme provider
├── styles/             # CSS Modules
│   ├── index.css                 # Global pink floral theme
│   ├── Header.module.css         # Header styling
│   ├── Footer.module.css         # Footer styling
│   ├── PostCard.module.css       # Post card styling
│   ├── HomePage.module.css       # Home page styling
│   ├── BlogPage.module.css       # Blog page styling
│   ├── PostPage.module.css       # Post page styling
│   └── AboutPage.module.css      # About page styling
├── data/               # Static content
│   └── posts.js        # Blog posts (single mom topics)
├── utils/              # Utility functions
│   └── searchUtils.js  # Search, filter, and sorting functions
├── App.jsx             # Main app with routing
└── main.jsx            # Entry point with theme provider
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📝 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with HMR enabled.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview
```bash
npm run preview
```
Preview the production build locally (requires running `npm run build` first).

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality.

## 🎨 Color Palette

The blog uses a beautiful, vibrant pink floral theme:

- **Primary Background**: Light pink (#fff5f9)
- **Secondary Background**: Soft pink (#ffe6f0)
- **Text**: Deep purple-rose (#5a3a52)
- **Accent**: Vibrant magenta (#e91e8c)
- **Borders**: Soft pink (#f0c9e0)

Edit `src/styles/index.css` to customize colors using CSS custom properties.

## 📚 Blog Topics Included

1. **Self-Care Isn't Selfish** - Prioritizing yourself as a single mom
2. **Meal Prep Magic** - Feeding your family on a budget
3. **Co-Parenting with Grace** - Communication and boundaries
4. **Time Management** - Juggling work, kids, and life
5. **Financial Freedom** - Building security as a single income household
6. **Raising Resilient Kids** - Teaching strength through challenge

## ➕ Adding New Posts

Edit `src/data/posts.js` to add new blog posts:

```javascript
{
  id: 7,
  title: "Your Post Title",
  excerpt: "Brief excerpt for preview...",
  content: "Full post content with formatting...",
  author: "Author Name",
  date: "2026-04-12",
  image: "https://via.placeholder.com/800x400",
  categories: ["Category1", "Category2"],
  tags: ["tag1", "tag2", "tag3"],
  comments: [
    { id: 1, author: "Name", text: "Comment text", date: "2026-04-12" }
  ]
}
```

## 🔌 Technologies Used

- **React 19** - UI library
- **Vite 8** - Build tool and dev server
- **React Router 6** - Client-side routing
- **CSS Modules** - Scoped styling
- **JavaScript ES6+** - Modern JavaScript

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Deploy to Netlify:
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to Vercel:
1. Import your repository to Vercel
2. Vercel auto-detects Vite configuration
3. Deploy with one click

## 📖 Page Overview

### Home Page
- Beautiful hero section welcoming visitors
- Feature cards highlighting blog benefits
- Featured articles carousel
- Latest posts grid
- Clear calls-to-action

### Blog Page
- Search functionality to find relevant posts
- Filter by categories and tags
- Clean grid layout of all blog posts
- "No results" message with clear filtering options

### Individual Post Page
- Full article content with formatting
- Author, publish date, and categories
- Tags for easy discovery
- Comments section
- Related posts sidebar

### About Page
- Mission statement celebrating single motherhood
- Introduction to the team
- What we believe in
- Contact information

## 🔄 State Management

Uses React Context API for theme management. Easy to extend for additional global state (like user preferences, language, etc.).

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA compliant)
- Responsive images with descriptive alt text

## 💡 Future Enhancements

Potential features for future development:
- Comment submission form
- Newsletter signup
- Social sharing buttons
- Email notifications
- Author profiles
- Reading time estimates
- Table of contents for long posts
- Guest post submissions
- Community forum

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

For questions or issues, please open an issue in the repository.

## 📄 License

This project is open source and available for personal and commercial use.

---

**Built with 💗 for single moms everywhere. You've got this! 🌸✨**
