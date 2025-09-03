import React, { lazy, Suspense } from 'react';

// Lazy load components for better performance
const HeroSection = lazy(() => import('../components/HeroSection'));
const CevsLookupSection = lazy(() => import('../components/CevsLookupSection'));
const VisualizationsSection = lazy(() => import('../components/VisualizationsSection'));
const FeaturesSection = lazy(() => import('../components/FeaturesSection'));
const CodeExampleSection = lazy(() => import('../components/CodeExampleSection'));
const TestimonialsSection = lazy(() => import('../components/TestimonialsSection'));

// Loading component
const SectionSkeleton = () => (
    <div className="animate-pulse py-20">
        <div className="container mx-auto px-6">
            <div className="h-8 bg-slate-700 rounded w-1/4 mb-4 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-full mb-2 max-w-2xl mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 max-w-xl mx-auto"></div>
        </div>
    </div>
);

const HomePage = () => {
    return (
        <main>
            <Suspense fallback={<SectionSkeleton />}>
                <HeroSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <CevsLookupSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <VisualizationsSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <FeaturesSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <CodeExampleSection />
            </Suspense>
            <Suspense fallback={<SectionSkeleton />}>
                <TestimonialsSection />
            </Suspense>
        </main>
    );
};

export default HomePage;
