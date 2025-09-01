import React from 'react';
import HeroSection from '../components/HeroSection';
import CevsLookupSection from '../components/CevsLookupSection';
import VisualizationsSection from '../components/VisualizationsSection';
import FeaturesSection from '../components/FeaturesSection';
import CodeExampleSection from '../components/CodeExampleSection';
import PricingSection from '../components/PricingSection';

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <CevsLookupSection />
            <VisualizationsSection />
            <FeaturesSection />
            <CodeExampleSection />
            <PricingSection />
        </main>
    );
};

export default HomePage;
