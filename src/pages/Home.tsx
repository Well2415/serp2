import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

// Lazy load below-the-fold components
const Ecosystem = React.lazy(() => import('../components/Ecosystem'));
const WhyChoose = React.lazy(() => import('../components/WhyChoose'));
const Solutions = React.lazy(() => import('../components/Solutions'));
const Partners = React.lazy(() => import('../components/Partners'));
const Steps = React.lazy(() => import('../components/Steps'));
const FAQ = React.lazy(() => import('../components/FAQ'));
const Footer = React.lazy(() => import('../components/Footer'));

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <Features />
            <Suspense fallback={<div className="h-screen bg-transparent" />}>
                <Ecosystem />
                <WhyChoose />
                <Solutions />
                <Partners />
                <Steps />
                <FAQ />
                <Footer />
            </Suspense>


        </div>
    );
};

export default Home;
