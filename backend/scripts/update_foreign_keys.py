import random
from backend import db
from backend.models import NewsModel, SupportGroupsModel, CountriesModel

def get_random_id(model):
    ids = [item.id for item in model.query.all()]
    return random.choice(ids) if ids else None

def assign_random_ids():
    for news in NewsModel.query.all():
        news.supportGroupId = get_random_id(SupportGroupsModel)
        news.countryId = get_random_id(CountriesModel)
        db.session.add(news)

    for support_group in SupportGroupsModel.query.all():
        support_group.newsId = get_random_id(NewsModel)
        support_group.countryId = get_random_id(CountriesModel)
        db.session.add(support_group)

    for country in CountriesModel.query.all():
        country.newsId = get_random_id(NewsModel)
        country.supportGroupId = get_random_id(SupportGroupsModel)
        db.session.add(country)

    db.session.commit()

if __name__ == "__main__":
    assign_random_ids()
