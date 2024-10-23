from .database import db  # Import only the db instance

def init_app(app):
    db.init_app(app)  