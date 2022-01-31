import React from 'react';

import Layout from '../components/Layout';

// components
import Header from '../components/Header';
import SideButtons from '../components/SideButtons';
import HeroBanner from '../components/HeroBanner';
import Facilities from '../components/Facilities';
import LatestNews from '../components/LatestNews';
import PatientServices from '../components/PatientServices';
import Footer from '../components/Footer';

const NursingHome = ({ path }) => {
    return (
        <Layout>
            <Header path={path} />
            <SideButtons />
            <main>
                <HeroBanner />
                <Facilities />
                <LatestNews />
                <PatientServices />
            </main>
            <Footer />
        </Layout>
    );
};

export default NursingHome