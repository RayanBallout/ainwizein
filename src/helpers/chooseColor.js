function chooseColor(layout) {

    let PrimaryColor = 'lightGreen';
    let SecondaryColor = 'darkGreen';

    switch (layout) {
        case 'medical-village':
            PrimaryColor = 'lightGreen';
            SecondaryColor = 'darkGreen';
            break;
        case 'hospital':
            PrimaryColor = 'lightBlue';
            SecondaryColor = 'darkBlue';
            break;
        case 'nursing':
            PrimaryColor = 'lightBabyBlue';
            SecondaryColor = 'darkBabyBlue';
            break;
        case 'geriatric':
            PrimaryColor = 'lightOrange';
            SecondaryColor = 'darkOrange';
            break;
        case 'oncology':
            PrimaryColor = 'lightPurple';
            SecondaryColor = 'darkPurple';
            break;
        case 'home-care':
            PrimaryColor = 'lightPink';
            SecondaryColor = 'darkPink';
            break;
        default:
            PrimaryColor = 'lightGreen';
            SecondaryColor = 'darkGreen';
            break;
    }

    return { PrimaryColor, SecondaryColor }
}

export default chooseColor;
