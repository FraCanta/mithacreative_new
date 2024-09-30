"use client";
import { usePathname } from "next/navigation"; // Usa usePathname invece di useRouter

export default function Footer() {
  const pathname = usePathname(); // Ottieni l'URL corrente con usePathname

  // Nascondi la navbar se ci troviamo in /inizia-il-progetto
  if (pathname === "/inizia-il-progetto") {
    return null; // Non renderizza nulla se l'URL è /inizia-il-progetto
  }
  return (
    <div
      className="relative h-[600px] bg-primary dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[600px] sticky top-[calc(100vh-600px)]">
          <div className="flex items-end justify-between text-white dark:text-primary">
            <h1 className="text-8xl leading-[0.8] mt-10">Sticky Footer</h1>
            <p>©copyright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
