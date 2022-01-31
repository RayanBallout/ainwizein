function chooseColor(path) {

    let PrimaryColor = 'lightGreen';
    let SecondaryColor = 'darkGreen';

    switch (path) {
        case '/hospital-home/':
            PrimaryColor = 'lightBlue';
            SecondaryColor = 'darkBlue';
            break;
        default:
            break;
    }

    return { PrimaryColor, SecondaryColor }
}

export default chooseColor;
