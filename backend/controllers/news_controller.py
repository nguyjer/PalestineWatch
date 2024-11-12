from flask import jsonify, abort, request
from backend.models import NewsModel
from sqlalchemy import cast, Text
from backend import db


def get_all_news():
    try:
        query = NewsModel.query
        search_term = request.args.get('query')
        if search_term:
            search_term = f"%{search_term}%"
            query = query.filter(
                (NewsModel.author.ilike(search_term)) |
                (NewsModel.description.ilike(search_term)) |
                (cast(NewsModel.publish_date, Text).ilike(search_term)) |
                (NewsModel.source.ilike(search_term))
            )

        # Execute the filtered query
        articles = query.all()
        articles_data = [
            {
                "id": article.id,
                "author": article.author,
                "description": article.description,
                "url": article.url,
                "url_image": article.url_image,
                "publish_date": article.publish_date.isoformat(),
                "source": article.source,
                "content": article.content,
                "supportGroupId": article.supportGroupId,
                "countryId": article.countryId,
            }
            for article in articles
        ]
        return jsonify(articles_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def get_news_by_id(news_id):
	try:
		session = db.session
		article = session.get(NewsModel, news_id)
		if article is None:
			abort(404, description="News article not found")

		article_data = {
            "id": article.id,
            "author": article.author,
            "description": article.description,
            "url": article.url,
            "url_image": article.url_image,
            "publish_date": article.publish_date.isoformat(),
            "source": article.source,
            "content": article.content,
            "supportGroupId": article.supportGroupId,
            "countryId": article.countryId,
        }
		return jsonify(article_data), 200
	except Exception as e:
		return jsonify({"error": str(e)}), 500
