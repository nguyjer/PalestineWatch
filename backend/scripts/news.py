import requests
import json
from datetime import datetime
from backend import db  
from backend.models import NewsModel
import random

def populate_news_db():
    try:
        url = "https://newsapi.org/v2/everything?q=palestine+OR+gaza+NOT+hezbollah&language=en&from=2024-10-20&sortBy=publishedAt&apiKey=0a5c13088b4c4cf88185456e537735a5"
        response = requests.get(url)
        data = response.json()

        if data["status"] != "ok":
            print("Failed to fetch data from the API")
            return []

        articles = data.get("articles", [])

        filtered_articles = [
            article for article in articles
            if all(
                article.get(attr)
                for attr in ["author", "title", "url", "description", "urlToImage", "publishedAt", "content"]
            )
        ]

        inserted_count = 0
        for article in filtered_articles:
            existing_article = NewsModel.query.filter_by(description=article["description"]).first()
            
            if existing_article:
                print(f"Skipping duplicate article: {article['title']}")
                continue  

            news = NewsModel(
                author=article["author"],
                description=article["description"],
                url=article["url"],
                url_image=article["urlToImage"],
                publish_date=datetime.fromisoformat(article["publishedAt"].replace('Z', '')),
                content=article["content"],
                supportGroupId=None,
                countryId=None
            )

            db.session.add(news)
            inserted_count += 1

        db.session.commit()
        print(f"Inserted {inserted_count} new articles into the database.")

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        db.session.rollback() 
        return []

if __name__ == '__main__':
    print("hello world")
