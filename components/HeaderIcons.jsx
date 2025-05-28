import { Moon, Music} from 'lucide-react';

const HeaderIcons = () => {
    return (
      <div className="flex gap-3">
        {/* <button className="px-2 py-2 bg-cream cursor-pointer rounded-md flex items-center justify-center hover:bg-sage-dark"> */}
          <Moon size={24} className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" />
        {/* </button> */}
        {/* <button className="px-2 py-2 bg-cream cursor-pointer rounded-md flex items-center justify-center hover:bg-sage-dark"> */}
          <Music size={24} className="text-sage-dark hover:text-cream cursor-pointer transition-all duration-300 hover:scale-115" />
        {/* </button> */}
      </div>
    );
  };

export default HeaderIcons;