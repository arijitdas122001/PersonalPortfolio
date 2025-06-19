# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Fast loading with Vite build system
- 🎭 Interactive contact form with validation
- 🌙 Professional color scheme with hover effects
- 📧 Ready-to-customize sections for personal branding

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI (shadcn/ui)

## Local Development Setup

### Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation & Running

1. **Clone or download the project**
2. **Navigate to the project directory**
3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:5000
   ```

The website will automatically reload when you make changes to the code.

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express server
├── shared/                 # Shared code between client/server
└── package.json           # Dependencies and scripts
```

## Customization Guide

### 1. Personal Information
Edit these files to add your information:
- `client/index.html` - Page title and meta tags
- `client/src/components/navigation.tsx` - Your name in header
- `client/src/components/hero-section.tsx` - Main title and tagline
- `client/src/components/footer.tsx` - Footer name and motto

### 2. About Section
Update `client/src/components/about-section.tsx`:
- Replace the paragraphs with your background story
- Update location, interests, and education details
- Modify experience statistics

### 3. Skills Section
Edit `client/src/components/skills-section.tsx`:
- Update the `skillCategories` array with your skills
- Change proficiency levels (Expert, Advanced, Intermediate)
- Add or remove skill categories

### 4. Projects Section
Customize `client/src/components/projects-section.tsx`:
- Replace sample projects with your actual projects
- Update project descriptions and technologies
- Add links to your GitHub repos and live demos
- Replace placeholder images with project screenshots

### 5. Contact Information
Update `client/src/components/contact-section.tsx`:
- Replace email, phone, and location with your details
- Update social media links

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Deployment Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Replit**: Deploy directly from Replit

## Troubleshooting

### Common Issues:

1. **Port already in use**: Change the port in `server/index.ts`
2. **Dependencies not installing**: Delete `node_modules` and run `npm install` again
3. **Build errors**: Make sure all TypeScript errors are resolved

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version is 18 or higher

## License

MIT License - feel free to use this template for your own portfolio!