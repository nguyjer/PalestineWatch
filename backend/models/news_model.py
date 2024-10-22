from database import db

class NewsModel(db.Model):
    __tablename__ = 'news' 
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    author = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    url = db.Column(db.String(255), nullable=False)
    url_image = db.Column(db.String(255), nullable=False)
    publish_date = db.Column(db.DateTime, nullable=False)
    content = db.Column(db.String(500), nullable=False)
    supportGroupId = db.Column(db.Integer, db.ForeignKey('support_groups.id'), nullable=True)
    countryId = db.Column(db.Integer, db.ForeignKey('countries.id'), nullable=True)