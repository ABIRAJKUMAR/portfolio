# ABIRAJ K — Full-Stack Developer Portfolio

A modern, production-ready, full-stack personal portfolio website engineered for **Abiraj K**, Computer Science student at **Rathinam Technical Campus** and aspiring Software Engineer specializing in **Backend Systems, Cloud Computing, and AI-Powered Products**.

---

## 🌟 Overview & Highlights

- **Aesthetic**: Minimal, dark-mode-first developer aesthetic with subtle cyan/emerald/indigo ambient lighting, glassmorphism, and responsive typography (Inter, JetBrains Mono, Outfit).
- **Interactive Developer Element**: Terminal and code inspector component featuring syntax-highlighted tabs (`engineer.ts`, `stack.config.json`, `system_metrics.sh`) and live execution previews.
- **Full-Stack REST Architecture**: Real working contact form with frontend validation, Express backend input sanitization, and Supabase PostgreSQL persistence with Row-Level Security (RLS).
- **Performance & SEO**: Semantic HTML5 tags, OpenGraph and Twitter card metadata, and zero horizontal overflow across Desktop, Laptop, Tablet, and Mobile devices.
- **Deployment Ready**: Preconfigured for instant deployment on **Vercel** (Frontend) and **Render** (Backend).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 18 with Vite (Ultra-fast HMR)
- **Styling**: Tailwind CSS (Custom dark theme tokens, glassmorphic utilities)
- **Icons**: Lucide React
- **Animations & Effects**: CSS keyframe animations, Canvas Confetti
- **Language**: JavaScript (ES6+ / JSX)

### Backend
- **Runtime**: Node.js (v18+)
- **Framework**: Express.js
- **Security & Utilities**: Helmet, CORS (origin whitelist), Morgan, Dotenv
- **API Pattern**: RESTful JSON endpoints with server-side validation & HTML sanitization

### Database
- **Provider**: Supabase
- **Engine**: PostgreSQL
- **Security**: Row-Level Security (RLS) policies, indexing on `created_at` and `email`

---

## 📁 Project Structure

```text
personal-portfolio/
│
├── client/                     # Frontend (React + Vite + Tailwind)
│   ├── public/                 # Static assets & favicon
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   │   ├── BackgroundMesh.jsx
│   │   │   ├── DeveloperTerminal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectModal.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   └── Toast.jsx
│   │   ├── data/               # Centralized portfolio data & copy
│   │   │   └── portfolioData.js
│   │   ├── sections/           # Modular page sections
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── EducationSection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProjectsSection.jsx
│   │   │   └── SkillsSection.jsx
│   │   ├── services/           # API integration (Fetch client)
│   │   │   └── api.js
│   │   ├── App.jsx             # Main application layout & scroll spy
│   │   ├── index.css           # Custom styles, scrollbar & utilities
│   │   └── main.jsx            # React root mount
│   ├── .env.example            # Frontend environment variable template
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vercel.json             # SPA routing rewrite rule for Vercel
│   └── vite.config.js
│
├── server/                     # Backend REST API (Node.js + Express)
│   ├── config/
│   │   └── env.js              # Environment variable loader & checks
│   ├── controllers/
│   │   └── contactController.js# Contact form request handler
│   ├── middleware/
│   │   ├── errorHandler.js     # Centralized error & 404 handlers
│   │   └── validator.js        # Input validation & XSS sanitization
│   ├── routes/
│   │   ├── contactRoutes.js    # POST /api/contact route
│   │   └── healthRoutes.js     # GET /api/health route
│   ├── services/
│   │   ├── contactService.js   # DB persistence & local fallback store
│   │   └── supabaseClient.js   # Supabase client singleton
│   ├── .env.example            # Backend environment variable template
│   ├── package.json
│   └── server.js               # Express server entry point
│
├── database/                   # Database SQL Scripts
│   └── schema.sql              # Supabase PostgreSQL table & RLS policies
│
├── .gitignore
├── package.json                # Root package for workspace scripts
└── README.md                   # Documentation
```

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Install Dependencies

You can install dependencies for both `client` and `server` in one command from the project root:

```bash
# In the project root:
cd client && npm install
cd ../server && npm install
```

---

### 3. Environment Configuration

#### Backend (`server/.env`):
Copy `server/.env.example` to `server/.env`:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Optional: Add Supabase credentials when ready
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

> **Note**: If `SUPABASE_URL` is omitted during local development, the backend automatically switches to **Local Mock Mode**, logging incoming messages to the console so you can test without setting up the database immediately.

#### Frontend (`client/.env`):
Copy `client/.env.example` to `client/.env`:

```env
VITE_API_URL=http://localhost:5000
```

---

### 4. Database Setup (Supabase PostgreSQL)

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to the **SQL Editor** in your Supabase dashboard.
3. Open `database/schema.sql` from this repository, copy the contents, and run the query:

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable service role full access" 
ON contact_messages 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);
```

4. Go to **Project Settings** → **API** in Supabase:
   - Copy **Project URL** into `SUPABASE_URL`.
   - Copy **service_role key** (Secret) into `SUPABASE_SERVICE_ROLE_KEY`.

---

### 5. Running the Application Locally

#### Run Backend Server:
```bash
cd server
npm run dev
# Server runs on http://localhost:5000
# Health check: http://localhost:5000/api/health
```

#### Run Frontend Client:
```bash
cd client
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📡 REST API Documentation

### 1. Health Check
- **Endpoint**: `GET /api/health`
- **Response**:
```json
{
  "status": "ok",
  "service": "Abiraj K Portfolio REST API",
  "timestamp": "2026-10-07T04:15:00.000Z",
  "uptime": "42s",
  "database": {
    "supabase_configured": true,
    "target_table": "contact_messages"
  },
  "version": "1.0.0"
}
```

### 2. Submit Contact Inquiry
- **Endpoint**: `POST /api/contact`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
```json
{
  "name": "Alex Johnson",
  "email": "alex@example.com",
  "subject": "Software Engineer Opportunity",
  "message": "Hi Abiraj, I would like to discuss an opportunity on our team."
}
```
- **Success Response (HTTP 201)**:
```json
{
  "success": true,
  "message": "Thank you for reaching out! Your message has been sent successfully.",
  "data": {
    "id": "7f8b9e60-928d-4e94-8149-166f381c81ef",
    "name": "Alex Johnson",
    "created_at": "2026-10-07T04:15:20.123Z",
    "storage_mode": "supabase_postgres"
  }
}
```
- **Validation Error (HTTP 400)**:
```json
{
  "success": false,
  "message": "Validation failed. Please check the provided fields.",
  "errors": {
    "email": "Please provide a valid email address.",
    "message": "Message must be at least 10 characters long."
  }
}
```

---

## 🚢 Deployment Guide

### Deploy Frontend to Vercel
1. Push this repository to GitHub.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository and select the **`client`** folder as the **Root Directory**.
4. In **Environment Variables**, add:
   - `VITE_API_URL`: `https://your-render-backend-url.onrender.com`
5. Click **Deploy**. (The included `vercel.json` ensures SPA routes redirect to `index.html`).

### Deploy Backend to Render
1. Log into [render.com](https://render.com) and select **"New Web Service"**.
2. Connect your GitHub repository.
3. Configure settings:
   - **Root Directory**: `server`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. Add **Environment Variables**:
   - `NODE_ENV`: `production`
   - `PORT`: `10000`
   - `CLIENT_URL`: `https://your-vercel-domain.vercel.app`
   - `SUPABASE_URL`: `https://your-project.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY`: `your-supabase-service-role-key`
5. Click **Create Web Service**.

---

## 🔒 Security Best Practices
- **Never expose Supabase Service Role Key** to the frontend client. The frontend only talks to the Express REST API.
- **Helmet**: Adds secure HTTP response headers.
- **CORS Whitelist**: Restricts API calls to authorized clients.
- **Sanitization**: Server-side stripping of HTML/script injection vectors before database storage.

---

## 👤 Author

**ABIRAJ K**
- Institution: Rathinam Technical Campus
- Specialization: Backend Systems • Cloud Computing • AI Engineering
- GitHub: [github.com/Abiraj-k](https://github.com/Abiraj-k)
- LinkedIn: [linkedin.com/in/abiraj-k](https://linkedin.com/in/abiraj-k)
