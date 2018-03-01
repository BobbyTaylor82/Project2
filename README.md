# Liquor Control Board of Ontario Study and Data Visualizations

## Motivation:
The goal of this project is to tell a story through user-driven interaction with data. The project team was inspired to work with realistic data to increase skill working with store/location information.

## Dataset:

We will be using JSON-formatted data from the [LCBO's well-documented API](https://lcboapi.com/ "Liquor Control Board of Ontario"). The LCBO has structured data at multiple endpoints that allow for document-oriented modeling using a MongoDB database.

Endpoints include:
* /stores
* /products
* /inventories

## Project Goal:
The goal of this project is to analyze and visualize aspects of Ontario's Liquor Control Board database. In particular, we set out to give users a way to enter a postal/country code combination to find the nearest LCBO retail outlets. This app:

* Searches for top 3 nearest LCBO retail outlets
* Visualizes nearest stores in map
* Displays top LCBO products


## Github repository:
[Repo](https://github.com/ludanny16/Project2)

## Technologies leveraged:

* Python Flask-powered API
* HTML/CSS
* JavaScript
* Database: MongoDB
* Web scraping: Python Beautiful Soup of [BeerAdvocate.com](https://www.beeradvocate.com/)
* New JavaScript library: [Highcharts](https://www.highcharts.com/)

## Ideas to extend the project:
* Map with layer of open/close times – user can select timeframes with drop down
** V1: product dropdown -> map which stores sell
** V2: Find store closest to me that sells x product
* User inputs lat/long (or town) and product; app finds closest lat/long *with* product
* Density/heatmap of stores
* Quantity / inventory visualization by store
* User inputs price range – get products in range – get store availability?
* Category levels (primary, secondary, tertiary)
* Node diagram of products 