from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate  # Import Migrate

from dotenv import load_dotenv
load_dotenv(dotenv_path='.flaskenv')

from backend import db  # Import init_app() and db
from backend.scripts import populate_news_db, fetch_groups, fetch_countries, assign_random_ids
from backend.controllers.news_controller import get_all_news, get_news_by_id
from backend.controllers.support_groups_controller import get_all_groups, get_group_by_id
from backend.controllers.countries_controller import get_all_countries, get_country_by_id

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
if __name__ == "__main__":

	with app.app_context():
		from backend.scripts import populate_news_db, fetch_groups, fetch_countries
		#db.create_all()
		# assign_random_ids()
		#populate_news_db() 
		# fetch_groups()

		# fetch_countries()
		pass


# news endpoints
@app.route('/api/news', methods=['GET'])
def all_news():
    return get_all_news()

@app.route('/api/news/<int:news_id>', methods=['GET'])
def news_by_id(news_id):
    return get_news_by_id(news_id)

# support groups endpoints
@app.route('/api/support-groups', methods=['GET'])
def all_groups():
    groups = get_all_groups()
    return (groups)

@app.route('/api/support-groups/<int:group_id>', methods=['GET'])
def group_by_id(group_id):
    groups = get_group_by_id(group_id)
    return (groups)

# countries endpoints
@app.route('/api/countries', methods=['GET'])
def all_countries():
    return get_all_countries()

@app.route('/api/countries/<int:country_id>', methods=['GET'])
def country_by_id(country_id):
    return get_country_by_id(country_id)

if __name__ == '__main__':
    app.run(debug=True, port=4000)
