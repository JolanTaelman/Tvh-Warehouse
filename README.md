# Frontend
Angular site staat live op github pages, bereikbaar via link: https://jolantaelman.github.io/Tvh-Warehouse/Tvh-Warehouse/

# Backend
Node.js staat op github via link https://github.com/JolanTaelman/TVH-server, is gehost op Heroku via link https://tvh-backend.herokuapp.com/.

# Database
Mongo database staat gehost via Mlab.

# Routes
De bestaande routes zijn:

## /warehouses
GET: Returns list of warehouses with stock.

POST: Creates a warehouse with provided arguments (name, capacity)

## /warehouses/:warehouseID
GET: Returns the warehouse that matches the provided ID.

PUT: Updates the matched warehouse.

POST: Adds an item to the matched warehouse with the provided arguments (name)

DELETE: Deletes the matched warehouse.

## /warehouses/:warehouseID/items
GET: Returns a list of all items from the matches warehouse.

## /warehouses/:warehouseID/:itemID
DELETE: Deletes matched item from matched Warehouse

POST: Moves matched item to matched warehouse

## /capacity
GET: Returns all free capacity and a list of warehouses with free capacity

## /item/:itemID
GET: Returns matched item

DELETE: Deletes matched item.
