import { initRouter } from "./router.js";

const init = () => {
  // Initializacion de Firebase
  const config = {
    apiKey: "AIzaSyCWMWtGfS3WKzkG9e5KSuo1SyOsJrPe0gs",
    authDomain: "dbnotes-48046.firebaseapp.com",
    databaseURL: "https://dbnotes-48046.firebaseio.com",
    projectId: "dbnotes-48046",
    storageBucket: "dbnotes-48046.appspot.com",
    messagingSenderId: "458457440519"
  };

  firebase.initializeApp(config);

  initRouter();
}

window.onload = init();