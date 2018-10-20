from flask import Flask, flash, request, redirect, url_for
from flask_cors import CORS, cross_origin
from PIL import Image
import pytesseract
import os
app = Flask(__name__)
cors = CORS(app)
UPLOAD_FOLDER = '.'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['GET', 'POST'])
def parse():
    file = request.files['file']
    filename = file.filename
    dir_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(dir_path)
    text = pytesseract.image_to_string(Image.open(dir_path))
    return text