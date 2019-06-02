import {signOutSubmit } from '../view-controller.js';

export const header = () =>{
	const header = document.createElement('div');
	header.innerHTML= `	
        <header>
        <div class="header">
            <a class="link color" href="#/">
            <img class="logo-design" src="img/notes.png"  alt="logo"/> 
            </a>
        <nav class="menu_flex">
            <li>
                <li id="btn-signOut">
                <i id="btn-signOut" class="fas fa-sign-out-alt"></i>
                </li>
            </li>
        </nav>
        </header>
    `;
    
        const btnSignOut = header.querySelector('#btn-signOut')
        btnSignOut.addEventListener('click',signOutSubmit);
        return header;
    }