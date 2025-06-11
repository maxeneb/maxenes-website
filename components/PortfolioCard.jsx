import HeaderIcons from "./HeaderIcons";
import Navigation from "./Navigation";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import WorkPage from "./work/WorkPage";
import { useState } from 'react';

const PortfolioCard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'about me':
        return <AboutPage />;
      case 'my works':
        return <WorkPage />;
      // case 'contact':
      //   return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex items-center justify-center p-4 md:p-8">
      <div className="rounded-2xl shadow-lg border-2 border-sage-medium w-full max-w-3xl">
        
        <div className="bg-sage-light flex justify-between items-center p-3 md:p-4 rounded-t-2xl">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          <HeaderIcons />
        </div>

        <div className="bg-gradient-cream-sage p-4 md:p-8 rounded-b-2xl">
          {renderTabContent()}
        </div>

      </div>
    </div>
  );
};

export default PortfolioCard;