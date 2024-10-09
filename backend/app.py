from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/news', methods=['GET'])
def get_news():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run(debug=True, host=3000)