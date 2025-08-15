import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Privacy() {
  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/images/logo-2.svg" 
            alt="GLOW" 
            width={150} 
            height={40} 
            className={styles.logo} 
            priority 
          />
        </Link>
      </header>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: July 3, 2025</p>
          
          <div className={styles.intro}>
            <p>This Privacy Policy (&ldquo;Policy&rdquo;) explains how Glow Systems Inc. (&ldquo;Glow,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) collects, uses, shares, and protects your information when you access and use our mobile application, website (https://glow.club), and all other related services (collectively, the &ldquo;Services&rdquo;).</p>
            <p>By using Glow, you agree to the terms of this Policy. If you do not agree, please do not use the Services.</p>
            <p className={styles.warning}>Glow is intended only for users who are 18 years of age or older. By using the Services, you confirm that you are at least 18 years old. If you are under 18, you may not access or use the Services.</p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. What We Collect</h2>
            <p>We collect the following types of information:</p>
            
            <div className={styles.subsection}>
              <h3>Information You Provide to Us:</h3>
              <ul>
                <li>Name, username, and profile information</li>
                <li>Email address and contact details</li>
                <li>Wallet address or third-party login credentials</li>
                <li>Communications you send us</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>Automatically Collected Information:</h3>
              <ul>
                <li>Device and usage information</li>
                <li>IP address, browser, operating system, and settings</li>
                <li>In-app behavior (e.g., tokens bought/sold, referral activity)</li>
              </ul>
            </div>
            
            <div className={styles.subsection}>
              <h3>Mobile Device Permissions:</h3>
              <ul>
                <li>Push notification tokens</li>
                <li>Location (if enabled)</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Operate and improve Glow</li>
              <li>Facilitate token interactions, trading, and referrals</li>
              <li>Monitor and prevent fraud or misuse</li>
              <li>Communicate updates or product changes</li>
              <li>Comply with applicable laws</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Sharing and Disclosure</h2>
            <p>We do not sell your personal data. We may share your information:</p>
            <ul>
              <li>With service providers (e.g. analytics, cloud storage, legal)</li>
              <li>To comply with legal obligations or regulatory inquiries</li>
              <li>In connection with a merger, acquisition, or company restructuring</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Your Rights</h2>
            <p>Depending on your region, you may have rights under privacy laws (e.g., GDPR, CCPA) to:</p>
            <ul>
              <li>Access or correct your personal data</li>
              <li>Delete your account or withdraw consent</li>
              <li>Object to or restrict certain types of processing</li>
            </ul>
            <p>To exercise your rights, contact us at <a href="mailto:legal@glow.club">legal@glow.club</a>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Retention</h2>
            <p>We retain your data only as long as needed for the purposes outlined in this Policy or as required by law.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Security</h2>
            <p>We implement reasonable administrative, technical, and physical safeguards to protect your data from unauthorized access, disclosure, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Children&rsquo;s Privacy</h2>
            <p>Glow is not intended for children under 18. We do not knowingly collect or solicit data from individuals under 18. If we become aware that we have collected personal data from a minor, we will take steps to delete such information.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
            <p>Glow may contain links to third-party sites. We are not responsible for their content or privacy practices.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Updates to This Policy</h2>
            <p>We may update this Policy from time to time. Continued use of the Services after changes are posted constitutes your acceptance.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p>For any questions or concerns, contact us at:<br /><a href="mailto:support@glow.club">support@glow.club</a></p>
          </section>
        </div>
      </div>
    </main>
  );
}
