import React, { useState } from 'react'

import { StaticImage } from 'gatsby-plugin-image';

// styles
import {
    TopHeader, BottomHeader, TopContainer,
    LeftNav, RightNav,
    BottomContainer, BottomButtons,
    SupportButton, OverlaySupportButton,
    Overlay, OpenOverlay, CloseOverlay, OverlayContent,
} from './Header.styles'

function Header() {

    const [overlayStatus, setOverlayStatus] = useState(false);

    const [headerChangeColor, setHeaderChangeColor] = useState(false)

    window.onscroll = function () {
        if (window.pageYOffset > 60) {
            setHeaderChangeColor(true);
        } else {
            setHeaderChangeColor(false);
        }
    };

    return (
        <div>
            <TopHeader>
                <TopContainer>
                    <LeftNav>
                        <ul>
                            <li className='selected'>Medical Village</li>
                            <li>The Hospital</li>
                            <li>Nursing School</li>
                            <li>Geriatric Medical Center</li>
                            <li>Oncology Medical Center</li>
                            <li>Home Care Center</li>
                        </ul>
                    </LeftNav>
                    <RightNav>
                        <ul>
                            <li>Careers</li>
                        </ul>
                    </RightNav>
                </TopContainer>
            </TopHeader>
            <BottomHeader headerColor={headerChangeColor}>
                <BottomContainer>
                    {
                        headerChangeColor &&
                        <StaticImage
                            src='../../images/color-mc.svg'
                            alt="Medical Village Logo"
                            placeholder='blurred'
                            width={120}
                        />
                    }
                    {
                        !headerChangeColor &&
                        <StaticImage
                            src='../../images/white-mc.png'
                            alt="Medical Village Logo"
                            placeholder='blurred'
                            width={120}
                        />
                    }
                    <BottomButtons>
                        <SupportButton headerColor={headerChangeColor}>
                            <a href="">Support Us</a>
                        </SupportButton>
                        <OpenOverlay onClick={() => setOverlayStatus(true)}>
                            <div className="upper"></div>
                            <div className="mid"></div>
                            <div className="bottom"></div>
                        </OpenOverlay>
                    </BottomButtons>
                </BottomContainer>
            </BottomHeader>
            <Overlay show={overlayStatus}>
                <div className="topNav">
                    <OverlaySupportButton show={overlayStatus}>
                        <a href="">Support Us</a>
                    </OverlaySupportButton>
                    <CloseOverlay onClick={() => setOverlayStatus(false)}>
                        <div className="tick1"></div>
                        <div className="tick2"></div>
                    </CloseOverlay>
                </div>
                <OverlayContent>
                    <div>
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we Are</li>
                            <li>Leadership Team & Board of Trustees</li>
                            <li>Mission,Vision & Values</li>
                            <li>Patients & Visitors Info</li>
                            <li>Partners</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we Are</li>
                            <li>Leadership Team & Board of Trustees</li>
                            <li>Mission,Vision & Values</li>
                            <li>Patients & Visitors Info</li>
                            <li>Partners</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <ul>
                            <li>Who we Are</li>
                            <li>Leadership Team & Board of Trustees</li>
                            <li>Mission,Vision & Values</li>
                            <li>Patients & Visitors Info</li>
                            <li>Partners</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </OverlayContent>
            </Overlay>
        </div>
    )
}

export default Header
