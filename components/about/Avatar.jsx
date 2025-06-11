import Image from "next/image";
import { assets } from '../../assets/assets'
import { useDarkMode } from "../../app/contexts/DarkModeContext";

const Avatar = () => {
    const { isDarkMode } = useDarkMode();

    return (
    <div className="ml-5">
      <div className="relative w-34 h-36 md:w-36 md:h-36 transition-all duration-300 hover:scale-102">
        <div className={`w-full h-full rounded-full border-3 shadow-lg overflow-hidden transition-all duration-300 ${
          isDarkMode 
            ? 'border-sage-medium bg-sage-light shadow-gray-900/50' 
            : 'border-sage-dark bg-sage-light shadow-gray-400/30'
        }`}>
          <Image 
            src={assets.avatar}
            alt="Avatar" 
            className={`w-full h-full object-cover transition-all duration-300 ${
              isDarkMode 
                ? 'brightness-75 contrast-110': ''  
            }`}
            width={144}
            height={144}
          />
        </div>
      </div>
    </div>
    );
  };

export default Avatar;