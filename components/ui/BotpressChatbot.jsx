'use client';

import { useEffect, useRef } from 'react';

const BotpressChatbot = ({ 
  className = '' 
}) => {
  const webchatRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadBotpress = async () => {
      if (scriptLoadedRef.current || window.botpress) {
        initializeBotpress();
        return;
      }

      try {
        const script = document.createElement('script');
        script.src = 'https://cdn.botpress.cloud/webchat/v3.0/inject.js';
        script.async = true;
        
        script.onload = () => {
          scriptLoadedRef.current = true;
          initializeBotpress();
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading Botpress:', error);
      }
    };

    const initializeBotpress = () => {
      if (!window.botpress) return;

      const style = document.createElement('style');

      document.head.appendChild(style);

      window.botpress.init({
        "botId": "dcdb328c-bed3-4ebc-89f9-09940c14a66b",
        "configuration": {
          "version": "v1",
          "composerPlaceholder": "Ask anything about Max...",
          "botName": "Junimo",
          "botAvatar": "https://files.bpcontent.cloud/2025/06/10/17/20250610171106-T58OU62I.jpeg",
          "botDescription": "A forest spirit guiding this desktop.",
          "fabImage": "./images/junimo.svg",
          "website": {
            "title": "https://github.com/maxeneb",
            "link": "https://github.com/maxeneb"
          },
          "email": {
            "title": "maxenenborces@gmail.com",
            "link": "maxenenborces@gmail.com"
          },
          "phone": {
            "title": "09762087417",
            "link": "09762087417"
          },
          "color": "#3276EA",
          "variant": "soft",
          "headerVariant": "glass",
          "themeMode": "dark",
          "fontFamily": "fira",
          "radius": 1.5,
          "feedbackEnabled": false,
          "footer": "maxeneb 🍃🌱"
        },
        "clientId": "4d71401c-bb16-4c47-ad08-fdf6f13f7965"
      });

    };

    loadBotpress();

    return () => {
      if (window.botpress && window.botpress.destroy) {
        window.botpress.destroy();
      }
    };
  }, []);

  return <div className={className} />;
};

export default BotpressChatbot;