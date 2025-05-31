'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {

    setIsMuted(false);
  }, []);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};