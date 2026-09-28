"use client";

import { motion } from "framer-motion";
import styles from "./hero-intro.module.css";

export default function HeroIntro({ phase, flights, sourceRef, onTravelComplete }) {
  if (["details", "menu", "done"].includes(phase)) return null;
  return (
    <motion.div className={styles.overlay} aria-hidden="true" data-lenis-prevent initial={false} animate={{ opacity: phase === "image" ? 0 : 1 }} transition={{ duration: 0.35 }}>
      {phase === "pending" || phase === "compact" ? (
        <motion.div
          ref={sourceRef}
          className={styles.phrase}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.phraseRow}><span data-intro-word="we">WE</span><span data-intro-word="make">MAKE</span></div>
          <div className={styles.phraseRow}><span className={styles.creative}><span data-intro-word="cre">CRE</span><span data-intro-word="ative">ATIVE</span></span></div>
          <div className={styles.phraseRow}><span data-intro-word="things">THINGS</span><span data-intro-word="everyday">EVERYDAY</span></div>
        </motion.div>
      ) : flights.map((word, index) => (
        <motion.span key={word.id} className={styles.word}
          style={{ left: word.left, top: word.top, width: word.width, height: word.height, fontSize: word.fontSize, fontFamily: word.fontFamily, lineHeight: word.lineHeight }}
          initial={{ x: word.x, y: word.y, scaleX: word.scaleX, scaleY: word.scaleY }}
          animate={{ x: 0, y: 0, scaleX: 1, scaleY: 1 }}
          transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={index === flights.length - 1 && phase === "travel" ? onTravelComplete : undefined}
        >{word.text}</motion.span>
      ))}
    </motion.div>
  );
}
