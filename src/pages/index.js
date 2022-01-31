import React from 'react';

import MedicalCenterLayout from '../components/Layout/home-care';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const index = () => {
  return (
    <MedicalCenterLayout>
      <HeroBanner />
      <Facilities />
      <LatestNews />
      <PatientServices />
    </MedicalCenterLayout>
  );
};

export default index