import React from 'react';

const BackDrop = () => {
    return <div style={{
        background: 'rgba(0, 0, 0, 0.7)',
        left: '50%',
        position: 'fixed',
        top: '55%',
        transform:' translate(-50%, -50%)',
        width: '100vw',
        height: '100vh',
        zIndex: 2
    }}></div>;
};

export default BackDrop;
