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
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="relative">
        <ThemeProvider attribute="class">
          <a href="#contenuto" className="skip-link">Vai al contenuto</a>
          <Header />
          <main id="contenuto" tabIndex={-1}>{children}</main>
          <Footer />
        </ThemeProvider>
        <ContactRound />
      </body>
    </html>
  );
}
