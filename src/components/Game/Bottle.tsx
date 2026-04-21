"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Bottle.module.css';

interface BottleProps {
  rotation?: number;
  isIdle?: boolean;
  isSpinning?: boolean;
  shape?: 'classic' | 'alsace' | 'bordeaux' | 'burgundy' | 'champagne' | 'port' | 'provence';
}

const Bottle: React.FC<BottleProps> = ({ rotation = 0, isIdle = false, isSpinning = false, shape = 'classic' }) => {
  return (
    <motion.div 
      className={`${styles.bottleContainer} ${isIdle ? 'float-animation' : ''} ${isSpinning ? styles.spinning : ''}`}
      animate={{ rotate: rotation }}
      transition={isSpinning ? { duration: 4, ease: "easeOut" } : { type: 'spring', damping: 20, stiffness: 50 }}
    >
      <div className={`${styles.bottle} ${styles[shape]}`}>
        {/* Cap */}
        <div className={styles.cap}></div>
        {/* Neck */}
        <div className={styles.neck}></div>
        {/* Shoulder */}
        <div className={styles.shoulder}></div>
        {/* Body */}
        <div className={styles.body}>
          {/* Highlights and Reflections */}
          <div className={styles.highlight}></div>
          <div className={styles.reflection}></div>
          <div className={styles.label}>
             <span className={styles.labelText}>Premium</span>
          </div>
        </div>
      </div>
      {/* Shadow */}
      <div className={styles.shadow}></div>
    </motion.div>
  );
};

export default Bottle;
