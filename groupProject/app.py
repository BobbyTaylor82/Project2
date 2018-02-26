from flask import Flask, render_template, jsonify,redirect,request
from flask_pymongo import PyMongo

from locations import * 


app = Flask(__name__)

mongo = PyMongo(app)



@app.route("/")

def index ():
    title = " Group Project"


    return render_template("index.html", title = title)


@app.route("/send", methods=["GET", "POST"])
def address():
    try :
        if request.method == "POST":
            zip = request.form['zipcode']
            country = request.form['country']

        closetLocation = jsonify (threeNearestLocation(zip,country))

  
        
        return closetLocation

    except:

        return "Enter a valid zip code or country code."





        

if __name__ == '__main__':
    app.run(debug=True)

    