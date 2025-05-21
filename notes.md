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