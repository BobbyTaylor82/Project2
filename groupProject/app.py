from flask import Flask, render_template, jsonify,redirect,request
import pymongo

from locations import * 


app = Flask(__name__)

client = pymongo.MongoClient()
db = client.locationDB

locationTable = db.locationDB

@app.route("/")
def index ():
    locationList = []
    for location in db.locationTable.find():
        location.pop('_id')
        locationList.append(location)   
    locationList = jsonify(locationList)
    return render_template('index.html', locationList =  locationList)

@app.route("/send", methods=["GET", "POST"])
def address(): 
    try:

        db.locationTable.remove()

        if request.method == "POST":
            zip = request.form['zipcode']
            country = request.form['country']

        
        closetLocation_data = threeNearestLocation(zip,country)
        db.locationTable.insert_one({"locations": closetLocation_data})

        print(db.locationTable.find())
       

        return redirect('http://localhost:5000/',code=302)    
    except:

        return "Enter a valid zip code"

@app.route("/data/location")
def locationData():
    
    locationList = []
    for location in db.locationTable.find():
        location.pop('_id')
        locationList.append(location)
        
    locationList = jsonify(locationList)

    return locationList

@app.route("/data/stores")
def storeDATA():
    
    dfSTORERequiredINFO = pd.read_csv('allSTOREINFOREQUIRED.csv')

    dictSTORERequiredINFO = dfSTORERequiredINFO.to_dict(orient='list')
        
    storeINFO = jsonify(dictSTORERequiredINFO)

    return storeINFO

@app.route("/data/stores/beerROOM")
def BeerRoomDATA():
    
    df_Stores = pd.read_csv('allSTOREINFO.csv')
    dfHASBEERROOM = df_Stores['has_beer_cold_room'].value_counts().reset_index()
    dfHASBEERROOM.rename(columns={"index":"Bool"},inplace=True)
    
    jsonHASBEERROOM = dfHASBEERROOM.to_json(orient='records')

    return jsonHASBEERROOM


    
if __name__ == '__main__':
    app.run(debug=True)

    