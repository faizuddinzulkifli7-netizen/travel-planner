# Hotel Recommendation Backend API

FastAPI backend for the Hotel Recommendation project.

## Features

- **RESTful API** for blog post management
- **SQLite Database** (easily upgradeable to PostgreSQL)
- **Pydantic Validation** for request/response models
- **CORS Support** for frontend integration
- **Auto-generated API Documentation** (Swagger UI)
- **Type Safety** with Python type hints

## Getting Started

### Prerequisites

- Python 3.11 or higher
- pip or poetry

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Run the development server:
```bash
uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## API Endpoints

### Blog Posts

- `GET /api/v1/blogs` - Get all blog posts (with pagination)
- `GET /api/v1/blogs/{id}` - Get a single blog post
- `POST /api/v1/blogs` - Create a new blog post
- `PUT /api/v1/blogs/{id}` - Update a blog post
- `DELETE /api/v1/blogs/{id}` - Delete a blog post

### Query Parameters

- `skip`: Number of posts to skip (default: 0)
- `limit`: Number of posts to return (default: 100, max: 100)
- `category`: Filter by category (optional)

## Project Structure

```
backend/
├── app/
│   ├── main.py              # FastAPI application
│   ├── config.py            # Configuration
│   ├── database.py          # Database setup
│   ├── models/              # SQLAlchemy models
│   ├── schemas/             # Pydantic schemas
│   ├── crud/                # CRUD operations
│   └── api/                 # API routes
├── tests/                   # Test files
└── requirements.txt         # Dependencies
```

## Database

The application uses SQLite by default. The database file is created automatically in the `data/` directory.

To use PostgreSQL instead, update `DATABASE_URL` in `.env`:
```
DATABASE_URL=postgresql://user:password@localhost/dbname
```

## Development

Run with auto-reload:
```bash
uvicorn app.main:app --reload
```

Run tests:
```bash
pytest
```

## Integration

The frontend and admin panel can connect to this API by updating their API endpoints to:
- Development: `http://localhost:8000/api/v1`
- Production: Update CORS_ORIGINS in `.env` with your production URLs

## Notes

- The API uses `image_url` (snake_case) in the database, but can accept both `imageUrl` and `image_url` in requests
- All dates should be in ISO format: `YYYY-MM-DD`
- The API automatically creates the database and tables on first run

