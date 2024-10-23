from backend import db

class CountriesModel(db.Model):
    __tablename__ = 'countries' 
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    coa_iso = db.Column(db.String(255), nullable=False)
    flag_url = db.Column(db.String(255), nullable=False)
    capital = db.Column(db.String(255), nullable=False)
    population = db.Column(db.String(255), nullable=False)
    region = db.Column(db.String(255), nullable=False)
    subregion = db.Column(db.String(255), nullable=False)
    common_name = db.Column(db.String(255), nullable=False)
    official_name = db.Column(db.String(255), nullable=False)
    unMembership = db.Column(db.String(255), nullable=False)
    maps = db.Column(db.String(255), nullable=False)
    newsId = db.Column(db.Integer, db.ForeignKey('news.id'), nullable=True)
    supportGroupId = db.Column(db.Integer, db.ForeignKey('support_groups.id'), nullable=True)