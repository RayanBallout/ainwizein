import React from 'react';

import MedicalVillageLayout from '../components/Layout/medical-village';

// components
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';

const index = () => {
  return (
    <MedicalVillageLayout>
      <HeroBanner />
      <Facilities />
      <LatestNews />
      <PatientServices />
    </MedicalVillageLayout>
  );
};

export default index