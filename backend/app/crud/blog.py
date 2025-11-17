from sqlalchemy.orm import Session
from sqlalchemy import desc
from typing import Optional, List
from app.models.blog import BlogPost
from app.schemas.blog import BlogPostCreate, BlogPostUpdate
import uuid


def get_blog_post(db: Session, post_id: str) -> Optional[BlogPost]:
    """Get a single blog post by ID"""
    return db.query(BlogPost).filter(BlogPost.id == post_id).first()


def get_blog_posts(
    db: Session,
    skip: int = 0,
    limit: int = 100,
    category: Optional[str] = None
) -> List[BlogPost]:
    """Get multiple blog posts with optional filtering"""
    query = db.query(BlogPost)
    
    if category:
        query = query.filter(BlogPost.category == category)
    
    return query.order_by(desc(BlogPost.date)).offset(skip).limit(limit).all()


def count_blog_posts(db: Session, category: Optional[str] = None) -> int:
    """Count total blog posts"""
    query = db.query(BlogPost)
    
    if category:
        query = query.filter(BlogPost.category == category)
    
    return query.count()


def create_blog_post(db: Session, post: BlogPostCreate) -> BlogPost:
    """Create a new blog post"""
    db_post = BlogPost(
        id=str(uuid.uuid4()),
        title=post.title,
        excerpt=post.excerpt,
        content=post.content,
        author=post.author,
        date=post.date,
        category=post.category,
        image_url=post.image_url,
    )
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post


def update_blog_post(
    db: Session,
    post_id: str,
    post_update: BlogPostUpdate
) -> Optional[BlogPost]:
    """Update an existing blog post"""
    db_post = get_blog_post(db, post_id)
    if not db_post:
        return None
    
    update_data = post_update.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(db_post, field, value)
    
    db.commit()
    db.refresh(db_post)
    return db_post


def delete_blog_post(db: Session, post_id: str) -> bool:
    """Delete a blog post"""
    db_post = get_blog_post(db, post_id)
    if not db_post:
        return False
    
    db.delete(db_post)
    db.commit()
    return True

