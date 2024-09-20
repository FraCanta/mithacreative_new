import "./globals.css";
import "./marquee.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { ThemeProvider } from "next-themes";

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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
