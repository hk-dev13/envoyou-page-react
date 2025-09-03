import React, { lazy, Suspense, useEffect } from 'react';
import seoService from '../services/seo';

// Lazy load PricingSection for better performance
const PricingSection = lazy(() => import('../components/PricingSection'));

// Loading skeleton component
const PricingSkeleton = () => (
    <div className="animate-pulse py-20">
        <div className="container mx-auto px-6">
            <div className="h-8 bg-slate-700 rounded w-1/3 mb-4 mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-full mb-2 max-w-2xl mx-auto"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4 max-w-xl mx-auto"></div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="border border-slate-600 rounded-lg p-6">
                        <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
                        <div className="h-8 bg-slate-700 rounded w-1/2 mb-4"></div>
                        <div className="space-y-2">
                            {[1, 2, 3, 4].map((j) => (
                                <div key={j} className="h-4 bg-slate-700 rounded w-full"></div>
                            ))}
                        </div>
                        <div className="h-10 bg-slate-700 rounded w-full mt-6"></div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const PricingPage = () => {
  useEffect(() => {
    // Set SEO for pricing page
    seoService.setPageSEO('pricing');
  }, []);

    return (
        <main>
            <Suspense fallback={<PricingSkeleton />}>
                <PricingSection />
            </Suspense>
        </main>
    );
};

export default PricingPage;
