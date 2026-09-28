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
        <script dangerouslySetInnerHTML={{ __html: `try {
          if (location.pathname === '/' && !location.hash && window.scrollY === 0 && !localStorage.getItem('mitha-intro-seen') && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.setAttribute('data-mitha-intro', 'compact');
            setTimeout(function () { document.documentElement.removeAttribute('data-mitha-intro'); }, 7000);
          }
        } catch (_) {}` }} />
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
