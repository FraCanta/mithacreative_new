import "./globals.css";
import "./marquee.css";

import Footer from "./components/Footer/Footer";

import { ThemeProvider } from "next-themes";
import Header from "./components/Header/Header";
import ContactRound from "./components/ContactRound/ContactRound";
export const metadata = {
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.io",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <ContactRound />
      </body>
    </html>
  );
}
