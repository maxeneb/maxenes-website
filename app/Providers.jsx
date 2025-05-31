'use client'
import { DarkModeProvider } from './contexts/DarkModeContext';
import { AudioProvider } from './contexts/AudioContext';

export default function Providers({ children }) {
  return (
    <DarkModeProvider>
      <AudioProvider>
        {children}
      </AudioProvider>
    </DarkModeProvider>
  );
}