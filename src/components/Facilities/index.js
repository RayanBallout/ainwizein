import React from 'react'

import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

// Styled Components
import { Container, FacilitiesContainer, Facility } from './Facilities.styles'

function Facilities() {
    return (
        <Container>
            <h2>Our <span>Facilities</span></h2>
            <FacilitiesContainer>
                <Link to='/nursing-home'>
                    <Facility>
                        <StaticImage
                            src='../../images/facilities-nursing-school.svg'
                            alt='Nursing school faclity logo'
                            placeholder='tracedSVG'
                        />
                    </Facility>
                </Link>
                <Link to='/geriatric-home'>
                    <Facility>
                        <StaticImage
                            src='../../images/facilities-medical-center.svg'
                            alt='Medical Center faclity logo'
                            placeholder='tracedSVG'
                        />
                    </Facility>
                </Link>
                <Link to='/hospital-home'>
                    <Facility>
                        <StaticImage
                            src='../../images/facilities-hospital.svg'
                            alt='Hospital faclity logo'
                            placeholder='tracedSVG'
                        />
                    </Facility>
                </Link>
                <Link to='/oncology-home'>
                    <Facility>
                        <StaticImage
                            src='../../images/facilities-oncology-medical-center.svg'
                            alt='Oncology Center faclity logo'
                            placeholder='tracedSVG'
                        />
                    </Facility>
                </Link>
                <Link to='/home-care-home'>
                    <Facility>
                        <StaticImage
                            src='../../images/facilities-home-care-center.svg'
                            alt='Nursing school faclity logo'
                            placeholder='tracedSVG'
                        />
                    </Facility>
                </Link>
            </FacilitiesContainer>
        </Container>
    )
}

export default Facilities;
