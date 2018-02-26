import requests
import json
import pandas as pd



# inputs country Abbr and zip code

def threeNearestLocation(zipCode,countryABBR):
    
    zipCode = str(zipCode)
    countryABBR = str(countryABBR)
    
#     google api

    api_key = "APPID=5be78fade1727ace968b5ab363d997bd"
    url =  "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "," + countryABBR + "&" + api_key
    request_info = requests.get(url)
    weather_info = request_info.json()
    dict_weather_coord =weather_info['coord']
    
    googleAPIlat = str(dict_weather_coord['lat'])
    googleAPIlon = str(dict_weather_coord['lon'])
    
#     LCBO API

    # apiKEY = "MDpjZDM2NmI0NC0xNjk3LTExZTgtOWY0Ny00M2M2NzIxZjM0ODY6SU5LQTgzYlYyUlhmODlraU81NWkzUmRxY0R1elJGWTBMaUFI"
    url = "http://lcboapi.com/stores?lat=" + googleAPIlat + "&lon=" + googleAPIlon
    request_info = requests.get(url)
    locationNearYOU = request_info.json()
    location3NearYOU =locationNearYOU['result'][:3]


    address_list = []
    city_list =[]
    distance_list = []
    name_list = []
    phone_list = []

    for each in location3NearYOU:
        address_list.append(each['address_line_1'])
        city_list.append(each['city'])
        distance_list.append(each['distance_in_meters'])
        name_list.append(each['name'])
        phone_list.append(each['telephone'])
    

### distance in meters

    df_Nearseat_locations = pd.DataFrame( {"distance_in_meters" : distance_list,
                                           "name"     : name_list,
                                           "address" : address_list,
                                           "city"     :  city_list,
                                           "phone"    : phone_list})
    
    

    return df_Nearseat_locations.to_json(orient='records')