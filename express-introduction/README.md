Learning goals:

- Understand the idea of a framework
- Understand the two most common HTTP verbs: GET and POST
- Use the Express framework to create a basic web application
- Incorporate static assets (CSS and images) into your Express application
- Keep your HTML code for your Express app in separate files

Framework 

In computer programming, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software. 


For example, many web frameworks provide:

- Libraries for database access (for saving your data permanently)
- Templating frameworks (for making dynamic HTML that changes between users)
- Session management (for keeping track of users)
- Often promote code reuse (for keeping your code DRY)
Though they often target development of dynamic websites they are also applicable to static websites.


The framework we gonna use is Express.js, the most popular web application framework for Node.js


Before we start to use Express we must understand HTTP verbs - the most common being GET and POST

The server not only registers the requested URL but also the so called HTTP verbs that communicate 
the intention of the request 

GET
GET requests:

Should be used only to retrieve data from a server
Can be cached
Remain in the browser history
Can be bookmarked
Should never be used to send sensitive data (more on this later)
Have length restrictions (you can’t send giant files)
Example

Type google.com in your URL bar and hit enter. You just made a GET request!

POST
A POST request is for sending data to the server.

POST requests:

Should be used to send data to the server
Are never cached
Do not remain in the browser history
Cannot be bookmarked
Are better for sensitive data (again, more on this later)
Have no restrictions on data length (you can send big files)
Example

When you enter information into a login form on facebook, and hit submit you are making a POST. You’re saying to Facebook’s servers: “Here’s my login info, log me in please”.