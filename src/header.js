const header = () => {
    const element = document.createElement('header');

    element.innerHTML = "BIG BILLY'S VEGAN BURGER BAR";
    return element;
};

const nav = () => {
    const element = document.createElement('nav');
    element.id = 'nav-bar';

    return element;
};

const navBtns = () => {
    const home = document.createElement('div');
    home.classList.add('nav-btn');
    home.id = 'home';
    home.innerHTML = 'HOME';

    const menu = document.createElement('div');
    menu.classList.add('nav-btn');
    menu.id = 'menu';
    menu.innerHTML = 'MENU';  
    
    const contact = document.createElement('div');
    contact.classList.add('nav-btn');
    contact.id = 'contact';
    contact.innerHTML = 'CONTACT';

    return [home, menu, contact];
};

export {header, nav, navBtns};