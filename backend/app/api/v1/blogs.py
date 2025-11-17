from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional
from app.api.deps import get_db
from app import crud
from app.schemas.blog import (
    BlogPostCreate,
    BlogPostUpdate,
    BlogPostResponse,
    BlogPostListResponse,
)

router = APIRouter()


@router.get("", response_model=BlogPostListResponse)
def get_blog_posts(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    category: Optional[str] = None,
    db: Session = Depends(get_db),
):
    """Get all blog posts with pagination and optional category filter"""
    posts = crud.blog.get_blog_posts(db, skip=skip, limit=limit, category=category)
    total = crud.blog.count_blog_posts(db, category=category)
    
    return BlogPostListResponse(
        posts=posts,
        total=total,
        page=skip // limit + 1 if limit > 0 else 1,
        page_size=limit,
    )


@router.get("/list", response_model=list[BlogPostResponse])
def get_blog_posts_list(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=100),
    category: Optional[str] = None,
    db: Session = Depends(get_db),
):
    """Get all blog posts as a simple list (for compatibility)"""
    posts = crud.blog.get_blog_posts(db, skip=skip, limit=limit, category=category)
    return posts


@router.get("/{post_id}", response_model=BlogPostResponse)
def get_blog_post(post_id: str, db: Session = Depends(get_db)):
    """Get a single blog post by ID"""
    post = crud.blog.get_blog_post(db, post_id=post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post


@router.post("", response_model=BlogPostResponse, status_code=201)
def create_blog_post(post: BlogPostCreate, db: Session = Depends(get_db)):
    """Create a new blog post"""
    return crud.blog.create_blog_post(db=db, post=post)


@router.put("/{post_id}", response_model=BlogPostResponse)
def update_blog_post(
    post_id: str,
    post_update: BlogPostUpdate,
    db: Session = Depends(get_db),
):
    """Update an existing blog post"""
    post = crud.blog.update_blog_post(db=db, post_id=post_id, post_update=post_update)
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post


@router.delete("/{post_id}", status_code=204)
def delete_blog_post(post_id: str, db: Session = Depends(get_db)):
    """Delete a blog post"""
    success = crud.blog.delete_blog_post(db=db, post_id=post_id)
    if not success:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return None

