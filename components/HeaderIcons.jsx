import { playSparkle } from '../utils/playClickSound';
import { Moon, Music, Sun, Volume2, VolumeX } from 'lucide-react';
import { useDarkMode } from '../app/contexts/DarkModeContext';

const HeaderIcons = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleDarkModeToggle = () => {
    playSparkle();
    toggleDarkMode();
  };
  // const handleMuteToggle = () => {
  //   playClickSound();     
  // };

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
      {/* {isMuted ? (
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
      )} */}
    </div>
  );
};

export default HeaderIcons;