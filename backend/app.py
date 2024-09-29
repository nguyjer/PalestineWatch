# Flask code to create a simple API
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/palestinewatchapi', methods=['POST'])
def palestinewatchapi():
    data = request.get_json()
    print(data)
    return data

if __name__ == '__main__':
    app.run(debug=True)