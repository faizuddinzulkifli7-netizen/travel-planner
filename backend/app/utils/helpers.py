from datetime import datetime
from typing import Any


def format_date(date_str: str) -> str:
    """Format date string to readable format"""
    try:
        date_obj = datetime.strptime(date_str, "%Y-%m-%d")
        return date_obj.strftime("%B %d, %Y")
    except ValueError:
        return date_str

