from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo

import # (name of Python script here)

app = Flask(__name__)
mongo = PyMongo(app)

@app.route("/")
def index():
    lcbo = mongo.db.lcbo.find_one()
    return render_template("index.html", lcbo=lcbo)


# This route is not necessarily /scrape if we're doing API calls
# Feel free to rename the endpoint and function name
@app.route("/scrape")
def scrape():
    lcbo = mongo.db.lcbo
    lcbo_data = scrape_lcbo.scrape()
    lcbo.update(
        {},
        lcbo_data,
        upsert=True
    )
    return redirect("http://localhost:5000/", code=302)


if __name__ == "__main__":
    app.run(debug=True)