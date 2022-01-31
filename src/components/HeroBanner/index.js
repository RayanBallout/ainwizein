import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import chooseColor from '../../helpers/chooseColor'

//styled components
import { SuperContainer, Container, Content, CovidBanner } from './HeroBanner.styles'

function HeroBanner({ layout }) {

    const { PrimaryColor } = chooseColor(layout);

    return (
        <SuperContainer>
            <StaticImage
                src='../../images/banner-mc.jpg'
                alt='background banner'
                layout='fixed'
                className='background-image'
                placeholder='blurred'
            />
            <Container>
                <Content>
                    <p>What makes us better, makes you better</p>
                    <h1>Welcome to Ain WAZein <br /> Medical Village</h1>
                    <Link to='/medical-village-about' className='learn-more'>Learn More</Link>
                </Content>
            </Container>
            <CovidBanner primary={PrimaryColor}>
                <h3>COVID 19</h3>
                <p>Ain WaZein is using its expertise to address the COVID-19 pandemic.</p>
                <Link to='/covid'>Read More</Link>
            </CovidBanner>
        </SuperContainer>

    )
}

export default HeroBanner
