"use client";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import ClickSpark from "../components/ui/ClickSpark";
import { useDarkMode } from "./contexts/DarkModeContext";
import FallingLeaves from "../components/ui/FallingLeaves";
import BackgroundMusic from "../components/ui/BackgroundMusic";
import Script from "next/script";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  const backgroundImage = isDarkMode
    ? "./images/bg-night.png"
    : "./images/bg2-day.jpg";

  return (
    <>
      {/* <Script
        src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Botpress inject script loaded')}
      />
      <Script
        src="https://files.bpcontent.cloud/2025/06/10/16/20250610164636-V67XPJH7.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Botpress bot script loaded')}
      /> */}

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main
          className="h-screen transition-colors duration-300 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
          <BackgroundMusic
            src="./sounds/bg-music.mp3"
            volume={0.5}
            autoPlay={true}
            showControls={true}
          />
          <FallingLeaves
            numLeaves={15}
            windMaxSpeed={5}
            lightLeafImage="images/leaf.svg"
            darkLeafImage="images/leaf-night.svg"
            isDarkMode={isDarkMode}
          />
          <Header />
          <PortfolioCard />
          
          <div className="absolute bottom-0 w-full"></div>
        </main>
      </ClickSpark>
    </>
  );
}
