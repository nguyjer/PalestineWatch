from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate  # Import Migrate
from backend import db  # Import init_app() and db
from backend.scripts import populate_news_db, fetch_groups
from controllers import get_all_news, get_news_by_id, get_group_by_id, get_all_groups



from scripts.countries import fetch_countries

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql+psycopg2://postgres:downingswepalestinewatch@group06-palestine-watch-db.cvmeec4asdai.us-east-2.rds.amazonaws.com/PalestineWatchDB"
)

# Initialize the db with the Flask app
db.init_app(app)
migrate = Migrate(app, db)
cors = CORS(app, origins="*")


# Create tables if they do not exist
# add script methods to populate db here if necessary
with app.app_context():
    db.create_all()
    #populate_news_db() 
    fetch_groups()
    pass


# news endpoints
@app.route('/api/news', methods=['GET'])
def all_news():
    return get_all_news()

@app.route('/api/news/<int:news_id>', methods=['GET'])
def news_by_id(news_id):
    return get_news_by_id(news_id)

# support groups endpoints
@app.route('/api/support_groups', methods=['GET'])
def all_groups():
    groups = get_all_groups()
    return jsonify(groups)

@app.route('/api/support_groups/<int:news_id>', methods=['GET'])
def group_by_id(group_id):
    groups = get_group_by_id(group_id)
    return jsonify(groups)

# countries endpoints
@app.route('/api/countries', methods=['GET'])
def get_countries():
    return fetch_countries()

if __name__ == '__main__':
    app.run(debug=True, port=4000)
