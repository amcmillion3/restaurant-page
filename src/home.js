const aboutInfo = () => {
    const element = document.createElement('div');

    element.innerHTML = "Here at Big Billy's Vegan Burger Bar we strive to make plant-based burgers that are so delicous you will forget you are not eating meat. Carefully crafted, decadent, mouth-watering burgers that stimulate all the senses. No Meat? No Problem!"
    element.id = 'about';

    return element;
}

export default aboutInfo;