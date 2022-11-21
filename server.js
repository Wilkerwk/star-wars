const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/style'));
app.use(express.static(__dirname + '/assets/episodeSvg'));

app.get('/app/index.js', (req, res) => {
    res.sendFile(__dirname + '/app/index.js');
});

app.get('/apiFilms.js', (req, res) => {
    res.sendFile(__dirname + '/apiFilms.js');
  })

app.get('/components/cards/cards.js', (req, res) => {
    res.sendFile(__dirname + '/components/cards/cards.js');
});

app.get('/pages/home/index.js', (req, res) => {
    res.sendFile(__dirname + '/pages/home/index.js');
});

app.get('/components/cards/cards.js', (req, res) => {
    res.sendFile(__dirname + '/components/cards/cards.js');
});

app.get('/pages/episodes/episode.js', (req, res) => {
    res.sendFile(__dirname + '/pages/episodes/episode.js');
});

app.get('/favicon.ico', (req, res) => {
    res.sendFile(__dirname + '/favicon.ico');
});

app.get('/pages/episodes/style.css', (req, res) => {
    res.sendFile(__dirname + '/pages/episodes/style.css');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/app/index.html');
});

app.listen(8080);
