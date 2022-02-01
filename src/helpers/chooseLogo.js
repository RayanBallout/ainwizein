import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function ChooseLogo({ layout, headerChangeColor }) {
    switch (layout) {
        case 'medical-village':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        case 'hospital':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        case 'nursing':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        case 'geriatric':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        case 'oncology':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        case 'home-care':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

        default:
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='blurred'
                        width={120}
                    />
                )
            }

    }
}

export default ChooseLogo;
