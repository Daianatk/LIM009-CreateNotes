import Home from './view/notes.js';
import Login from './view/login.js';
import { getNotes } from './controller/controller-firebase.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/signIn');
  } else if (hash === '#/signIn' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/signIn');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const root = document.getElementById('root');
  root.innerHTML = '';
  switch (router) {
    case 'home':
      getNotes((note) => {
        root.innerHTML = '';        
        root.appendChild(Home(note));  
      })
      break;
    case 'signIn':
      root.appendChild(Login());
      break;
    default:
      root.appendChild(Login());
      break;
  }
}

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}
