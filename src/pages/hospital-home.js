import React from 'react';

import HospitalLayout from '../components/Layout/home-care';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const HospitalHome = () => {
    return (
        <HospitalLayout>
            <HeroBanner />
            <Facilities />
            <LatestNews />
            <PatientServices />
        </HospitalLayout>
    );
};

export default HospitalHome