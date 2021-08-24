import {header, nav, navBtns} from './header';
import aboutInfo from './home';
import renderMenu from './menu';

const body = document.getElementById('content');
const navButtons = navBtns();

body.appendChild(header());
body.appendChild(nav());
body.appendChild(aboutInfo());

const navBar = document.getElementById('nav-bar');
navBar.appendChild(navButtons[0]);
navBar.appendChild(navButtons[1]);
navBar.appendChild(navButtons[2]); 

const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

(function render() {
    const home = document.getElementById('home');
    home.addEventListener('click', () => {
            body.removeChild(body.lastChild);
            body.appendChild(aboutInfo());
    });

    const menu = document.getElementById('menu');
    menu.addEventListener('click', () => {
            body.removeChild(body.lastChild);
            body.appendChild(renderMenu());
    });
})();
