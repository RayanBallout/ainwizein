import React from 'react'

import { StaticImage } from 'gatsby-plugin-image';

// Styled components
import { Container, Content, Column, BottomFooter, BottomFooterContent, SocialMediaContainer } from './Footer.styles';

function Footer() {
    return (
        <>
            <Container>
                <Content>
                    <Column>
                        <h5>Title Here</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Column>
                    <Column>
                        <h5>Title Here</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Column>
                    <Column>
                        <h5>Title Here</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Column>
                    <Column>
                        <h5>Title Here</h5>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Column>
                </Content>
            </Container>
            <BottomFooter>
                <BottomFooterContent>
                    <div>
                        <p>© Copyright 2021 - All rights reserved for Ain WAZein Medical Center</p>
                    </div>
                    <SocialMediaContainer>
                        <a href="">
                            <StaticImage
                                src='../../images/Youtube.svg'
                                alt="Youtube icon"
                            />
                        </a>
                        <a href="">
                            <StaticImage
                                src='../../images/Facebook.svg'
                                alt="Facebook icon"
                            />
                        </a>
                        <a href="">
                            <StaticImage
                                src="../../images/linkedin.svg"
                                alt="Linkedin icon"
                            />
                        </a>
                        <a href="">
                            <StaticImage
                                src="../../images/Twitter.svg"
                                alt="Twitter icon"
                            />
                        </a>
                        <a href="">
                            <StaticImage
                                src="../../images/Instagram.svg"
                                alt="Instagram icon"
                            />
                        </a>
                    </SocialMediaContainer>
                </BottomFooterContent>
            </BottomFooter>
        </>
    )
}

export default Footer
