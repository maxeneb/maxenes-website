'use client';

import React, { useState, useEffect } from 'react';
import Waves from './Waves';

const WavesUI = () => {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1912);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const waves = [
    { color: '#B6D48C', height: 80, speed: 0.2, opacity: 0.9 },
    { color: '#FEFCEF', height: 160, speed: 0.6, opacity: 0.7, amplitude: 9 }, 
    { color: '#FEFCEF', height: 250, amplitude: 9, speed: 0.35, opacity: 0.6 }, 
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(180deg, transparent 0%, #B6D48C20 40%, #AAB79640 70%, #67795460 100%)',
      position: 'relative'
    }}>
      <Waves 
        height={400} 
        width={screenWidth} 
        waves={waves} 
        baseSpeed={0.5} 
        baseAmplitude={20} 
      />
    </div>
  );
};

export default WavesUI;