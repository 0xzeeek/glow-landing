import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Content Container */}
      {/* GLOW Logo */}
      <div className={styles.logoWrapper}>
        <Image src="/images/logo-2.svg" alt="GLOW" width={1000} height={250} className={styles.logo} priority />
      </div>

      <div className={styles.contentContainer}>
        {/* Tagline */}
        {/* <div className={styles.tagline}>
          <p className={styles.taglineText}>The new way to trade culture.</p>
          <p className={styles.taglineText}>Your own currency. Built with your fans.</p>
        </div> */}
      </div>

      {/* Copyright - positioned at bottom */}
      <div className={styles.copyright}>
        <Image src="/images/copywrite.svg" alt="© 2025" width={80} height={40} className={styles.copyrightImage} />
        <div className={styles.terms}>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="mailto:support@glow.club">support@glow.club</a>
        </div>
      </div>
    </main>
  );
}
