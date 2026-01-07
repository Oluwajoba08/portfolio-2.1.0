# Andlo - Designer & Developer Portfolio

A modern, pixel-perfect portfolio website showcasing frontend and fullstack development skills. Built with React, Tailwind CSS, Framer Motion, and Vite.

## 🎨 Features

### Design & UX
- **Scroll-based Text Color Transitions**: Dynamic text color changes as you scroll through the hero section
- **Smooth Animations**: Framer Motion animations for all components with stagger effects
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, minimalist design with accent colors and gradient effects
- **Pixel-Perfect Implementation**: Every detail matches the design specification

### Pages & Sections

#### 1. **Home Page**
- Hero section with scroll effect and dynamic text color
- Stats section (10+ Projects, 2k+ Community, 140+ Connections)
- Testimonials carousel with client feedback
- Services showcase
- Projects display
- Call-to-action section
- Beautiful gradient backgrounds and micro-interactions

#### 2. **Services Page**
- Frontend Development service with detailed features
- Fullstack Development service with detailed features
- Technology stack showcase (React, Next.js, TypeScript, Node.js, etc.)
- Interactive service cards with hover effects

#### 3. **Projects Page**
- Featured projects with images and descriptions
- Project technologies used
- Live project links
- **Featured Projects:**
  - **Invofi**: AI-powered invoicing and payments platform (Live: invofi.com.ng)
  - **My Portfolio Website**: Modern responsive portfolio

#### 4. **Contact Page**
- Beautiful contact form with validation
- Contact method alternatives (email, LinkedIn, Twitter)
- Success message on form submission
- Smooth animations and transitions

#### 5. **404 Page**
- Custom error page with redirect to home
- Animated illustrations and messaging

### Technical Features
- **Responsive Navigation**: Mobile hamburger menu with smooth animations
- **Smooth Scrolling**: Entire page has smooth scroll behavior
- **Performance**: Optimized for fast loading with Vite
- **Accessibility**: Semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags and proper structure
- **Modern Stack**: React 18, TypeScript support, Tailwind CSS 3

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 4
- **Styling**: Tailwind CSS 3
- **Animation Library**: Framer Motion
- **Routing**: React Router 7
- **Language**: JavaScript/JSX

## 📦 Dependencies

```json
{
  "dependencies": {
    "motion": "^12.18.1",
    "react-dom": "^18.2.0",
    "react-router": "^7.6.2",
    "react-router-dom": "^7.6.2"
  }
}
```

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd new-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Local: http://localhost:5173/
```

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Home page with hero and sections
│   ├── Services.jsx          # Services showcase
│   ├── Projects.jsx          # Projects display
│   ├── Contact.jsx           # Contact form
│   ├── Footer.jsx            # Footer with social links
│   ├── Navbar.jsx            # Navigation bar
│   ├── PageRedirect.jsx      # 404 error page
│   ├── ui/
│   │   ├── Button.jsx        # Reusable button component
│   │   └── Badge.jsx         # Badge component for tags
│   └── [Other components]
├── App.jsx                   # Main app wrapper
├── main.jsx                  # Entry point
├── index.css                 # Global styles with Tailwind
└── assets/                   # Static assets
```

## ✨ Key Features in Detail

### 1. Scroll-Based Text Color Transition
The hero section features dynamic text color that changes as you scroll:
- Text remains black when viewing the hero section
- Gradually transitions to gray as you scroll past the section
- Smooth CSS transitions for polished user experience

### 2. Interactive Components
- Service cards with hover lift effect and background accents
- Project showcases with image hover effects
- Testimonial cards with smooth animations
- Social media links with scale animations

### 3. Navigation
- Sticky header with backdrop blur effect
- Mobile-responsive hamburger menu
- Active route highlighting
- Smooth transitions on scroll

### 4. Animations & Transitions
- Page fade-in animations on mount
- Staggered animation for list items
- Hover states with scale and shadow effects
- Smooth page transitions
- Animated scroll indicators

## 🎯 Services Offered

### Frontend Development
- Responsive design with modern CSS
- React component development
- Performance optimization
- Animation & transitions
- Cross-browser testing
- SEO optimization

### Fullstack Development
- API development with Node.js
- Database design (MongoDB, PostgreSQL)
- Authentication systems
- Real-time features
- Deployment & DevOps
- System architecture

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl, 2xl)

## 🎨 Color Scheme

- **Primary Accent**: `#b4ff81` (Lime Green)
- **Dark Blue**: `#1d255a`
- **Background**: White with gray accents
- **Gradients**: Lime to green gradients for CTAs

## 🔧 Customization

### Update Personal Information
Edit the following files:
- `src/components/Home.jsx` - Hero section content
- `src/components/Projects.jsx` - Project details and links
- `src/components/Contact.jsx` - Contact information
- `index.html` - Meta tags and title

### Change Colors
Edit `tailwind.config.js` to update the color scheme:
```javascript
colors: {
  "lime-accent": "#b4ff81",
  "dark-blue": "#1d255a",
}
```

### Update Services
Edit `src/components/Services.jsx` to modify services list.

## 🚀 Performance Optimizations

- Code splitting with React Router
- Image lazy loading
- CSS optimization with Tailwind
- JavaScript minification in production
- Efficient re-renders with React.memo

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This project is open source and available for personal and commercial use.

## 📞 Contact

- Email: andlo@example.com
- LinkedIn: [Your LinkedIn]
- Twitter: [Your Twitter]
- GitHub: [Your GitHub]

---

**Built with ❤️ using React, Tailwind CSS & Framer Motion**
