"use client";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import ClickSpark from "../components/ui/ClickSpark";
import { useDarkMode } from "./contexts/DarkModeContext";
import FallingLeaves from "../components/ui/FallingLeaves";
import BackgroundMusic from "../components/ui/BackgroundMusic";
import Script from "next/script";
import BotpressChatbot from "../components/ui/BotpressChatbot";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  const backgroundImage = isDarkMode
    ? "./images/bg-night.png"
    : "./images/bg2-day.jpg";

  return (
    <>
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main
          className="min-h-screen w-full transition-colors duration-300 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <BackgroundMusic
            volume={0.5}
            autoPlay={true}
            showControls={true}
          />
          <FallingLeaves
            numLeaves={15}
            windMaxSpeed={5}
            isDarkMode={isDarkMode}
          />
          <Header />
          <PortfolioCard />
          
          <div className="fixed bottom-4 right-4 z-50">
            <BotpressChatbot />
          </div>
        </main>
      </ClickSpark>
    </>
  );
}