from flask import Flask
app = Flask(__name__)

@app.route('/dummyurl')
def hello():
    with open('index.html', 'r') as file:
        return file.read()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)