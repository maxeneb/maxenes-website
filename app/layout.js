import { Inter, Ovo } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Providers from "./Providers";

const inter = Inter({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "maxene's desktop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${ovo.className} antialiased bg-background transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
