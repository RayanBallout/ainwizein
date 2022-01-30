import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

//styled components
import { SuperContainer, Container, Content, LearnMore, CovidBanner } from './HeroBanner.styles'

function HeroBanner() {
    return (
        <SuperContainer>
            <StaticImage
                src='../../images/banner-mc.jpg'
                layout='fixed'
                className='background-image'
                placeholder='blurred'
            />
            <Container>
                <Content>
                    <p>What makes us better, makes you better</p>
                    <h1>Welcome to Ain WAZein <br /> Medical Village</h1>
                    <LearnMore>Learn More</LearnMore>
                </Content>
            </Container>
            <CovidBanner>
                <h3>COVID 19</h3>
                <p>Ain WaZein is using its expertise to address the COVID-19 pandemic.</p>
                <a href="#">Read More</a>
            </CovidBanner>
        </SuperContainer>

    )
}

export default HeroBanner
