from flask import Flask, jsonify
from flask_cors import CORS
from scripts.support_groups import fetch_groups  # Importing the function

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/news', methods=['GET'])
def get_news():
    return 'Hello, World!'

@app.route('/api/support_groups', methods=['GET'])
def get_groups():
    groups = fetch_groups()
    return jsonify(groups)



if __name__ == '__main__':
    app.run(debug=True, port=3000)