# 🚀 GramSetu — 100% Free Production Deployment Guide

This guide explains how to deploy the entire **GramSetu** full-stack civic platform to the internet for **₹0 ($0) without purchasing any custom domain or server**.

---

## 🗺️ Deployment Overview

| Component | Free Cloud Provider | Output URL Format | Cost |
|---|---|---|---|
| **Database** | [MongoDB Atlas](https://www.mongodb.com/atlas) (M0 Cluster) | `mongodb+srv://...` | **₹0 Free** |
| **Photo Evidence** | [Cloudinary](https://cloudinary.com) (Media CDN) | `https://res.cloudinary.com/...` | **₹0 Free** |
| **REST API Server** | [Render.com](https://render.com) (Web Service) | `https://gramsetu-api.onrender.com` | **₹0 Free** |
| **Citizen Portal** | [Vercel](https://vercel.com) or [Netlify](https://netlify.com) | `https://gramsetu-citizen.vercel.app` | **₹0 Free** |
| **Regional Admin** | [Vercel](https://vercel.com) or [Netlify](https://netlify.com) | `https://gramsetu-admin.vercel.app` | **₹0 Free** |

---

## 📦 Step 1: Set Up MongoDB Atlas (Cloud Database)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free account.
2. Click **Build a Database** and select the **M0 Free (Shared)** tier.
3. Choose the nearest cloud region (e.g., `aws / ap-south-1 Mumbai`).
4. **Create Database User**:
   - Username: `gramsetu_admin`
   - Password: Choose a strong password (e.g. `GramSetuPass2026!`) and note it down.
5. **Configure Network Access**:
   - In the left sidebar, click **Network Access**.
   - Click **Add IP Address** ➔ Select **Allow Access from Anywhere** (`0.0.0.0/0`).
   - Click **Confirm**.
6. **Get Connection String**:
   - In **Database Deployments**, click **Connect** ➔ **Drivers (Node.js)**.
   - Copy your connection string:
     ```text
     mongodb+srv://gramsetu_admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
     ```
   - Replace `<password>` with your database user password and append `/gramsetu` before the query params:
     ```text
     mongodb+srv://gramsetu_admin:GramSetuPass2026!@cluster0.xxxxx.mongodb.net/gramsetu?retryWrites=true&w=majority
     ```

---

## 📸 Step 2: Set Up Cloudinary (Cloud Photo Storage)

1. Sign up for a free account at [cloudinary.com](https://cloudinary.com).
2. Once logged in, look at your **Cloudinary Dashboard**.
3. Copy the following 3 values:
   - **Cloud Name** (e.g., `dsxyz123`)
   - **API Key** (e.g., `987654321987654`)
   - **API Secret** (e.g., `aBcDeFgHiJkLmNoPqRsTuVwXyZ`)

---

## ⚙️ Step 3: Deploy Backend API on Render.com

1. Create a free account at [render.com](https://render.com).
2. Push your project to GitHub, or use the Render CLI / Web Console:
   - Click **New +** ➔ **Web Service**.
   - Connect your GitHub repository containing `gramsetu`.
3. Configure the Web Service:
   - **Name**: `gramsetu-api`
   - **Region**: `Singapore (Southeast Asia)` or `Frankfurt`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: `Free`
4. Add **Environment Variables** in Render:
   Click **Advanced** ➔ **Add Environment Variable**:

   | Key | Value |
   |---|---|
   | `NODE_ENV` | `production` |
   | `PORT` | `5000` |
   | `MONGODB_URI` | *Your MongoDB Atlas connection string from Step 1* |
   | `JWT_SECRET` | `super_secure_production_secret_key_gramsetu_2026` |
   | `CLOUDINARY_CLOUD_NAME` | *Your Cloud Name from Step 2* |
   | `CLOUDINARY_API_KEY` | *Your API Key from Step 2* |
   | `CLOUDINARY_API_SECRET` | *Your API Secret from Step 2* |
   | `CITIZEN_URL` | `*` (or update after deploying frontend) |
   | `ADMIN_URL` | `*` (or update after deploying frontend) |
   | `OTP_MODE` | `development` *(recommended for demo/viva)* |

5. Click **Deploy Web Service**.
6. Once deployed, Render will provide your public backend URL, for example:
   ```text
   https://gramsetu-api.onrender.com
   ```
7. Verify health by opening in your browser:
   ```text
   https://gramsetu-api.onrender.com/api/health
   ```
   You should see:
   ```json
   {
     "status": "UP",
     "timestamp": "...",
     "database": "connected",
     "environment": "production"
   }
   ```

---

## 🌱 Step 4: Seed Cloud Database from Your Local Terminal

To seed states, districts, talukas, Gram Panchayats, demo citizens, and regional admins into your newly created MongoDB Atlas cluster, run this command from your local machine:

```powershell
cd C:\Users\LOQ\.gemini\antigravity\scratch\gramsetu\backend

# Replace with your actual MongoDB Atlas connection string:
$env:MONGODB_URI="mongodb+srv://gramsetu_admin:GramSetuPass2026!@cluster0.xxxxx.mongodb.net/gramsetu?retryWrites=true&w=majority"

npm run seed
```

You will see:
```text
🌱 Connecting to MongoDB database...
✅ Connected to MongoDB.
📍 Created States: Uttar Pradesh, Maharashtra.
🏛️ Created Gram Panchayats: Rampur GP, Khed Shivapur GP.
👥 Seeded Regional Administrators & Citizens.
📑 Seeded initial complaints across jurisdictions.
✨ SEED COMPLETED SUCCESSFULLY!
```

---

## 🔗 Step 5: Update Frontend API URLs

Before uploading the frontends to Vercel/Netlify, set your production backend URL:

### 1. In `citizen/js/config.js`:
```javascript
window.APP_CONFIG = {
  API_BASE_URL: 'https://gramsetu-api.onrender.com/api',
  PORTAL_NAME: 'GramSetu Citizen Portal'
};
```

### 2. In `admin/js/config.js`:
```javascript
window.APP_CONFIG = {
  API_BASE_URL: 'https://gramsetu-api.onrender.com/api',
  PORTAL_NAME: 'GramSetu Regional Admin Console'
};
```

---

## 🌐 Step 6: Deploy Citizen & Admin Portals on Vercel or Netlify

### Option A: Using Netlify Drop (Zero Setup — 30 Seconds!)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `citizen` folder into the browser window.
   - Netlify instantly creates: `https://gramsetu-citizen.netlify.app`.
3. Open a new tab, go to [app.netlify.com/drop](https://app.netlify.com/drop) again.
4. Drag and drop the `admin` folder into the browser window.
   - Netlify instantly creates: `https://gramsetu-admin.netlify.app`.

### Option B: Using Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New Project**.
3. Import your repository:
   - For Citizen Portal: Set **Root Directory** to `citizen` ➔ Click **Deploy**.
   - For Admin Portal: Add another project, set **Root Directory** to `admin` ➔ Click **Deploy**.

---

## 🧪 Step 7: Live Cross-Device Verification Test

Once deployed, perform the real-world cross-device demonstration:

1. **On your Smart Phone**:
   - Open your deployed Citizen URL: `https://gramsetu-citizen.netlify.app`
   - Log in as **Rajesh Kumar** (Mobile: `9876543210` / Password: `password123`).
   - Click **Submit Grievance**.
   - Take a **live photo using your phone's camera** (e.g., of a broken desk or road).
   - Enter title *"Broken street light near Primary School"* and submit.
   - Note the generated Ticket ID (e.g. `CMP-2026-000006`).

2. **On your Laptop / Computer**:
   - Open your deployed Admin URL: `https://gramsetu-admin.netlify.app`
   - Log in as **Ramesh Verma** (Mobile: `9999000001` / Password: `admin123`).
   - Notice the dashboard immediately displays the newly lodged complaint!
   - Click **Triage & Review**.
   - Inspect the **exact photograph taken on your phone**, served securely from Cloudinary CDN.
   - Change Status to **"In Progress"**.
   - Assign Officer: **"Shri Sunil Yadav (Lineman)"**.
   - Enter Remark: **"Replacement bulb and wiring kit issued. Repair scheduled for 3 PM."**
   - Click **Save & Transition Status**.

3. **Back on your Phone**:
   - Refresh the grievance details page on your phone.
   - The status is immediately updated to **In Progress** with the official administrative remark visible in the timeline audit!

---

## 🏆 Viva / Academic Presentation Checklist

- [x] **No `localStorage` as database**: Real MongoDB Atlas holding all records.
- [x] **No Base64 strings in database**: Direct binary buffer upload to Cloudinary CDN.
- [x] **Regional Isolation**: Hard-enforced at `{ region: req.user.region }` in queries.
- [x] **Tamper-Proof Routing**: Gram Panchayat derived server-side from citizen profile.
- [x] **Live Cross-Device Functionality**: Tested with mobile phone + desktop laptop.
- [x] **Zero Hosting Costs**: Completely functional on 100% free cloud tiers.
