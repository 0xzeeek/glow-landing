import Image from "next/image";
import styles from "./page.module.css";

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
      </div>
    </main>
  );
}
