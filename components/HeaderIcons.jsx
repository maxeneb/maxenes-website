import { playClickSound, playClickSoundLow } from '../utils/playClickSound';
import { Moon, Music, Sun, Volume2, VolumeX } from 'lucide-react';
import { useDarkMode } from '../app/contexts/DarkModeContext';
import { useAudio } from '../app/contexts/AudioContext';

const HeaderIcons = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { isMuted, toggleMute } = useAudio();

  const handleDarkModeToggle = () => {
    playClickSoundLow(isMuted);
    toggleDarkMode();
  };
  const handleMuteToggle = () => {
    playClickSound(isMuted);     
    toggleMute();
  };

  return (
    <div className="flex gap-3">
      {isDarkMode ? (
        <Sun 
          onClick={handleDarkModeToggle}
          size={24} 
          className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" 
        />
      ) : (
        <Moon 
          onClick={handleDarkModeToggle}
          size={24} 
          className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" 
        />
      )}
      {isMuted ? (
        <VolumeX 
          onClick={handleMuteToggle}
          size={24} 
          className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" 
        />
      ) : (
        <Volume2 
          onClick={handleMuteToggle}
          size={24} 
          className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" 
        />
      )}
    </div>
  );
};

export default HeaderIcons;