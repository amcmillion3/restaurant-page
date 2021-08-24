import {header, nav, navBtns} from './header.js';
import aboutInfo from './home.js';

const body = document.getElementById('content');
const navButtons = navBtns();

body.appendChild(header());
body.appendChild(nav());
body.appendChild(aboutInfo());

const navBar = document.getElementById('nav-bar');
navBar.appendChild(navButtons[0]);
navBar.appendChild(navButtons[1]);
navBar.appendChild(navButtons[2]); 