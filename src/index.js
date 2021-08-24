import {header, nav, navBtns} from './header.js';

const body = document.getElementById('content');
const navButtons = navBtns();

body.appendChild(header());
body.appendChild(nav());
const navBar = document.getElementById('nav-bar');
navBar.appendChild(navButtons[0]);
navBar.appendChild(navButtons[1]);
navBar.appendChild(navButtons[2]); 