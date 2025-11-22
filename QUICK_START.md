# Solo Recruiter Demo - Quick Start

## 📦 What's Included

This package contains the complete Solo Recruiter Demo website ready for deployment to Vercel.

---

## ⚡ Quick Setup (5 minutes)

### 1. Extract & Install

```bash
# Extract the ZIP file
# Navigate to the extracted folder
cd solo-recruiter-demo

# Install dependencies
npm install
```

### 2. Test Locally

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 3. Initialize Git

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit: Solo Recruiter Demo"

# Create branches
git branch -M main
git checkout -b dev
```

### 4. Create GitHub Repository

**Option 1: GitHub CLI**
```bash
gh auth login
gh repo create solo-recruiter-demo --public --source=. --remote=origin
git push -u origin main
git push -u origin dev
```

**Option 2: GitHub Web**
1. Go to https://github.com/new
2. Create repository named `solo-recruiter-demo`
3. Don't initialize with README
4. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/solo-recruiter-demo.git
git push -u origin main
git push -u origin dev
```

### 5. Deploy to Vercel

1. Visit https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Framework: **Vite** (auto-detected)
5. Click "Deploy"

**Done!** Your site will be live at `https://solo-recruiter-demo.vercel.app`

---

## 📚 Full Documentation

See **DEPLOYMENT_GUIDE.md** for:
- Detailed Git workflow
- Branch management (dev/main)
- Vercel configuration
- Troubleshooting
- Common commands

---

## 🎯 Development Workflow

```bash
# Work on dev branch
git checkout dev

# Make changes, test locally
npm run dev

# Commit and push
git add .
git commit -m "Your changes"
git push origin dev

# Merge to main when ready
git checkout main
git merge dev
git push origin main
```

---

## 📁 Project Structure

```
solo-recruiter-demo/
├── client/
│   ├── public/          # Static assets
│   └── src/
│       ├── pages/       # All page components
│       ├── components/  # Reusable components
│       └── App.tsx      # Routes
├── package.json
├── vite.config.ts
├── DEPLOYMENT_GUIDE.md  # Full deployment guide
└── QUICK_START.md       # This file
```

---

## ✨ Features Included

- ✅ Landing page with hero and features
- ✅ Dashboard with metrics
- ✅ Jobs management
- ✅ Candidates management
- ✅ Clients management
- ✅ HR System Integrations page
- ✅ Placements tracking
- ✅ Settings page
- ✅ Pricing page
- ✅ Fully responsive design

---

## 🆘 Need Help?

- **Full Guide:** See DEPLOYMENT_GUIDE.md
- **Vercel Docs:** https://vercel.com/docs
- **Git Docs:** https://git-scm.com/doc

---

**Happy Deploying! 🚀**

