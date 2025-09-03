import React from 'react';

const HomePage = () => {
    return (
        <div style={{ 
            minHeight: '50vh', 
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '3rem',
            margin: '2rem',
            borderRadius: '1rem'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                ✅ HomePage Component Loaded!
            </h1>
            <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', marginBottom: '2rem' }}>
                React Router is working correctly! This is the HomePage component.
            </p>
            <div style={{ marginTop: '2rem', padding: '1rem', border: '2px solid white', borderRadius: '8px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <p>🎯 Router: Active</p>
                <p>🎯 HomePage: Rendered</p>
                <p>🎯 App Layout: Working</p>
            </div>
        </div>
    );
};

export default HomePage;
