import React from 'react';

import OncologyLayout from '../components/Layout/oncology';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const OncologyHome = () => {
    return (
        <OncologyLayout>
            <HeroBanner />
            <Facilities />
            <LatestNews />
            <PatientServices />
        </OncologyLayout>
    );
};

export default OncologyHome