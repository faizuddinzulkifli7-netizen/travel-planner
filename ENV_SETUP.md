# Environment Variables Setup Guide

## Current Configuration

### Ports
- **Frontend**: Port 3000
- **Admin Panel**: Port 3001
- **Backend API**: Port 8000

## Environment Files

### Frontend (`.env.local`)

**Development:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

**Production (with nginx):**
```env
NEXT_PUBLIC_API_URL=/api/v1
```

### Admin Panel (`.env.local`)

**Development:**
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

**Production (with nginx):**
```env
NEXT_PUBLIC_API_URL=/api/v1
```

### Backend (`.env`)

**Development:**
```env
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

**Production:**
```env
CORS_ORIGINS=https://your-domain.com,https://your-domain.com/admin
```

## How It Works

### Development Mode
- Frontend and Admin Panel use full URLs: `http://localhost:8000/api/v1`
- Backend CORS allows: `http://localhost:3000` and `http://localhost:3001`
- All services run on their respective ports

### Production Mode (with nginx)
- Frontend and Admin Panel use relative paths: `/api/v1`
- Nginx routes `/api` → Backend (port 8000)
- Requests to `/api/v1/blogs` are proxied to `http://127.0.0.1:8000/api/v1/blogs`
- Backend CORS should include your production domain

## Setup Instructions

1. **Copy example files:**
```bash
# Frontend
cp frontend/.env.example frontend/.env.local

# Admin Panel
cp admin-pannel/.env.example admin-pannel/.env.local

# Backend
cp backend/.env.example backend/.env
```

2. **For Development:** Use the default values (localhost URLs)

3. **For Production:** 
   - Update `NEXT_PUBLIC_API_URL` to `/api/v1` in frontend and admin panel
   - Update `CORS_ORIGINS` in backend with your production domain

## Current .env.local Files

Your current `.env.local` files are set for development:
- `frontend/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1`
- `admin-pannel/.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1`
- `backend/.env`: `CORS_ORIGINS=http://localhost:3000,http://localhost:3001`

These are correct for development! For production, update them as shown above.

