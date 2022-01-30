import React, { useState } from 'react'

import { StaticImage } from 'gatsby-plugin-image';

// Styled Components
import { Container, Button, Icon, AddButton } from './SideButtons.styles'

function SideButtons() {

    const [click, setClick] = useState(false);

    return (
        <Container>
            <Button click={click}>
                <Icon>
                    <StaticImage
                        src='../../images/find-doctor.svg'
                        alt="Find a doctor icon"
                    />
                </Icon>
                Find a Doctor
            </Button>
            <Button click={click}>
                <Icon>
                    <StaticImage
                        src='../../images/book-appointment-side.svg'
                        alt="Book and appointment icon"
                    />
                </Icon>
                Book an Appointment
            </Button>
            <AddButton onClick={() => setClick(!click)} click={click}>
                <Icon>
                    <StaticImage
                        src='../../images/plus-icon.svg'
                        alt="Plus icon"
                    />
                </Icon>
            </AddButton>
        </Container>
    )
}

export default SideButtons
