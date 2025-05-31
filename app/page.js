"use client";
import Header from "../components/Header";
import PortfolioCard from "../components/PortfolioCard";
import ClickSpark from "../components/ui/ClickSpark";
import Waves from "../components/ui/Waves";

export default function Home() {
  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="h-screen transition-colors duration-300">
        <Header />
        <PortfolioCard />
        <div className="absolute bottom-0 w-full">
          {/* <Waves /> */}
        </div>
      </main>
    </ClickSpark>
  );
}
