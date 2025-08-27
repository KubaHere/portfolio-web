# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, featuring internationalization (English/Czech), dark/light theme toggle, and smooth animations.

## ✨ Features

- **🌍 Internationalization**: Full English and Czech language support
- **🌙 Dark/Light Theme**: Toggle between themes with localStorage persistence
- **📱 Responsive Design**: Mobile-first approach with breakpoints at 480px, 768px, 1024px, and 1280px
- **🎨 Vanilla CSS**: No CSS frameworks - custom design system with CSS variables
- **⚡ Performance**: Optimized with lazy loading and minimal dependencies
- **♿ Accessibility**: ARIA labels, keyboard navigation, and reduced motion support
- **🎭 Smooth Animations**: CSS transitions and intersection observer animations

## 🚀 Tech Stack

- **Frontend**: React 18 with JSX
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with CSS variables
- **Internationalization**: Custom i18n solution with JSON files
- **Animations**: CSS transitions + Intersection Observer API

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation with language/theme toggles
│   ├── Footer.jsx      # Footer with social links and controls
│   └── *.css           # Component-specific styles
├── sections/            # Main page sections
│   ├── Hero.jsx        # Hero section with CTA buttons
│   ├── About.jsx       # About section with bio and CV download
│   ├── Skills.jsx      # Skills grid with technology cards
│   ├── Projects.jsx    # Projects showcase with filtering
│   ├── Contact.jsx     # Contact form and information
│   └── *.css           # Section-specific styles
├── hooks/               # Custom React hooks
│   ├── useTheme.js     # Theme management with localStorage
│   ├── useI18n.js      # Internationalization hook
│   └── useIntersectionObserver.js # Scroll animations
├── i18n/                # Translation files
│   ├── en.json         # English translations
│   └── cs.json         # Czech translations
├── data/                # Static data
│   └── projects.js     # Portfolio projects data
├── variables.css        # CSS variables and theming
├── App.jsx             # Main app component
└── main.jsx            # App entry point
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Customization

### Personal Information

Replace the following placeholders throughout the codebase:

- `[YOUR_NAME]` - Your full name
- `[YOUR_TITLE]` - Your professional title (e.g., "Full-Stack Developer")
- `[YOUR_TITLE_CZ]` - Czech version of your title
- `[YOUR_EMAIL]` - Your email address
- `[CITY, COUNTRY]` - Your location
- `[YOUR_GITHUB_URL]` - Your GitHub profile URL
- `[YOUR_LINKEDIN_URL]` - Your LinkedIn profile URL

### Projects Data

Edit `src/data/projects.js` to add your own projects:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Name",
    shortDescription: "Project description...",
    techTags: ["Python", "JavaScript", "CSS"],
    image: "/projects/your-project.jpg",
    liveUrl: "https://your-project.com",
    repoUrl: "https://github.com/yourusername/your-project"
  }
  // Add more projects...
];
```

### Styling

Customize the design by modifying CSS variables in `src/variables.css`:

```css
:root {
  --primary: #7c5cff;        /* Primary brand color */
  --bg: #0e0f13;            /* Background color */
  --text: #e5e7eb;          /* Text color */
  /* ... more variables */
}
```

### Translations

Add new languages by:
1. Creating a new JSON file in `src/i18n/` (e.g., `de.json`)
2. Adding the language to the `translations` object in `src/hooks/useI18n.js`
3. Updating the language toggle logic

## 🌐 Internationalization

The website supports multiple languages through a custom i18n system:

- **English (en)**: Default language
- **Czech (cs)**: Secondary language
- **Language Toggle**: Available in header and footer
- **Local Storage**: Language preference is saved

### Adding New Languages

1. Create a new translation file in `src/i18n/`
2. Update the `useI18n` hook to include the new language
3. Add language toggle button logic

## 🎨 Theming

### Dark Mode (Default)
- Primary background: `#0e0f13`
- Elevated background: `#161821`
- Text: `#e5e7eb`
- Primary: `#7c5cff`

### Light Mode
- Primary background: `#ffffff`
- Elevated background: `#f7f7fb`
- Text: `#0f172a`
- Primary: `#5b3fff`

### Theme Persistence
- User preference is saved in localStorage
- Falls back to system preference if no saved choice
- Defaults to dark mode

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Color Contrast**: AA compliant in both themes
- **Semantic HTML**: Proper use of HTML5 elements

## 🚀 Performance Optimizations

- **Lazy Loading**: Images use `loading="lazy"`
- **CSS Variables**: Efficient theming system
- **Minimal Dependencies**: Only essential packages
- **Optimized Build**: Vite for fast development and builds
- **Intersection Observer**: Efficient scroll animations

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing support
- **Structured Data**: Semantic HTML markup
- **Performance**: Fast loading times
- **Mobile Friendly**: Responsive design

## 🐛 Troubleshooting

### Common Issues

1. **Theme not persisting**: Check localStorage permissions
2. **Language not switching**: Verify translation files exist
3. **Animations not working**: Check `prefers-reduced-motion` setting
4. **Build errors**: Ensure all dependencies are installed

### Development Tips

- Use browser dev tools to inspect CSS variables
- Check console for any JavaScript errors
- Test on different devices and screen sizes
- Verify accessibility with screen reader testing

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Note**: Remember to replace all placeholder text with your actual information before deploying!
