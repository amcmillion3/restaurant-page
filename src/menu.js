import imgs from './images';

const menu = () => {
    const element = document.createElement('div');
    element.id = 'menu-container';

    const classicBurger = new Image();
    classicBurger.src = imgs[0];
    classicBurger.classList.add('burger-img');
    classicBurger.id = 'classic-burger';
    element.appendChild(classicBurger);

    const classicDesc = document.createElement('div');
    classicDesc.classList.add('burger-desc');
    classicDesc.id = 'classic-desc';
    const classicTitle = document.createElement('h2');
    classicTitle.innerHTML = 'Classic Burger';
    const classicInfo = document.createElement('p');
    classicInfo.innerHTML = 'Plant-based patty loaded with vegan bacon, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    classicDesc.appendChild(classicTitle);
    classicDesc.appendChild(classicInfo);
    element.appendChild(classicDesc);

    const jalapenoBurger = new Image();
    jalapenoBurger.src = imgs[1];
    jalapenoBurger.classList.add('burger-img');
    jalapenoBurger.id = 'jalapeno-burger';
    element.appendChild(jalapenoBurger);

    const jalapenoDesc = document.createElement('div');
    jalapenoDesc.classList.add('burger-desc');
    jalapenoDesc.id = 'jalapeno-desc';
    const jalapenoTitle = document.createElement('h2');
    jalapenoTitle.innerHTML = 'Jalapeño Burger';
    const jalapenoInfo = document.createElement('p');
    jalapenoInfo.innerHTML = 'Plant-based patty loaded with jalapenos, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    jalapenoDesc.appendChild(jalapenoTitle);
    jalapenoDesc.appendChild(jalapenoInfo);
    element.appendChild(jalapenoDesc);

    const guacBurger = new Image();
    guacBurger.src = imgs[2];
    guacBurger.classList.add('burger-img');
    guacBurger.id = 'guac-burger';
    element.appendChild(guacBurger);

    const guacDesc = document.createElement('div');
    guacDesc.classList.add('burger-desc');
    guacDesc.id = 'guac-desc';
    const guacTitle = document.createElement('h2');
    guacTitle.innerHTML = 'Guacamole Burger';
    const guacInfo = document.createElement('p');
    guacInfo.innerHTML = 'Plant-based patty loaded with guacamole, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    guacDesc.appendChild(guacTitle);
    guacDesc.appendChild(guacInfo);
    element.appendChild(guacDesc);

    const poboyBurger = new Image();
    poboyBurger.src = imgs[3];
    poboyBurger.classList.add('burger-img');
    poboyBurger.id = 'poboy-burger';
    element.appendChild(poboyBurger);

    const poboyDesc = document.createElement('div');
    poboyDesc.classList.add('burger-desc');
    poboyDesc.id = 'poboy-desc';
    const poboyTitle = document.createElement('h2');
    poboyTitle.innerHTML = "Cajun Po' Boy";
    const poboyInfo = document.createElement('p');
    poboyInfo.innerHTML = 'Vegan shrimp tossed in a New Orleans style batter, loaded with lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    poboyDesc.appendChild(poboyTitle);
    poboyDesc.appendChild(poboyInfo);
    element.appendChild(poboyDesc);

    const superShrimpBurger = new Image();
    superShrimpBurger.src = imgs[4];
    superShrimpBurger.classList.add('burger-img');
    superShrimpBurger.id = 'super-shrimp-burger';
    element.appendChild(superShrimpBurger);

    const superShrimpDesc = document.createElement('div');
    superShrimpDesc.classList.add('burger-desc');
    superShrimpDesc.id = 'super-shrimp-desc';
    const superShrimpTitle = document.createElement('h2');
    superShrimpTitle.innerHTML = 'Super Shrimp Burger';
    const superShrimpInfo = document.createElement('p');
    superShrimpInfo.innerHTML = 'Plant-based patty loaded with vegan bacon, vegan shrimp, vegan cheese, caramelized onions, lettuce, tomato, and our homemade burger sauce on a vegan Hawaiian bun.';
    superShrimpDesc.appendChild(superShrimpTitle);
    superShrimpDesc.appendChild(superShrimpInfo);
    element.appendChild(superShrimpDesc);

    const buffaloChiknBurger = new Image();
    buffaloChiknBurger.src = imgs[5];
    buffaloChiknBurger.classList.add('burger-img');
    buffaloChiknBurger.id = 'buffalo-chikn-burger';
    element.appendChild(buffaloChiknBurger);

    const buffaloChiknDesc = document.createElement('div');
    buffaloChiknDesc.classList.add('burger-desc');
    buffaloChiknDesc.id = 'buffalo-chikn-desc';
    const buffaloChiknTitle = document.createElement('h2');
    buffaloChiknTitle.innerHTML = "Buffalo Chik'n Sandwich";
    const buffaloChiknInfo = document.createElement('p');
    buffaloChiknInfo.innerHTML = 'Plant-based chicken tossed in buffalo sauce topped with pickles, vegan ranch, and coleslaw on a vegan Hawaiian bun.';
    buffaloChiknDesc.appendChild(buffaloChiknTitle);
    buffaloChiknDesc.appendChild(buffaloChiknInfo);
    element.appendChild(buffaloChiknDesc);

    return element;
};

export default menu;