"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';
import { Info, Sparkles, Zap, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.content}
      >
        <h1 className={styles.title}>About Bottle Spinner</h1>
        <p className={styles.subtitle}>The most realistic and premium bottle spinning experience on the web.</p>
        
        <div className={styles.grid}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <Sparkles className={styles.icon} />
            <h3>Premium Design</h3>
            <p>Built with glassmorphism and modern UI principles for a stunning look.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <Zap className={styles.icon} />
            <h3>Fast & Smooth</h3>
            <p>Optimized animations using Framer Motion for a fluid experience.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <Shield className={styles.icon} />
            <h3>Fair Play</h3>
            <p>Our randomizer ensures every spin is completely unbiased.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <Info className={styles.icon} />
            <h3>Community</h3>
            <p>Save your results and play with friends anywhere in the world.</p>
          </div>
        </div>

        <div className={styles.footer}>
          <p>© 2026 Bottle Spinner Game. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
