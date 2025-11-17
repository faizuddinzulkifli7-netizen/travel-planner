from sqlalchemy import Column, String, Text, Date
from app.database import Base
import uuid


class BlogPost(Base):
    __tablename__ = "blog_posts"
    
    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String, nullable=False, index=True)
    excerpt = Column(Text, nullable=False)
    content = Column(Text, nullable=False)
    author = Column(String, nullable=False)
    date = Column(Date, nullable=False, index=True)
    category = Column(String, nullable=False, index=True)
    image_url = Column(String, nullable=False)
    
    def __repr__(self):
        return f"<BlogPost(id={self.id}, title={self.title})>"

