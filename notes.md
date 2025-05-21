REST API - uses HTTP methods

GET - Getting a post
POST - Creating a post
PUT - Updating a post
DELETE - Deleting a post 

status codes 

1xx - information 

2xx - success 
200 OK - Everything worked as expected
201 Created - New resource succcesfully created(ex : after a new post is creatted)

3xx - Redirection 
the 300 status codes are for redirection meaninng the server is telling the client , "hey the thing you are looking for is somewhere else"
301 - Moved permanently 
Ex - Your site changes from http://example.com to https://example.com you set up a 301 redirect so visitors and google to know to go to the new one.

4xx - Client Errors
these happen when the problem is on user's side meaning your browser or app made a bad request
400 Bad requst - request is malformed or invalid
401 Unauthorised - Your must log in (missing invalid credentials)
403 Forbiddden - You are nor allowed to access this
404 Not Found - URL doesnt exist
429 Too many requests

5xx - Server Errors 
These happen when something goes wrong on the server side even though the client made a valid request

500 Internal server error - something broke on server
503 service unaviable - server is temporirily overloaded or down 

sql non sql databases

sql databases - structured data data is stored in tables with rows and coloumns like a spreadsheet sql databases uses sql languages
best for complex queries to find a relationship with data like orders and customers

nosql databses - flexible data format stores data like JSON or keyvaluepairs good for changing data shapes no sql DB uses query language or api has its own way of querying often simpler and faster for certain tasks
great for fast changing or huge amounts of data

mongodb+srv://chandanamandarapu93:z4YprOPjVoRDXa34@cluster0.4ppfvid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
