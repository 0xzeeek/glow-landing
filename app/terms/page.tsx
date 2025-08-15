import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Terms() {
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
          <h1 className={styles.title}>Glow Website Terms of Use</h1>
          <p className={styles.lastUpdated}>Last Updated: July 3, 2025</p>
          
          <div className={styles.intro}>
            <p>PLEASE READ THIS AGREEMENT CAREFULLY. IT SETS FORTH THE LEGALLY BINDING TERMS AND CONDITIONS GOVERNING YOUR USE OF THE GLOW WEBSITE, MOBILE APPLICATION, SOFTWARE, AND ANY RELATED SERVICES OR CONTENT (COLLECTIVELY, THE &ldquo;INTERFACE&rdquo;). BY ACCESSING OR USING THE INTERFACE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE (THE &ldquo;TERMS&rdquo;).</p>
            <p className={styles.warning}>IF YOU DO NOT AGREE WITH ANY PROVISION OF THESE TERMS, YOU MUST NOT ACCESS OR USE THE INTERFACE.</p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
            <div className={styles.subsection}>
              <h3>1.1 Binding Agreement.</h3>
              <p>These Terms constitute a binding agreement between you (&ldquo;you,&rdquo; &ldquo;your,&rdquo; or &ldquo;User&rdquo;) and Glow Systems Inc. (&ldquo;Glow,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>
            </div>
            <div className={styles.subsection}>
              <h3>1.2 Supplemental Policies.</h3>
              <p>These Terms incorporate by reference our Privacy Policy and any other supplemental policies. If there is a conflict between these Terms and any policy, these Terms will control unless explicitly stated otherwise.</p>
            </div>
            <div className={styles.subsection}>
              <h3>1.3 Changes to Terms.</h3>
              <p>We may revise these Terms at any time. Updates will be effective upon posting. Material changes will be announced via banner or email 30 days in advance. Continued use of the Interface after changes means you accept them.</p>
            </div>
            <div className={styles.subsection}>
              <h3>1.4 Electronic Signature.</h3>
              <p>You consent to using electronic signatures and agree that clicking &ldquo;I Agree,&rdquo; &ldquo;Accept,&rdquo; or similar has the same legal effect as a handwritten signature.</p>
            </div>
            <div className={styles.subsection}>
              <h3>1.5 Legal Compliance Warranty.</h3>
              <p>You are solely responsible for ensuring your use of the Interface complies with all applicable laws and regulations.</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Definitions</h2>
            <ul className={styles.definitionsList}>
              <li><strong>&ldquo;Digital Assets&rdquo;</strong> means any cryptographically secured tokens, including but not limited to cryptocurrencies, stablecoins, and social tokens.</li>
              <li><strong>&ldquo;Glow Interface&rdquo;</strong> or <strong>&ldquo;Interface&rdquo;</strong> refers to the Glow mobile app, website (https://glow.club), and any related tools.</li>
              <li><strong>&ldquo;Self-Custody Wallet&rdquo;</strong> means a wallet you solely control. Glow does not store or manage your keys.</li>
              <li><strong>&ldquo;Third-Party Services&rdquo;</strong> refers to services not operated by Glow but accessible via the Interface.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Platform Description – No Custody, Brokerage, or Advice</h2>
            <div className={styles.subsection}>
              <h3>3.1 Non-Custodial Architecture.</h3>
              <p>Glow never takes possession of or control over Digital Assets or private keys. Transactions are initiated and signed via your wallet.</p>
            </div>
            <div className={styles.subsection}>
              <h3>3.2 No Financial Intermediary Role.</h3>
              <p>Glow is not a broker, dealer, custodian, or advisor and does not:</p>
              <ul>
                <li>Provide trading execution or order-matching,</li>
                <li>Act as a counterparty to any trade,</li>
                <li>Offer investment, legal, or tax advice.</li>
              </ul>
            </div>
            <div className={styles.subsection}>
              <h3>3.3 Informational Nature.</h3>
              <p>All content is for informational purposes only. Use of the Interface is at your own risk.</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Eligibility & Geographic Restrictions</h2>
            <p>You must be 18+ and legally permitted to use the Interface. You may not use the Interface if you reside in or are subject to sanctions from jurisdictions including, but not limited to, Cuba, Iran, North Korea, Syria, or certain regions of Ukraine.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. User Responsibilities</h2>
            <div className={styles.subsection}>
              <h3>5.1 Security.</h3>
              <p>Keep your wallet keys and device secure. We are not responsible for lost access or assets.</p>
            </div>
            <div className={styles.subsection}>
              <h3>5.2 Transaction Review.</h3>
              <p>You are responsible for confirming transaction details. Transactions are irreversible.</p>
            </div>
            <div className={styles.subsection}>
              <h3>5.3 Tax Compliance.</h3>
              <p>You are responsible for determining and meeting your tax obligations.</p>
            </div>
            <div className={styles.subsection}>
              <h3>5.4 Third-Party Use.</h3>
              <p>Use of third-party services via Glow is at your own risk.</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Risks</h2>
            <p>Using Digital Assets involves significant risk. You accept risks including:</p>
            <ul>
              <li>Market volatility</li>
              <li>Smart contract vulnerabilities</li>
              <li>Regulatory uncertainty</li>
              <li>Network downtime or errors</li>
            </ul>
            <p>Glow does not guarantee performance, value, or access and assumes no liability for any such losses.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Prohibited Conduct</h2>
            <p>You may not:</p>
            <ul>
              <li>Violate laws or regulations</li>
              <li>Interfere with the Interface</li>
              <li>Engage in manipulation or fraud</li>
              <li>Use bots or automated systems</li>
              <li>Post infringing or harmful content</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Intellectual Property</h2>
            <p>Glow and its licensors own all rights in the Interface. Subject to your compliance with these Terms, Glow grants you a limited, non-transferable license to use the Interface for lawful personal use.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Termination</h2>
            <p>Glow may suspend or terminate your access at any time, for any reason, with or without notice.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Disclaimers & Limitation of Liability</h2>
            <p className={styles.allCaps}>THE INTERFACE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE.&rdquo; GLOW DISCLAIMS ALL WARRANTIES AND WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. OUR LIABILITY SHALL NOT EXCEED $100.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Indemnification</h2>
            <p>You agree to indemnify Glow for any losses or claims arising from your use of the Interface or violation of these Terms.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Governing Law & Dispute Resolution</h2>
            <p>These Terms are governed by the laws of Delaware. Disputes will be resolved via binding arbitration in Wilmington, DE, under AAA rules. Class actions and jury trials are waived.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Contact Information</h2>
            <p>Glow Systems Inc.<br />Email: <a href="mailto:support@glow.club">support@glow.club</a></p>
          </section>
        </div>
      </div>

      {/* Copyright - positioned at bottom */}
      <div className={styles.copyright}>
        <Image 
          src="/images/copywrite.svg" 
          alt="© 2025" 
          width={80} 
          height={40} 
          className={styles.copyrightImage} 
        />
        <div className={styles.terms}>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="mailto:support@glow.club">support@glow.club</a>
        </div>
      </div>
    </main>
  );
}
