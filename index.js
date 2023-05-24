const fs = require('fs')
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

app.post('/create', (request, response) => {
    const { markdownText, fileName } = request.body;
  
    console.log(request.body);
    console.log(markdownText);
  
    try {
      const htmlText = md.render(markdownText);
      const filePath = `markdown/${fileName}.txt`;
  
      fs.writeFileSync(filePath, htmlText);
  
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({
        message: 'File saved successfully'
      }));
    } catch (error) {
      console.error(error);
  
      response.status(500).json({
        error: 'Error saving the file'
      });
    }
});