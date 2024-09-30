export const metadata = {
  title: "Parliamo del tuo",
};
export default function IniziaProgettoLayout({ children }) {
  return (
    <div>
      {/* Navbar non inclusa in questo layout */}
      {children}
    </div>
  );
}
