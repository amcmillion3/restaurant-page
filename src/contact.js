const contactInfo = () => {
    const element = document.createElement('div');

    element.innerHTML = "We are open 7 days a week 12pm - 12am. Come by and see us at 9876 Bangin' Plant Based Ave. Veganville, GA 83746"
    element.id = 'contact-info';

    return element;
}

export default contactInfo;