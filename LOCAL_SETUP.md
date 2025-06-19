# Running Your Portfolio Locally

## Quick Setup Steps

1. **Download the project files** from Replit (or clone from GitHub)

2. **Install Node.js** if you don't have it:
   - Go to https://nodejs.org
   - Download and install the latest LTS version (18.x or higher)

3. **Open terminal/command prompt** in the project folder

4. **Install dependencies:**
   ```bash
   npm install
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser** and go to:
   ```
   http://localhost:5000
   ```

## If You Get Errors

### "Port 5000 is already in use"
- Try: `http://localhost:3000` or `http://localhost:8080`
- Or close other applications using port 5000

### "npm not found"
- Make sure Node.js is properly installed
- Restart your terminal after installing Node.js

### "Module not found" errors
- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again

### TypeScript errors
- The website should still work even with TypeScript warnings
- Focus on getting it running first, then fix any errors

## Folder Structure After Download
```
your-portfolio/
├── client/          # Frontend code
├── server/          # Backend code
├── shared/          # Shared utilities
├── package.json     # Dependencies
└── README.md        # Documentation
```

## Making Changes
- Edit files in the `client/src/components/` folder
- Changes will automatically refresh in your browser
- Start with personalizing your name and information

That's it! Your portfolio should now be running locally.