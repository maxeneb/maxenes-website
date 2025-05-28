import { Github, Linkedin, Globe, Facebook } from 'lucide-react';
import { playClickSound } from '../../utils/playClickSound';

const SocialLinks = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Behance', icon: Globe, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
  ];

  return (
    <div className="flex gap-2 mt-10 md:mt-0 md:gap-6">
      {socialLinks.map((link) => {
        const IconComponent = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="flex items-center gap-2 text-sage-dark transition-all duration-300 hover:scale-115"
          >
            <div className="w-8 h-8 bg-sage-dark rounded-full flex items-center justify-center transition-all duration-300">
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
