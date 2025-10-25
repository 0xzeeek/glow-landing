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
        poster="/images/background4.png"
      >
        <source src="/videos/background4.mp4" type="video/mp4" />
      </video>
      
      <div className={styles.header}>
        <Image src="/images/logo-3.svg" alt="GLOW" width={111} height={59} priority />
        <div className={styles.headerTitle}>Get paid<br />because it&apos;s<br />you, duh.</div>
        <Link href="#" className={styles.headerDownloadButton}>
          <Image src="/icons/apple.svg" alt="Apple" width={16} height={16} />
          <span>DOWNLOAD COMING SOON</span>
        </Link>
      </div>
{/* 
      <div className={styles.contentContainer}>
        <Image src="/images/app-icon.svg" alt="Glow" width={150} height={150} />
        <div className={styles.downloadButton}>
          Download Coming Soon
        </div>
      </div> */}

      {/* Copyright - positioned at bottom */}
      <div className={styles.footer}>
        <div className={styles.terms}>
          <Link href="https://x.com/thisisglowclub" className={styles.x}>
            <Image src="/icons/x.svg" alt="X" width={20} height={20} />
            <span style={{ color: "#fff" }}>GLOW ON X</span>
          </Link>{" "}
          / <Link href="/privacy">Privacy Policy</Link> / <Link href="/terms">Terms of Use</Link>
          {/* <a href="mailto:support@glow.club">support@glow.club</a> */}
        </div>
        <div className={styles.copyright}><span style={{ fontSize: "20px" }}>&copy;</span> 2025 Glow Systems Inc.</div>
      </div>
    </main>
  );
}
