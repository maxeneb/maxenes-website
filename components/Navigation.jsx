import { playClickSound } from '../utils/playClickSound';
import { useAudio } from '../app/contexts/AudioContext';

const Navigation = ({ activeTab, setActiveTab }) => {
  const { isMuted } = useAudio();
  const navItems = ['home', 'about', 'work', 'contact'];

  return (
    <nav className="flex gap-3">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => {
            playClickSound(isMuted),
            setActiveTab(item)}
          }
          className={`px-3 py-2 text-sm rounded-md transition-colors ${
            activeTab === item
              ? 'bg-sage-dark text-cream cursor-pointer transition-all duration-300 hover:scale-105'
              : 'cursor-pointer bg-cream text-sage-medium hover:bg-sage-dark hover:text-cream duration-300 hover:scale-105'
          }`}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
