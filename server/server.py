from flask import Flask, request

app = Flask(__name__)
app.config['DEBUG'] = True

from data import database

@app.route('/hello')
def hello_world():
    database.getConnection()
    return 'Hello'

if __name__ == '__main__':
    app.run(port='5000', host='192.168.1.154')