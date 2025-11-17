# Blog Admin Panel

This is a Next.js admin panel for managing blog posts for the frontend project.

## Features

- **View All Blog Posts**: Browse all blog posts in a table view
- **Create New Posts**: Add new blog posts with a comprehensive form
- **Edit Posts**: Update existing blog posts
- **Delete Posts**: Remove blog posts with confirmation
- **RESTful API**: Full CRUD API endpoints for blog management
- **Data Persistence**: Blog posts are stored in a JSON file

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the admin panel.

## Project Structure

```
admin-pannel/
├── app/
│   ├── api/
│   │   └── blogs/
│   │       ├── route.ts          # GET, POST endpoints
│   │       └── [id]/
│   │           └── route.ts      # GET, PUT, DELETE endpoints
│   ├── blogs/
│   │   ├── page.tsx              # Blog list page
│   │   ├── new/
│   │   │   └── page.tsx          # Create new blog post
│   │   ├── [id]/
│   │   │   └── edit/
│   │   │       └── page.tsx      # Edit blog post
│   │   └── components/
│   │       └── BlogPostForm.tsx  # Reusable form component
│   ├── components/
│   │   └── Navbar.tsx            # Navigation component
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Dashboard/home page
├── lib/
│   ├── types.ts                  # TypeScript interfaces
│   └── data.ts                   # Data management functions
└── data/
    └── blog-posts.json           # Blog posts storage (auto-created)
```

## API Endpoints

- `GET /api/blogs` - Get all blog posts
- `POST /api/blogs` - Create a new blog post
- `GET /api/blogs/[id]` - Get a specific blog post
- `PUT /api/blogs/[id]` - Update a blog post
- `DELETE /api/blogs/[id]` - Delete a blog post

## Blog Post Schema

```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;        // ISO date string (YYYY-MM-DD)
  category: string;
  imageUrl: string;
}
```

## Data Storage

Blog posts are stored in `data/blog-posts.json`. This file is automatically created when the application first runs. The file is excluded from git by default.

## Usage

1. **View Posts**: Navigate to `/blogs` to see all blog posts
2. **Create Post**: Click "New Post" button or navigate to `/blogs/new`
3. **Edit Post**: Click "Edit" on any post in the list
4. **Delete Post**: Click "Delete" on any post (confirmation required)

## Integration with Frontend

The frontend project can consume the blog posts by calling the API endpoints. The blog post structure matches the `BlogPost` interface used in the frontend project.
