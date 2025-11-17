from pydantic import BaseModel, Field, ConfigDict
from datetime import date
from typing import Optional


class BlogPostBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    excerpt: str = Field(..., min_length=1, max_length=500)
    content: str = Field(..., min_length=1)
    author: str = Field(..., min_length=1, max_length=100)
    date: date
    category: str = Field(..., min_length=1, max_length=50)
    image_url: str = Field(..., min_length=1)


class BlogPostCreate(BlogPostBase):
    pass


class BlogPostUpdate(BaseModel):
    title: Optional[str] = Field(None, min_length=1, max_length=200)
    excerpt: Optional[str] = Field(None, min_length=1, max_length=500)
    content: Optional[str] = Field(None, min_length=1)
    author: Optional[str] = Field(None, min_length=1, max_length=100)
    date: Optional[date] = None
    category: Optional[str] = Field(None, min_length=1, max_length=50)
    image_url: Optional[str] = Field(None, min_length=1, alias="imageUrl")
    
    model_config = ConfigDict(populate_by_name=True)


class BlogPostResponse(BlogPostBase):
    id: str
    imageUrl: str = Field(..., alias="image_url")
    
    model_config = ConfigDict(from_attributes=True, populate_by_name=True)


class BlogPostListResponse(BaseModel):
    posts: list[BlogPostResponse]
    total: int
    page: int
    page_size: int

