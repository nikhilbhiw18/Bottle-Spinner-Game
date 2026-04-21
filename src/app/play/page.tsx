"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Bottle from '@/components/Game/Bottle';
import styles from './play.module.css';
import { ChevronRight, RotateCcw, Users } from 'lucide-react';

type GameState = 'setup' | 'playing' | 'result';

const PlayPage = () => {
  const [gameState, setGameState] = useState<GameState>('setup');
  const [numPlayers, setNumPlayers] = useState(4);
  const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2', 'Player 3', 'Player 4']);
  const [selectedBottle, setSelectedBottle] = useState<'classic' | 'alsace' | 'bordeaux' | 'burgundy' | 'champagne' | 'port' | 'provence'>('classic');
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  // Sound effects
  const playSound = (url: string, loop = false, volume = 1) => {
    const audio = new Audio(url);
    audio.loop = loop;
    audio.volume = volume;
    audio.play().catch(() => {});
    return audio;
  };

  const handleStartGame = () => {
    playSound('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', false, 0.8); // Cork pop
    setGameState('playing');
  };

  const handleReset = () => {
    setRotation(0);
    setIsSpinning(false);
    setWinner(null);
    setGameState('setup');
  };

  const handleSpin = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setWinner(null);
    
    const spinSound = playSound('https://assets.mixkit.co/active_storage/sfx/1110/1110-preview.mp3', true, 0.4); // Glass spin
    
    const extraSpins = 8 + Math.random() * 10;
    const finalRotation = rotation + extraSpins * 360 + Math.random() * 360;
    
    setRotation(finalRotation);
    
    // Gradual sound fade out
    const duration = 4000;
    const fadeInterval = setInterval(() => {
      if (spinSound.volume > 0.05) {
        spinSound.volume -= 0.05;
      }
    }, duration / 8);

    setTimeout(() => {
      clearInterval(fadeInterval);
      spinSound.pause();
      setIsSpinning(false);
      
      // 1. Normalize angle to 0-360
      const normalizedRotation = ((finalRotation % 360) + 360) % 360;
      
      // 2. Calculate angle per player
      const anglePerPlayer = 360 / numPlayers;
      
      // 3. Determine selected index using rounding for best precision
      // The tip of the bottle (head) points to the selected player
      const winningIndex = Math.round(normalizedRotation / anglePerPlayer) % numPlayers;
      
      setWinner(players[winningIndex]);
    }, duration);
  };

  const updatePlayerName = (index: number, name: string) => {
    const newPlayers = [...players];
    newPlayers[index] = name;
    setPlayers(newPlayers);
  };

  const handleNumPlayersChange = (val: number) => {
    setNumPlayers(val);
    setPlayers(Array.from({ length: val }, (_, i) => players[i] || `Player ${i + 1}`));
  };

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        {gameState === 'setup' && (
          <motion.div 
            key="setup"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.setupCard}
          >
            <div className="glass-panel" style={{ padding: '40px' }}>
              <h2 className={styles.setupTitle}>Game Setup</h2>
              
              <div className={styles.setupSection}>
                <label>Number of Players</label>
                <div className={styles.stepper}>
                  <button onClick={() => handleNumPlayersChange(Math.max(2, numPlayers - 1))}>-</button>
                  <span>{numPlayers}</span>
                  <button onClick={() => handleNumPlayersChange(Math.min(12, numPlayers + 1))}>+</button>
                </div>
              </div>

              <div className={styles.setupSection}>
                <label>Player Names</label>
                <div className={styles.playerInputs}>
                  {players.map((name, i) => (
                    <input 
                      key={i}
                      type="text" 
                      value={name} 
                      onChange={(e) => updatePlayerName(i, e.target.value)}
                      className={styles.input}
                      placeholder={`Player ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className={styles.setupSection}>
                <label>Select Bottle</label>
                <div className={styles.bottleCarousel}>
                  {['alsace', 'bordeaux', 'burgundy', 'champagne', 'port', 'provence', 'classic'].map((shape) => (
                    <div 
                      key={shape} 
                      className={`${styles.bottleThumb} ${selectedBottle === shape ? styles.activeBottle : ''}`}
                      onClick={() => setSelectedBottle(shape as 'classic' | 'alsace' | 'bordeaux' | 'burgundy' | 'champagne' | 'port' | 'provence')}
                    >
                      <div className={styles.thumbScale}>
                        <Bottle shape={shape as 'classic' | 'alsace' | 'bordeaux' | 'burgundy' | 'champagne' | 'port' | 'provence'} isSpinning={false} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%', marginTop: '32px' }} onClick={handleStartGame}>
                Start Game <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div 
            key="playing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className={styles.gameArea}
          >
            <div className={styles.table}>
               {/* Player Indicators */}
               <div className={styles.indicators}>
                 {players.map((name, i) => {
                   const angle = (i * 360) / numPlayers;
                   return (
                     <div 
                       key={i} 
                       className={`${styles.playerIndicator} ${winner === name ? styles.winnerIndicator : ''}`}
                       style={{ 
                         transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-310px) rotate(${-angle}deg)` 
                       }}
                     >
                       <div className={styles.playerAvatar}>
                         <Users size={16} />
                       </div>
                       <span className={styles.playerName}>{name}</span>
                     </div>
                   );
                 })}
               </div>

               <div className={styles.bottleInteraction} onClick={handleSpin}>
                 <Bottle rotation={rotation} shape={selectedBottle} isSpinning={isSpinning} />
               </div>
            </div>

            <div className={styles.controls}>
              {winner ? (
                <div className={styles.result}>
                  <h3>Selected: <span className={styles.winnerName}>{winner}</span></h3>
                  <div className={styles.resultActions}>
                    <button className="btn-primary" onClick={handleSpin}>Spin Again</button>
                    <button className="btn-secondary" onClick={handleReset}>
                      <RotateCcw size={18} /> Reset
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  className={`${styles.spinButton} ${isSpinning ? styles.disabled : ''}`} 
                  onClick={handleSpin}
                  disabled={isSpinning}
                >
                  {isSpinning ? 'Spinning...' : 'Click Bottle or Me to Spin'}
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PlayPage;
