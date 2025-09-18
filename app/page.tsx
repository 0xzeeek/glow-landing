import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Background video with image fallback */}
      <video
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        poster="/images/background-2.png"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.header}>
        <Image src="/images/logo-2.svg" alt="GLOW" width={147} height={30} priority />
        <div className={styles.headerTitle}>The new way to trade culture.</div>
        <div className={styles.headerSubtitle}>Creator currencies. Powered by fans.</div>
      </div>

      <div className={styles.contentContainer}>
        <Image src="/images/app-icon.svg" alt="Glow" width={150} height={150} />
        <div className={styles.downloadButton}>
          Download Coming Soon
        </div>
      </div>

      {/* Copyright - positioned at bottom */}
      <div className={styles.footer}>
        <div className={styles.terms}>
          <Link href="https://x.com/glowdotclub" className={styles.x}>
            <Image src="/icons/x.svg" alt="X" width={20} height={20} />
            <span style={{ color: "#fff" }}>Glow on X</span>
          </Link>{" "}
          / <Link href="/privacy">Privacy Policy</Link> / <Link href="/terms">Terms of Use</Link>
          {/* <a href="mailto:support@glow.club">support@glow.club</a> */}
        </div>
        <div className={styles.copyright}>&copy; 2025 Glow Systems Inc.</div>
      </div>
    </main>
  );
}
