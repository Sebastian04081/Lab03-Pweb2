var userFullName = '';
var userKey = '';

window.addEventListener('load', showWelcome);
function showWelcome(){
  let html = '<h2>Bienvenido ' + userFullName + '</h2>\n';
  html += `
          <p>Este sistema fue desarrollado por alumnos de la Escuela Profesional de Ingeniería de Sistemas, de la Universidad Nacional de San Agustín de Arequipa</p>
          <p>El sistema fué desarrollado usando estas tecnologías:</p>
          <ul>
            <li>HTML y CSS</li>
            <li>Node.js para el backend</li>
            <li>Javascript para el frontend</li>
            <li>Las páginas se escriben en lenguaje Markdown</li>
            <li>Se uso un libreria de node para el procesamiento del lenguaje Markdown</li>
          </ul>`;
  document.getElementById('main').innerHTML = html;
}

function showMenuUserLogged(){
  let html = "<p onclick='showWelcome()'>Inicio</p>\n"+
    "<p onclick='doList()'>Lista de Páginas</p>\n"+
    "<p onclick='showNew()' class='rightcolumn'>Página Nueva</p>\n"
  document.getElementById('menu').innerHTML = html;
}

