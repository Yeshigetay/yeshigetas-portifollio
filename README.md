# React Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, interactive components, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: Hover effects, modals, and dynamic content
- **Multiple Pages**: Home, About, Work, Services, and Contact pages
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Interactive project gallery with filtering
- **Skills Visualization**: Animated skill bars and progress indicators
- **Loading Screen**: Elegant loading animation
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **HTML5** - Semantic HTML structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js           # Home page component
│   ├── About.js          # About page component
│   ├── Work.js           # Work/Projects page component
│   ├── Services.js       # Services page component
│   ├── Contact.js        # Contact page component
│   ├── Navbar.css        # Navigation styles
│   ├── Home.css          # Home page styles
│   ├── About.css         # About page styles
│   ├── Work.css          # Work page styles
│   ├── Services.css      # Services page styles
│   └── Contact.css       # Contact page styles
├── App.js                # Main App component
├── App.css               # App-level styles
├── index.js              # Entry point
└── index.css             # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## 🎨 Customization

### Personal Information

1. **Update Profile Information** (`src/components/Home.js`):
   - Replace placeholder image with your photo
   - Update name and title
   - Modify the typing animation text
   - Update social media links

2. **Update About Section** (`src/components/About.js`):
   - Modify personal information
   - Update skills and their levels
   - Add your experience and education
   - Update statistics

3. **Update Projects** (`src/components/Work.js`):
   - Add your own projects
   - Update project images, descriptions, and links
   - Modify project categories

4. **Update Services** (`src/components/Services.js`):
   - Customize services offered
   - Update pricing information
   - Modify testimonials

5. **Update Contact Information** (`src/components/Contact.js`):
   - Update email, phone, and location
   - Modify social media links
   - Update Google Maps embed

### Styling

- **Colors**: Update the color scheme in CSS custom properties
- **Fonts**: Change fonts in `src/index.css`
- **Animations**: Modify animation parameters in component files
- **Layout**: Adjust grid and flexbox properties for different layouts

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌟 Key Features Explained

### 1. Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- Active page highlighting
- Smooth hover animations

### 2. Home Page
- Animated typing effect for roles
- Interactive profile image
- Social media links with hover effects
- Call-to-action buttons

### 3. About Page
- Tabbed interface for different sections
- Animated skill bars
- Timeline for experience and education
- Personal information grid

### 4. Work Page
- Project filtering by category
- Interactive project cards
- Modal for detailed project view
- Featured project highlighting

### 5. Services Page
- Service cards with pricing
- Work process visualization
- Client testimonials
- Call-to-action section

### 6. Contact Page
- Contact form with validation
- Contact information display
- Social media links
- Google Maps integration

## 🔧 Advanced Features

### Animations
- Page transitions using Framer Motion
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading screen animation

### Performance
- Lazy loading for images
- Optimized bundle size
- Efficient re-renders
- Smooth scrolling

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast design

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help with customization, please open an issue in the repository.

---

**Happy Coding! 🎉** 