# Solo Recruiter Demo - Deployment Guide

## 📋 Overview

This guide will help you deploy the Solo Recruiter Demo to Vercel with a proper Git workflow using `dev` and `main` branches.

---

## 🚀 Quick Start Steps

### 1. Extract and Set Up Local Project

```bash
# Extract the ZIP file to your desired location
# Example: C:\Projects\solo-recruiter-demo

cd C:\Projects\solo-recruiter-demo

# Install dependencies
npm install
```

### 2. Initialize Git Repository with Branches

```bash
# Initialize Git repository
git init

# Create .gitignore if not exists (should already be there)
# Add initial commit
git add .
git commit -m "Initial commit: Solo Recruiter Demo"

# Create main branch (if not already on main)
git branch -M main

# Create dev branch
git checkout -b dev
```

### 3. Create Remote Repository on GitHub

**Option A: Using GitHub CLI**
```bash
# Login to GitHub (if not already logged in)
gh auth login

# Create remote repository
gh repo create solo-recruiter-demo --public --source=. --remote=origin

# Push both branches
git push -u origin main
git push -u origin dev
```

**Option B: Using GitHub Web Interface**

1. Go to https://github.com/new
2. Repository name: `solo-recruiter-demo`
3. Description: "Solo Recruiter - Professional Demo Website"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

Then connect your local repo:
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/solo-recruiter-demo.git

# Push both branches
git push -u origin main
git push -u origin dev
```

---

## 🔄 Development Workflow

### Working on Dev Branch

```bash
# Always start from dev branch
git checkout dev

# Make your changes
# ... edit files ...

# Test locally
npm run dev
# Open http://localhost:3000 to verify changes

# Commit changes
git add .
git commit -m "Description of changes"

# Push to remote dev branch
git push origin dev
```

### Merging Dev to Main

```bash
# Switch to main branch
git checkout main

# Pull latest changes
git pull origin main

# Merge dev into main
git merge dev

# Push to remote main branch
git push origin main
```

---

## 🌐 Deploy to Vercel

### Method 1: Import from GitHub (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Click "Add New..." → "Project"

2. **Import Git Repository**
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find and select `solo-recruiter-demo`
   - Click "Import"

3. **Configure Project**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

4. **Environment Variables**
   - No environment variables needed for this static demo
   - Click "Deploy"

5. **Set Up Branch Deployments**
   - After initial deployment, go to Project Settings
   - Navigate to "Git" section
   - **Production Branch:** `main`
   - **Enable automatic deployments for:** `dev` branch
   - This creates preview deployments for dev branch

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from dev branch (preview)
git checkout dev
vercel

# Deploy to production (main branch)
git checkout main
vercel --prod
```

---

## 🌿 Branch Strategy

### Main Branch (`main`)
- **Production branch**
- Deployed to: `https://solo-recruiter-demo.vercel.app`
- Only merge tested and approved changes from `dev`
- Protected branch (recommended)

### Dev Branch (`dev`)
- **Development branch**
- Deployed to: `https://solo-recruiter-demo-git-dev-yourname.vercel.app`
- All development work happens here
- Test thoroughly before merging to `main`

---

## 📝 Common Git Commands

### Check Current Branch
```bash
git branch
```

### Switch Branches
```bash
git checkout dev
git checkout main
```

### View Commit History
```bash
git log --oneline
```

### Undo Last Commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Pull Latest Changes
```bash
git pull origin dev
git pull origin main
```

---

## 🔧 Troubleshooting

### Issue: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/solo-recruiter-demo.git
```

### Issue: Merge Conflicts
```bash
# View conflicts
git status

# Edit conflicting files manually
# Then mark as resolved
git add .
git commit -m "Resolved merge conflicts"
```

### Issue: Vercel Build Fails
- Check build logs in Vercel dashboard
- Ensure `package.json` has correct build script
- Verify Node.js version compatibility (use Node 18+)

---

## 📦 Project Structure

```
solo-recruiter-demo/
├── client/               # Frontend source code
│   ├── public/          # Static assets
│   └── src/             # React components and pages
├── node_modules/        # Dependencies (not in Git)
├── dist/                # Build output (not in Git)
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── .gitignore           # Git ignore rules
└── README.md            # Project documentation
```

---

## 🎯 Next Steps After Deployment

1. **Custom Domain** (Optional)
   - Go to Vercel Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Analytics** (Optional)
   - Enable Vercel Analytics in Project Settings
   - Monitor page views and performance

3. **Continuous Updates**
   - Make changes on `dev` branch
   - Test on dev deployment URL
   - Merge to `main` when ready
   - Production automatically updates

---

## 📞 Support

For issues or questions:
- Vercel Documentation: https://vercel.com/docs
- GitHub Documentation: https://docs.github.com
- Git Documentation: https://git-scm.com/doc

---

**Happy Deploying! 🚀**
