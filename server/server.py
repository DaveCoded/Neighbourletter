from flask import Flask, request
import logging
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['DEBUG'] = True
cors = CORS(app, resources={r"/*": {"origins": "*"}})
# app.config['CORS_HEADERS'] = 'Content-Type'

from business import business_functions

@app.route('/hello')
def hello_world():
    return 'Hello'

@app.route('/submissions/create', methods=['POST'])
def create_submission():
    return business_functions.create_submission(request)

@app.route('/submissions/list', methods=['GET'])
def list_submissions():
    return business_functions.get_submissions(request)

@app.route('/submissions/email', methods=['GET'])
def send_out_submissions():
    return business_functions.send_email()

@app.route('/submissions/update', methods=['POST'])
def update_submission():
    logging.error('JSON:', request.get_json(silent=True))
    return business_functions.update_submission(request)

if __name__ == '__main__':
    app.run(port='5000', host='192.168.1.154')