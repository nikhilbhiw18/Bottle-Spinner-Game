"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Bottle from '@/components/Game/Bottle';
import styles from './page.module.css';
import { Play, Info, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>New Experience</span>
            <h1 className={styles.title}>
              Spin the Bottle <br />
              <span className={styles.gradientText}>Realistic, Fun, Interactive</span>
            </h1>
            <p className={styles.description}>
              Experience the classic game in a stunning premium dashboard. 
              Realistic physics, glassmorphism UI, and smooth animations.
            </p>
            
            <div className={styles.ctaGroup}>
              <Link href="/play" className="btn-primary">
                <Play size={20} fill="currentColor" />
                Play Now
              </Link>
              <Link href="/about" className="btn-secondary">
                <Info size={20} />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.visualContainer}>
            <div className={styles.glowEffect}></div>
            <Bottle isIdle={true} />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureGrid}>
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div className={styles.featureIcon}><ShieldCheck size={32} /></div>
            <h3>Fair Physics</h3>
            <p>Our rotation algorithm ensures realistic momentum and friction.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
             <div className={styles.featureIcon}><Play size={32} /></div>
            <h3>7+ Bottle Types</h3>
            <p>Select from various realistic glass bottle shapes and brands.</p>
          </div>
          <div className="glass-panel" style={{ padding: '32px' }}>
             <div className={styles.featureIcon}><ShieldCheck size={32} /></div>
            <h3>Local & Online</h3>
            <p>Play with friends locally or save your player data online.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
