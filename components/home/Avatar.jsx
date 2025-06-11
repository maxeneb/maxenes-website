import Image from "next/image";
import { assets } from '../../assets/assets'
import { useDarkMode } from "../../app/contexts/DarkModeContext";

const Avatar = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <div className="ml-5">
            <div className={`relative transition-all duration-500 ${
                isDarkMode ? 'filter brightness-75 contrast-110' : 'filter brightness-110'
            }`}>
                <Image 
                    src={assets.homeavatar}
                    alt="Avatar" 
                    className="flex-col w-30 h-70 md:w-40 md:h-80 transition-all duration-300 hover:scale-102"
                    width={160}
                    height={320}
                />
                
                {isDarkMode && (
                    <div className="absolute inset-0 rounded-lg transition-opacity duration-500"></div>
                )}
            </div>
        </div>
    );
};

export default Avatar;