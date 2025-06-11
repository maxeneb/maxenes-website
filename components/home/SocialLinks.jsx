import { Github, Linkedin, Globe, Facebook } from 'lucide-react';
import { playClickSoundLow } from '../../utils/playClickSound';


const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/maxeneb' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/maxeneborces/' },
    { name: 'Behance', icon: Globe, url: 'https://www.behance.net/maxenenborces' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/chimforkookie/' },
  ];
  const handleSound = () => {
      playClickSoundLow();
  };
  return (
    <div className="flex gap-2 mt-10 md:mt-0 md:gap-6 ">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSound}
            className="flex items-center gap-2 text-sage-dark transition-all duration-300 hover:scale-115"
          >
            <div className="w-8 h-8 bg-sage-medium rounded-full flex items-center justify-center transition-all duration-300 hover:bg-sage-dark">
              <IconComponent size={16} className="text-cream" />
            </div>
            <span className="hidden md:inline text-xs">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
