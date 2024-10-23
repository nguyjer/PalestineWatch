from backend import db

class SupportGroupsModel(db.Model):
    __tablename__ = 'support_groups' 
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    link = db.Column(db.String(255), nullable=False)
    url_image = db.Column(db.String(255), nullable=False)
    newsId = db.Column(db.Integer, db.ForeignKey('news.id'), nullable=True)
    countryId = db.Column(db.Integer, db.ForeignKey('countries.id'), nullable=True)