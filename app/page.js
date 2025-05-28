'use client'
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import ClickSpark from '../components/ui/ClickSpark';
import WavesUI from "../components/ui/WavesUI";

export default function Home() {
  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main className="h-screen">
          <Header />
          
            <PortfolioCard />

          <div className="absolute bottom-0 w-full z-[-1]">
            <WavesUI />
          </div>
        </main>
      </ClickSpark>
    </>
  );
}
