import React from 'react';

import HomeCareLayout from '../components/Layout/home-care';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const HomeCareHome = () => {
    return (
        <HomeCareLayout>
            <HeroBanner />
            <Facilities />
            <LatestNews />
            <PatientServices />
        </HomeCareLayout>
    );
};

export default HomeCareHome