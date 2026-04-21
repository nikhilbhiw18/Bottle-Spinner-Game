"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './auth.module.css';
import { Mail, Lock, User, Globe } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.container}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel"
        style={{ width: '100%', maxWidth: '450px', padding: '48px' }}
      >
        <div className={styles.header}>
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Enter your details to continue' : 'Join us for a better experience'}</p>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className={styles.inputGroup}>
              <User size={20} className={styles.icon} />
              <input type="text" placeholder="Full Name" className={styles.input} />
            </div>
          )}
          
          <div className={styles.inputGroup}>
            <Mail size={20} className={styles.icon} />
            <input type="email" placeholder="Email Address" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <Lock size={20} className={styles.icon} />
            <input type="password" placeholder="Password" className={styles.input} />
          </div>

          <button className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className={styles.divider}>
          <span>Or continue with</span>
        </div>

        <button className={styles.socialBtn}>
          <Globe size={20} />
          Github
        </button>

        <div className={styles.footer}>
          <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
          <button onClick={() => setIsLogin(!isLogin)} className={styles.toggleBtn}>
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
