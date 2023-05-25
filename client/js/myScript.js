function showNew(){
    const formhtml = `
      <p>Ingrese el título</p>
      <input type="text" id="title" name="title" placeholder='Ingrese el título' required><br>
      <p>Ingrese un texto: </p>
      <textarea rows='20' cols='100' id="text" name="texto" required></textarea><br>
      <button onclick="doNew()">Enviar</button>
      <button onclick="showWelcome()">Cancelar</button>
      `;
  document.querySelector('#main').innerHTML = formhtml;
}

function doNew(){
  //Extraer valores de entrada
  const title = document.querySelector('#title').value;
  const text = document.querySelector('#text').value;

  //Validar valores de los input
  if (!title || !text) {
    return alert('Por favor, rellena todos los campos del formulario');
  }

  const url = new URL('http://localhost:3000/create');

  const file = {
    name: title,
    text: text
  };

  console.log(JSON.stringify(file));

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(file)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return response.json();
  })
  .then(data => {
    document.querySelector("#main").innerHTML = data.text;
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function listFilesMarkdown() {
  let url = "http://localhost:3000/list"

  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.lista);
    let lista = data.lista
    let html = `<ul>`
    for(let i=0;i<lista.length; i++) {
      html += `<li onclick="verContenido('${i+1}')" id="${i+1}">${lista[i]}</li>`
    }
    html += `</ul>`
    
    document.getElementById("main").innerHTML = html

  })
}