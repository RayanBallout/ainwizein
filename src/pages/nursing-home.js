import React from 'react';

import NursingLayout from '../components/Layout/nursing';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const NursingHome = () => {
    return (
        <NursingLayout>
            <HeroBanner />
            <Facilities />
            <LatestNews />
            <PatientServices />
        </NursingLayout>
    );
};

export default NursingHome