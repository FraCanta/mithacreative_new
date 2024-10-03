import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer2() {
  return (
    <div className={styles.footer2}>
      <Link href="https://www.instagram.com/mitha.creative/" target="_blank">
        Instagram
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=61551739027892"
        target="_blank"
      >
        Facebook
      </Link>
      <Link href="/">Dribble</Link>
      <div></div>
    </div>
  );
}
