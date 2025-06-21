'use client';

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <ul className={styles.footerLinks}>
        <li><Link href="/legal/terms">Terms</Link></li>
        <li><Link href="/legal/privacy">Privacy</Link></li>
        <li><Link href="/gdpr/compliance">GDPR</Link></li>
        </ul>

        <div className={styles.socialIcons}>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="LinkedIn">🔗</a>
        </div>
        <div className={styles.footerText}>
                <span>Meet the team</span>
                <span className={styles.separator}>|</span>
                <span>Contact Us - <a href="mailto:nonprofit.npx@nagarro.com">nonprofit.npx@nagarro.com</a></span>
                <span className={styles.separator}>|</span>
                <span>Powered by - <span className={styles.highlight}>Nagarro Non Profit</span></span>
        </div>
    </footer>
  );
};

export default Footer;
