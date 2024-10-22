from flask import Flask, jsonify
from flask_cors import CORS
from database import db  # Import db from the new module
from flask_migrate import Migrate  # Import Migrate
from models import NewsModel, SupportGroupsModel, CountriesModel  # Import models
from scripts.support_groups import fetch_groups
# from scripts.news import populate_news_db  # Import the news function
from scripts.countries import fetch_countries

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql+psycopg2://postgres:downingswepalestinewatch@group06-palestine-watch-db.cvmeec4asdai.us-east-2.rds.amazonaws.com/PalestineWatchDB"
)
cors = CORS(app, origins="*")

# Initialize the db with the Flask app
db.init_app(app)
migrate = Migrate(app, db)

# Create tables if they do not exist
with app.app_context():
    db.create_all()
    # populate_news_db()  # Populate the news table
    db.session.commit()  # Commit the change


@app.route('/api/news', methods=['GET'])
def get_news():
    return 'Hello, World!'

@app.route('/api/support_groups', methods=['GET'])
def get_groups():
    groups = fetch_groups()
    return jsonify(groups)

@app.route('/api/countries', methods=['GET'])
def get_countries():
    return fetch_countries()

if __name__ == '__main__':
    app.run(debug=True, port=4000)
