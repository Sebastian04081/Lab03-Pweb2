const path = require('path');
const express = require('express');
const app = express();
const markdownIt = require('markdown-it');
const md = markdownIt();

app.use(express.static('client'));
app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

const markdownText = '# Título';
const htmlText = md.render(markdownText);

console.log(htmlText);