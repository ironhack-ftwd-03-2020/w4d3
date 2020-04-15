const express = require('express');
const app = express();

const movies = require('./movies.json');

// console.log(movies);

// templating engine - handlebars
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        name: 'John Doe',
        todos: ['learn node', 'learn react', 'play nintendo'],
        address: {
            street: 'Sesame',
            number: 87
        }
    });
});

app.get('/movies', (req, res) => {
    res.render('movies', { movies: movies });
})

app.listen(3000);