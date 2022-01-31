import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

// styled components
import { Container, Content, ServicesContainer, ServicesList, Service, ColoredService, ColoredServiceContent } from './PatientServices.styles'
import { Link } from 'gatsby'

function PatientServices() {
    return (
        <Container>
            <Content>
                <h2>Patient <span>Services</span></h2>
                <ServicesContainer>
                    <ServicesList>
                        <Service>
                            <div className="icon">
                                <StaticImage
                                    src='../../images/icons/check-result-online.svg'
                                    alt="Check your result online"
                                    placeholder='tracedSVG'
                                />
                            </div>
                            <div className="text">
                                <h5>Check your result online</h5>
                                <p>View your lab and x-ray results online within a few days</p>
                            </div>
                            <Link to='/patient-services' className='learn-more'>Learn More</Link>
                        </Service>
                        <Service>
                            <div className="icon">
                                <StaticImage
                                    src='../../images/icons/book-appointment.svg'
                                    alt="Check your result online"
                                    placeholder='tracedSVG'
                                />
                            </div>
                            <div className="text">
                                <h5>Manage your appointments</h5>
                                <p>Request a new appointment or request to reschedule or cancel an existing appointment</p>
                            </div>
                        </Service>
                        <Service>
                            <div className="icon">
                                <StaticImage
                                    src='../../images/icons/stay-updated.svg'
                                    alt="Stay Updated"
                                    placeholder='tracedSVG'
                                />
                            </div>
                            <div className="text">
                                <h5>Stay updated about your health</h5>
                                <p>View your medical record, and browse through your medical reports</p>
                            </div>
                        </Service>
                    </ServicesList>
                    <ColoredService>
                        <ColoredServiceContent>
                            <h5>NEED MORE INFO?</h5>
                            <p>We are here to provide you with the highest quality service & customer care.</p>
                            <div className="button-container">
                                <a href="tel:05501111" className="phone">
                                    <StaticImage
                                        src='../../images/icons/phone-call.svg'
                                        alt='Phone Icon'
                                    />
                                    <span>05501111</span>
                                </a>
                                <Link to='/contact-us'>
                                    Contact Us
                                </Link>
                            </div>
                        </ColoredServiceContent>
                    </ColoredService>
                </ServicesContainer>
            </Content>
        </Container>
    )
}

export default PatientServices
