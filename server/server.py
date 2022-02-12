from flask import Flask, request

app = Flask(__name__)
app.config['DEBUG'] = True

from data import data_functions

@app.route('/hello')
def hello_world():
    return 'Hello'

@app.route('submissions/create', method=['POST'])
def create_submission():
    return data_functions.createSubmission(request)

@app.route('submissions/list', method=['GET'])
def list_submissions():
    return data_functions.getSubmissions(request)

@app.route('newsletters/list', method=['GET'])
def list_newsletters():
    pass

@app.post('submissions/update', method=['POST'])
def update_submission():
    pass

if __name__ == '__main__':
    app.run(port='5000', host='192.168.1.154')