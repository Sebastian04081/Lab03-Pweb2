const fs = require('fs')
const path = require('path')
const express = require('express')
const cors = require('cors');
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
  md = new MarkdownIt();
const app = express()

app.use(cors())
app.use(express.static('client'))
app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))

app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000")
});

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.post('/create', (request, response) => {
  try {
    const { text, name } = request.body;

    const htmlText = md.render(text);
    const ruta = path.join(__dirname, 'markdown', `${name}.txt`);
    fs.writeFileSync(ruta, htmlText);

    response.setHeader('Content-Type', 'application/json');
    response.json({ text: "<h1>Se Guardo el archivo</h1>" });
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Error al guardar el archivo' });
  }
});

app.get('/listar', (request, response) => {
  const ruta = 'markdown';
  let list = fs.readdirSync(ruta);
  console.log(list);
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify({
    lista: list 
  }))
})