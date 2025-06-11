import { playClickSound } from '../utils/playClickSound';

const Navigation = ({ activeTab, setActiveTab }) => {
  const navItems = ['home', 'about me', 'my works'];

  return (
    <nav className="flex gap-3">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => {
            playClickSound(),
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
