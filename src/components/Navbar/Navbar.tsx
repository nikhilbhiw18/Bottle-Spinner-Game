"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.logoIcon} style={{ color: '#3b82f6' }}>
            <path d="M8 20V10c0-2 1-3 2-4V4c0-1.1.9-2 2-2s2 .9 2 2v2c1 1 2 2 2 4v10c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2z" fill="rgba(59, 130, 246, 0.2)" />
            <path d="M9 10h6" />
            <path d="M12 2v4" />
          </svg>
          <span>Bottle Spinner</span>
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/play">Play</Link>
        </div>
        
        <div className={styles.auth}>
          <Link href="/auth" className="btn-primary">Login / Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
