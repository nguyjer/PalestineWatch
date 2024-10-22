import requests
import json
from datetime import datetime
from database import db  
from models import NewsModel, SupportGroupsModel, CountriesModel  
import random

def get_random_id(model):
    ids = [item.id for item in model.query.all()]
    return random.choice(ids) if ids else None

def populate_news_db():
    try:
        url = "https://newsapi.org/v2/everything?q=palestine+OR+gaza+NOT+hezbollah&language=en&from=2024-10-08&sortBy=publishedAt&apiKey=0a5c13088b4c4cf88185456e537735a5"
        response = requests.get(url)
        data = response.json()

        if data["status"] != "ok":
            print("Failed to fetch data from the API")
            return []

        articles = data.get("articles", [])

        # filter the article with null values
        filtered_articles = [
            article for article in articles
            if all(
                article.get(attr)
                for attr in ["author", "title", "url", "description", "urlToImage", "publishedAt", "content"]
            )
        ]

        # Insert the filtered articles into the NewsModel table
        for article in filtered_articles:
            # Create a new NewsModel instance
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

            # Add the news article to the session
            db.session.add(news)

        # Commit the changes to the database
        db.session.commit()
        print(f"Inserted {len(filtered_articles)} articles into the database.")

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        db.session.rollback()  # Rollback in case of an error
        return []

if __name__ == '__main__':
    populate_news_db()
