from flask import Flask
from routes import stripe_routes
from dotenv import load_dotenv
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


if __name__ == '__main__':
    load_dotenv()
    app.register_blueprint(stripe_routes)
    app.run(debug=True, port=5000, host="0.0.0.0")
