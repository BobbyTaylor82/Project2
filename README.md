# Liquor Control Board of Ontario Study and Data Visualizations

## Project Goal:
The goal of this project is to analyze and visualize several aspects of Ontario's liquor board database.


## Dataset:

We will be using JSON-formatted data from the [LCBO's well-documented API](https://lcboapi.com/ "Liquor Control Board of Ontario"). The LCBO has structured data at multiple endpoints that will allow us to create a relational model using a SQLite database.

Endpoints include:
* /stores
* /products
* /inventories

## Github repository:
[Repo](https://github.com/ludanny16/Project2)

## Technical details:

* Python Flask-powered API
* HTML/CSS
* JavaScript
* Database: MongoDB (likely)
* Web scraping: Python Beautiful Soup of [BeerAdvocate.com](https://www.beeradvocate.com/), Wikipedia, etc.
* Additional JS library: [DataTables](https://datatables.net/download/) -- Is this JQuery?

## Ideas for final visualizations:
* Map with layer of open/close times – user can select timeframes with drop down
** V1: product dropdown -> map which stores sell
** V2: Find store closest to me that sells x product
* User inputs lat/long (or town) and product; app finds closest lat/long *with* product
* Density/heatmap of stores
* Quantity / inventory visualization by store
* User inputs price range – get products in range – get store availability?
* Category levels (primary, secondary, tertiary)
* Node diagram of products 