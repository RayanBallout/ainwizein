import React from 'react';

import GeriatricLayout from '../components/Layout/geriatric';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const GeriatricHome = () => {
    return (
        <GeriatricLayout>
            <HeroBanner />
            <Facilities />
            <LatestNews />
            <PatientServices />
        </GeriatricLayout>
    );
};

export default GeriatricHome