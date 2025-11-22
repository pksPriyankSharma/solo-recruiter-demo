# Vercel Deployment Fix

## 🔧 Issue

Vercel was trying to deploy the `server/` folder instead of the `client/` folder containing the actual Vite app.

## ✅ Solution Applied

1. **Created `vercel.json`** - Configures Vercel to build from `client/` folder
2. **Removed unnecessary folders** - Deleted `server/` and `shared/` placeholder folders
3. **Moved constants** - Moved `const.ts` to `client/src/`

---

## 🚀 How to Apply the Fix

### Step 1: Update Your Local Repository

```bash
# Navigate to your project
cd C:\Projects\solo-recruiter-demo

# Make sure you're on dev branch
git checkout dev

# Copy the new vercel.json file to your project root
# (Download the updated ZIP or create vercel.json manually)
```

### Step 2: Create `vercel.json` (if not exists)

Create a file named `vercel.json` in the project root with this content:

```json
{
  "buildCommand": "cd client && npm install && npm run build",
  "outputDirectory": "client/dist",
  "installCommand": "cd client && npm install",
  "framework": null,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Step 3: Remove Unnecessary Folders

```bash
# Remove server and shared folders (they're just placeholders)
rm -rf server
rm -rf shared
rm -rf patches

# Or on Windows PowerShell:
Remove-Item -Recurse -Force server
Remove-Item -Recurse -Force shared  
Remove-Item -Recurse -Force patches
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Fix: Configure Vercel to build from client folder"
git push origin dev
```

### Step 5: Redeploy on Vercel

**Option A: Automatic (if connected to GitHub)**
- Vercel will automatically detect the push and redeploy
- Check the deployment logs

**Option B: Manual Redeploy**
1. Go to your Vercel project dashboard
2. Click "Deployments" tab
3. Click "..." menu on the latest deployment
4. Click "Redeploy"

---

## 🎯 Alternative: Configure in Vercel Dashboard

If you prefer not to use `vercel.json`, configure in Vercel dashboard:

1. Go to your project settings on Vercel
2. Navigate to "General" → "Build & Development Settings"
3. Set:
   - **Framework Preset:** Other
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

---

## ✅ Expected Result

After applying the fix:
- ✅ Vercel builds from `client/` folder
- ✅ Vite app compiles correctly
- ✅ Site displays landing page instead of server code
- ✅ All routes work with client-side routing

---

## 🔍 Verify Deployment

After redeployment, visit your Vercel URL:
- You should see the Solo Recruiter landing page
- Not the server/index.ts code

---

## 📞 Still Having Issues?

Check Vercel build logs:
1. Go to Vercel dashboard
2. Click on the failed deployment
3. Check "Build Logs" tab
4. Look for errors

Common issues:
- **Node version:** Ensure Node 18+ is used
- **Dependencies:** Run `npm install` in client folder
- **Build command:** Verify it runs successfully locally

---

**This fix ensures Vercel correctly identifies and builds your static Vite app!** 🚀

