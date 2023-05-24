/**
 * Esta función deberá generar un formulario para la creación de un nuevo
 * artículo, el formulario deberá tener dos botones
 * - Enviar, que invoca a 
 * - Cancelar, que invoca 
 */
function showNew(){
    const formhtml = `
      <p>Ingrese el título</p>
      <input type="text" id="title" name="titulo" placeholder='Ingrese el título' required><br>
      <p>Ingrese un texto: </p>
      <textarea rows='20' cols='100' id="text" name="texto" required></textarea><br>
      <button onclick="doNew()">Enviar</button>
      <button onclick="">Cancelar</button>
      `;
  document.querySelector('#main').innerHTML = formhtml;
}

