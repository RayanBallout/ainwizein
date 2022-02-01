import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

function ChooseLogo({ layout, headerChangeColor }) {
    switch (layout) {
        case 'medical-village':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='TracedSVG'
                        width={120}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='TracedSVG'
                        width={120}
                    />
                )
            }

        case 'hospital':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/hospital-color.svg'
                        alt="Hospital Logo"
                        placeholder='TracedSVG'
                        width={188}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/hospital-white.png'
                        alt="Hospital Logo"
                        placeholder='TracedSVG'
                        width={188}
                    />
                )
            }

        case 'nursing':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/nursing-color.svg'
                        alt="Nursing Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/nursing-white.png'
                        alt="Nursing Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            }

        case 'geriatric':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/geriatric-color.svg'
                        alt="Geriatric Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/geriatric-white.png'
                        alt="Geriatric Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            }

        case 'oncology':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/oncology-color.svg'
                        alt="Oncology Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/oncology-white.svg'
                        alt="Oncology Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            }

        case 'home-care':
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/home-care-color.svg'
                        alt="Home Care Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/home-care-white.png'
                        alt="Home Care Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            }

        default:
            if (headerChangeColor) {
                return (
                    <StaticImage
                        src='../images/logos/medical-village-color.svg'
                        alt="Medical Village Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            } else {
                return (
                    <StaticImage
                        src='../images/logos/medical-village-white.png'
                        alt="Medical Village Logo"
                        placeholder='TracedSVG'
                        width={180}
                    />
                )
            }

    }
}

export default ChooseLogo;
