# Nginx Configuration Guide

## Port Configuration

- **Frontend**: Port 3000
- **Admin Panel**: Port 3001  
- **Backend API**: Port 8000

## Nginx Configuration Files

Two configuration files are provided:

1. **`nginx-simple.conf`** (Recommended) - Single server with location-based routing
2. **`nginx.conf`** - Multiple servers with subdomain-based routing

## Setup Instructions

### Option 1: Simple Configuration (Recommended)

1. Copy the simple nginx config:
```bash
sudo cp nginx-simple.conf /etc/nginx/sites-available/hotel-recommendation
```

2. Edit the file and update `server_name`:
```bash
sudo nano /etc/nginx/sites-available/hotel-recommendation
```
Replace `your-domain.com` with your actual domain or keep `_` for any domain.

3. Create symbolic link:
```bash
sudo ln -s /etc/nginx/sites-available/hotel-recommendation /etc/nginx/sites-enabled/
```

4. Remove default site (optional):
```bash
sudo rm /etc/nginx/sites-enabled/default
```

5. Test configuration:
```bash
sudo nginx -t
```

6. Reload nginx:
```bash
sudo systemctl reload nginx
```

## Routing (Simple Configuration)

- `/` → Frontend (port 3000)
- `/admin` → Admin Panel (port 3001)
- `/api` → Backend API (port 8000)
- `/docs` → Backend API Documentation (Swagger UI)
- `/redoc` → Backend API Documentation (ReDoc)
- `/health` → Backend Health Check

## Important Notes

1. **Update server_name**: Replace `your-domain.com` with your actual domain name, or use `_` for any domain.

2. **Admin Panel Access**: 
   - Via nginx: `http://your-domain.com/admin`
   - Direct access: `http://localhost:3001` (for development)

3. **CORS**: The backend already handles CORS for localhost:3000 and localhost:3001. For production, update the `.env` file in the backend with your production domain.

4. **SSL/HTTPS**: For production, add SSL configuration:
```bash
sudo certbot --nginx -d your-domain.com
```

## Development: Direct Port Access

For development, you can access services directly without nginx:
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001
- Backend API: http://localhost:8000

## Running All Services

### Terminal 1 - Backend:
```bash
cd backend
source venv/bin/activate
python3 run.py
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

### Terminal 3 - Admin Panel:
```bash
cd admin-pannel
npm run dev
```

## Production Deployment

1. Build the frontend and admin panel:
```bash
# Frontend
cd frontend
npm run build
npm start

# Admin Panel
cd admin-pannel
npm run build
npm start
```

2. Run backend (use a process manager like systemd or supervisor):
```bash
cd backend
source venv/bin/activate
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

3. Configure nginx as shown above.

4. Update backend CORS in `.env`:
```
CORS_ORIGINS=https://your-domain.com,https://your-domain.com/admin
```

