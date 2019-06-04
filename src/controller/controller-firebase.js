// INICIAR SESIÒN
export const signIn = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

// CERRAR SESIÒN
export const signOut = () => firebase.auth().signOut();

// AGREGA NOTAS
export const addNote = (textNote, state=true) =>
  firebase.firestore().collection('note').add({
    note: textNote,
    state: state,
  })

// ELIMINAR NOTAS
export const deleteNote = (idNote) =>
  firebase.firestore().collection('note').doc(idNote).delete()

// OBTENER TODAS LAS NOTAS
export const getNotes = (callback) =>
  firebase.firestore().collection('note')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    }); 

// ACTUALIZAR ESTADO DE LAS NOTAS
  export const updateStateNote = (idNote ,newState) =>{
    return firebase.firestore().collection('note').doc(idNote).update({
      state : newState
    });
  }
