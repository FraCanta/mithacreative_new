"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ContactRound() {
  const [isVisible, setIsVisible] = useState(false);
  // Funzione per controllare lo scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Cambia il valore se vuoi farlo apparire più in basso o in alto
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Aggiungi il listener per lo scroll
    window.addEventListener("scroll", toggleVisibility);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <Link
      href="/contatti"
      className={`fixed right-3 bottom-3 lg:bottom-10 lg:right-10 w-min-custom h-min-custom transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="absolute inset-0 w-full h-full text-[#888] animate-spin-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 150 150"
        >
          <g fill="currentColor" fontSize="10.31" letterSpacing="0em">
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.991883 -0.127154 0.126233 -0.992001 69.4043 150)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.957892 -0.28713 0.28519 -0.958471 58.0293 148.248)"
            >
              <tspan x="0" y="9.51">
                o
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.896427 -0.443191 0.440566 -0.89772 45.7773 143.867)"
            >
              <tspan x="0" y="9.51">
                n
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.824702 -0.565568 0.562728 -0.826642 35.2754 138.61)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.733564 -0.679621 0.676917 -0.73606 27.4004 133.354)"
            >
              <tspan x="0" y="9.51">
                a
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.613449 -0.789734 0.787533 -0.616273 18.6504 123.716)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.49965 -0.866227 0.864623 -0.502421 11.6484 114.954)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.192236 -0.981349 0.981079 -0.193607 2.02344 92.1758)"
            >
              <tspan x="0" y="9.51">
                -
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.152541 -0.988297 0.988126 0.153645 0.273438 66.7676)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.310564 -0.950553 0.949871 0.312641 2.89844 55.3779)"
            >
              <tspan x="0" y="9.51">
                o
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.46429 -0.885683 0.884266 0.466983 7.27344 43.9883)"
            >
              <tspan x="0" y="9.51">
                n
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.584538 -0.811366 0.809312 0.587379 13.3984 33.4746)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.696295 -0.717756 0.715182 0.698939 18.6504 25.5889)"
            >
              <tspan x="0" y="9.51">
                a
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.803698 -0.595038 0.592199 0.805792 28.2754 16.8281)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.877734 -0.479148 0.476425 0.879215 37.0273 10.6943)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.985907 -0.167293 0.166096 0.98611 59.7793 1.93262)"
            >
              <tspan x="0" y="9.51">
                -
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.983662 0.180024 -0.178742 0.983896 85.1562 1.05664)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.941173 0.337925 -0.335721 0.941962 96.5332 2.80957)"
            >
              <tspan x="0" y="9.51">
                o
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.871477 0.490437 -0.48769 0.873017 108.783 8.06641)"
            >
              <tspan x="0" y="9.51">
                n
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.793348 0.608768 -0.605938 0.795512 118.41 14.1992)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.696295 0.717756 -0.715182 0.698939 125.41 20.332)"
            >
              <tspan x="0" y="9.51">
                a
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.570533 0.821274 -0.819293 0.573375 134.162 29.0938)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.452867 0.891578 -0.890221 0.455528 140.287 38.7305)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(0.139841 0.990174 -0.99003 0.140857 149.039 61.5107)"
            >
              <tspan x="0" y="9.51">
                -
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.204819 0.9788 -0.978495 -0.206273 149.039 86.918)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.360644 0.932704 -0.931803 -0.362965 146.412 98.3076)"
            >
              <tspan x="0" y="9.51">
                o
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.510748 0.85973 -0.858067 -0.513537 141.162 110.574)"
            >
              <tspan x="0" y="9.51">
                n
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.626912 0.77909 -0.776823 -0.62972 135.037 120.212)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.733564 0.679621 -0.676917 -0.73606 128.91 127.22)"
            >
              <tspan x="0" y="9.51">
                a
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.834308 0.551299 -0.548467 -0.836172 119.285 135.981)"
            >
              <tspan x="0" y="9.51">
                c
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.902075 0.43158 -0.428991 -0.903309 109.658 142.115)"
            >
              <tspan x="0" y="9.51">
                t
              </tspan>
            </text>
            <text
              style={{ whiteSpace: "pre" }}
              transform="matrix(-0.993444 0.114319 -0.113489 -0.993539 86.0312 149.124)"
            >
              <tspan x="0" y="9.51">
                -
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <div
        className="absolute inset-[15%] overflow-hidden rounded-[50%] bg-white flex items-center justify-center"
        style={{
          translate: "none",
          rotate: "none",
          scale: "none",
          willChange: "auto",
          transform: "translate(0px, 0px)",
        }}
      >
        <Image
          src="/assets/contact2.webp"
          alt="omino telefono"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </Link>
  );
}

export default ContactRound;
