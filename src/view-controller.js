import { addNote, deleteNote, signIn, signOut } from "./controller/controller-firebase.js";

const changeHash = (hash) =>  {
  location.hash = hash;
}

// INICIO DE SESIÒN
export const signInOnSubmit = () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  signIn(email, password)
    .then(() => changeHash('/home'))
    .catch(() => {})
}

// AGREGAR NOTAS
export const addNoteOnSubmit = (event) => {
  event.preventDefault();
  const input = document.getElementById('note');

  addNote(input.value)
    .then(() => {
      input.value = '';
    }).catch(() => {
      input.value = '';
    });
}

// ELIMINAR NOTAS
export const deleteNoteOnClick = (objNote) => {
  deleteNote(objNote.id)
}

// CERRAR SESION
export const signOutSubmit = (event) =>{
  event.preventDefault();
  signOut()
  .then(()=>changeHash('/signIn'))
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert( `Error: ${errorMessage} Tipo:${errorCode}`)
  })
}

