'use client'
import styles from './Holderallusers.module.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';

export default function Holderallusers(){
  const [onof, setOnof] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  const tcontext = useContext(ThemeContext);
  if(!tcontext) return null;
  const {theme, setTheme} = tcontext;
  
  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOnof(prev => !prev);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };
  
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.sliderContainer} ${isAnimating ? styles.animating : ''}`}>
          <div 
            className={styles.slide}
            style={{ transform: `translateX(${onof ? '-100%' : '0%'})` }}
          >
            <div className={styles.formWrapper}>
              <Login/>
            </div>
            <div className={styles.formWrapper}>
              <Signup/>
            </div>
          </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <button 
            className={`${styles.btncented} ${isAnimating ? styles.disabled : ''}`} 
            onClick={handleToggle}
          >
            {!onof ? <i className="fi fi-rr-pencil"></i> : <i className="fi fi-br-running"></i>}
          </button>
        </div>
      </div>
      
      <div className={styles.themeToggleContainer}>
        <button className={styles.themeToggle} onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}>
          {theme === "light" ? <i className="fi fi-rc-moon-stars"/> : <i className="fi fi-rr-sun"/>}
        </button>
      </div>
    </div>
  )
}