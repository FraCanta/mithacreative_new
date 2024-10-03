import Link from "next/link";
import styles from "./style.module.scss";

export default function Footer2() {
  return (
    <div className="flex flex-wrap gap-10">
      <div className="flex flex-col gap-4">
        <p>Get in touch</p>
        <p className="font-bold underline">info@mithacreative.it</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>Socials</p>
        <div className="flex gap-6">
          <Link
            href="https://www.instagram.com/mitha.creative/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61551739027892"
            target="_blank"
          >
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
