import { header } from "./header.js"
import { addNoteOnSubmit, deleteNoteOnClick, updateStateNoteSubmit } from "../view-controller.js";

const itemNote = (objNote) => {
  const liElement = document.createElement('li');
  liElement.innerHTML = `
    <span>
      <span>${objNote.note}</span>
    </span>
    ${objNote.state === 'true' 
              ?`
    <button value="true" id="btn-chec-${objNote.state}" class="btn-circle">
    <i class="fas fa-check-circle"></i></button> `
    : `<button value="false" id="btn-chec-${objNote.state}" class="btn-circle">
    <i class="fas fa-check-circle"></i></button>`}
    <button id="btn-deleted-${objNote.id}" class="btn-circle">
    <i class="fas fa-minus-circle"></i>
    </button>
  `;

  // AGREGANDO EVENTO DE CLICK AL BOTON EDITAR ESTADO
  const state = liElement.querySelector(`#btn-chec-${objNote.state}`)
    state.addEventListener('click',()=>{
    const newState= state.value; 
    updateStateNoteSubmit(objNote,newState)
    console.log(newState)
    if(newState === 'false'){
      state.style.color= '#318031';
     //const btnColor = liElement.querySelector(`#btn-chec-${objNote.state}`)
     //btnColor.style.color= '#318031';
    }
  });


  // AGREGANDO EVENTO DE CLICK AL BOTON ELIMINAR
  liElement.querySelector(`#btn-deleted-${objNote.id}`)
    .addEventListener('click', () => deleteNoteOnClick(objNote));
  return liElement;
}

export default(note)=>{
  const divContainer = document.createElement('div');
  const homeContent = 
  `
  <header id="header-content">
  <!-- AQUI VA EL HEADER-->
  </header>

  <div id="contenido">
  <div class="container">

      <h1>Mis Notas</h1>
      <div class="row">
          <div class="columns">
              <form id="formulario">
                      <label for="note"></label>
                      <textarea id="note" class="notes">Escriba aqui su nota...</textarea>
                      <input id="btn-notes" type="submit" value="Agregar" class="btn">
              </form>
          </div>
          <div class="columns1">
              <h2>---Lista de Notas---</h2>
              <div id="list-notes"></div>
          </div>
      </div>

      </div>
  </div>
  `;
  divContainer.innerHTML = homeContent;

  // Header 
  const headerHome = divContainer.querySelector("#header-content")     
  headerHome.appendChild(header(note));

   // AGREGANDO EVENTO DE CLICK AL BOTON AÑADIR NOTA
  const buttonAddNote = divContainer.querySelector('#btn-notes');
  const div = divContainer.querySelector('#list-notes');
  note.forEach(note => {
    div.appendChild(itemNote(note));
  });
  buttonAddNote.addEventListener('click', addNoteOnSubmit);
  return divContainer;
}
