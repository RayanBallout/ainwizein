import React from 'react'

import { StaticImage } from 'gatsby-plugin-image';

// Styled Components
import { Container, FacilitiesContainer, Facility } from './Facilities.styles'

function Facilities() {
    return (
        <Container>
            <h2>Our <span>Facilities</span></h2>
            <FacilitiesContainer>
                <Facility>
                    <StaticImage
                        src='../../images/facilities-nursing-school.svg'
                        alt='Nursing school faclity logo'
                        placeholder='tracedSVG'
                    />
                </Facility>
                <Facility>
                    <StaticImage
                        src='../../images/facilities-medical-center.svg'
                        alt='Medical Center faclity logo'
                        placeholder='tracedSVG'
                    />
                </Facility>
                <Facility>
                    <StaticImage
                        src='../../images/facilities-hospital.svg'
                        alt='Hospital faclity logo'
                        placeholder='tracedSVG'
                    />
                </Facility>
                <Facility>
                    <StaticImage
                        src='../../images/facilities-oncology-medical-center.svg'
                        alt='Oncology Center faclity logo'
                        placeholder='tracedSVG'
                    />
                </Facility>
                <Facility>
                    <StaticImage
                        src='../../images/facilities-home-care-center.svg'
                        alt='Nursing school faclity logo'
                        placeholder='tracedSVG'
                    />
                </Facility>
            </FacilitiesContainer>
        </Container>
    )
}

export default Facilities;
