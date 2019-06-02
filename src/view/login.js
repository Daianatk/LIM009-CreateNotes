import { signInOnSubmit } from "../view-controller.js";

export default () => {
  const form = document.createElement('div');
  const formContent = 
  `
      <div class="loginBox">
      <img src="img/user.png" class="user">
      <h2>Ingresa Aqui</h2>
      <form>
          <p>Email</p>
          <input type="text" name="" id="email" placeholder="Enter Email">
          <p>Password</p>
          <input type="password" name="" placeholder="••••••" id="password">
          <input id="btn-sign-in" type="submit" name="" value="Sign In" class="btn">
      </form>
      </div>
      `;
  
  form.innerHTML = formContent;
  
  // selecccionando elementos del DOM
  const btnSignIn = form.querySelector('#btn-sign-in');
  btnSignIn.addEventListener('click', signInOnSubmit);
  return form;
  }