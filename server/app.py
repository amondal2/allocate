from flask import Flask, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def parse():
    print(request.files)
    return 'Hello, World!'