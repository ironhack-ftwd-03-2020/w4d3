// ✗ npm install nodemon -g
const express = require('express');
console.log(typeof express); // function
const app = express();

app.use(express.static('public'));

// app.get('/', (request, response) => {
//     response.send('<h1>Hello Ironhackers!!!</h1>')
// });

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

// app.get('/cat', (req, res) => {
//     res.send(`
//     <!doctype html>
//     <html>
//       <head>
//         <meta charset='utf-8'>
//         <title>Cat</title>
//         <link rel='stylesheet' href='/stylesheets/style.css' />
//       </head>
//       <body>
//         <h1>Cat</h1>
//         <p>This is my second route</p>
//         <img src='/images/cool-cat.jpg' />
//       </body>
//     </html>
//     `)
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home-page.html');
})

app.get('localhos:3000/cat', (req, res) => {
    // console.log(__dirname);
    res.sendFile(__dirname + '/views/cat-page.html');
});