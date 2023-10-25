from crypt import methods
from flask import Flask, jsonify, render_template, request
from database import connect, getAppAspect, getApps, getAppsContent, getSearchApps, getPrediction
from bson.json_util import dumps
from flask_cors import CORS


app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['JSON_AS_ASCII'] = False

CORS(app, resources={r"/.*": {"origins": ["*"]}})

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/apps", methods=["GET"])
def apps():
    data = getApps()
    return jsonify(data)

@app.route("/apps/<keyword>", methods=['GET'])
def appsSearch(keyword):
    data = getSearchApps(keyword)
    return jsonify(data)

@app.route("/helloWorld", methods=['GET'])
def helloWorld():
    conn = connect()
    return 'hello world'

@app.route("/apps/content/<app_id>")
def appsContent(app_id):
    data = getAppsContent(app_id)
    return jsonify(data)

@app.route("/apps/aspect/<app_id>/<aspect>")
def appsAspect(app_id, aspect):
    print(app_id, aspect)
    data = getAppAspect(app_id, aspect)
    return jsonify(data)

@app.route("/predict", methods=['POST'])
def appsPredict():
    data = request.get_json()
    review = data['review']
    return jsonify(getPrediction(review))


if __name__ == '__main__':
    app.run('0.0.0.0', 8000, debug=True)