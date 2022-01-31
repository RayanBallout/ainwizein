function chooseColor(layout) {

    let PrimaryColor = 'lightGreen';
    let SecondaryColor = 'darkGreen';

    switch (layout) {
        case 'hospital':
            PrimaryColor = 'lightBlue';
            SecondaryColor = 'darkBlue';
            break;
        default:
            break;
    }

    return { PrimaryColor, SecondaryColor }
}

export default chooseColor;
