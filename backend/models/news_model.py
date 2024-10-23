from backend import db

class NewsModel(db.Model):
    __tablename__ = 'news' 
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    author = db.Column(db.String(500), nullable=False)
    description = db.Column(db.Text, nullable=False)
    url = db.Column(db.String(500), nullable=False)
    url_image = db.Column(db.String(500), nullable=False)
    publish_date = db.Column(db.DateTime, nullable=False)
    source = db.Column(db.String(500), nullable=False)
    content = db.Column(db.Text, nullable=False)
    supportGroupId = db.Column(db.Integer, db.ForeignKey('support_groups.id'), nullable=True)
    countryId = db.Column(db.Integer, db.ForeignKey('countries.id'), nullable=True)