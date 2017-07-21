from flask import Flask
from flask import render_template


def create_app():
    app = Flask(__name__)
    app._static_folder = "static"

    @app.route('/')
    def index():
        """Route definition for the index page."""
        return render_template('index.html')

    return app
