from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate  # Import Migrate
from backend import db  # Import init_app() and db
from backend.scripts import populate_news_db, fetch_groups
from controllers.news_controller import get_all_news, get_news_by_id



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
    pass



@app.route('/api/news', methods=['GET'])
def all_news():
    return get_all_news()

@app.route('/api/news/<int:news_id>', methods=['GET'])
def news_by_id(news_id):
    return get_news_by_id(news_id)


@app.route('/api/support_groups', methods=['GET'])
def get_groups():
    groups = fetch_groups()
    return jsonify(groups)

if __name__ == '__main__':
    app.run(debug=True, port=4000)
