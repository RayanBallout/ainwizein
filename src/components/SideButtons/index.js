import React, { useState } from 'react'

import chooseColor from '../../helpers/chooseColor';

import { StaticImage } from 'gatsby-plugin-image';

// Styled Components
import { Container, Button, Icon, AddButton } from './SideButtons.styles'


function SideButtons({ path }) {

    const [click, setClick] = useState(false);

    const { PrimaryColor } = chooseColor(path);

    return (
        <Container>
            <Button click={click}>
                <Icon primary={PrimaryColor}>
                    <StaticImage
                        src='../../images/icons/find-doctor.svg'
                        alt="Find a doctor icon"
                    />
                </Icon>
                Find a Doctor
            </Button>
            <Button click={click}>
                <Icon primary={PrimaryColor}>
                    <StaticImage
                        src='../../images/icons/book-appointment-side.svg'
                        alt="Book and appointment icon"
                    />
                </Icon>
                Book an Appointment
            </Button>
            <AddButton onClick={() => setClick(!click)} click={click}>
                <Icon primary={PrimaryColor}>
                    <StaticImage
                        src='../../images/icons/plus-icon.svg'
                        alt="Plus icon"
                    />
                </Icon>
            </AddButton>
        </Container>
    )
}

export default SideButtons
