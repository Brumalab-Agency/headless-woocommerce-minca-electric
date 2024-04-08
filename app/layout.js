import { Inter } from "next/font/google";
import "@/globals.css";
import "@/animation.css";
import "@/mediaQueries.css";
import { AppProvider } from "./components/context/Context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "./components/smoothscrool/SmoothScroll";
import Whatsapp from "./components/whatsapp/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MINCA",
  description:
    "Muévete sostenible, con estilo y eficiencia. Muévete con Minca.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="es">
        <body id="up" className={`${inter.className} m-auto max-w-[2560px]`}>
          <div id="scrollbar"></div>
          <SmoothScroll>
            {children}
            <Whatsapp/>
          </SmoothScroll>
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </AppProvider>
  );
}
