'use client'
import styles from './Holderallusers.module.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';
import DarkVeil from './DarkVeil';

export default function Holderallusers(){
  const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login');
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const tcontext = useContext(ThemeContext);
  if(!tcontext) return null;
  const {theme, setTheme} = tcontext;
  
  const handleFormSwitch = (form: 'login' | 'signup') => {
    if (isTransitioning || activeForm === form) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveForm(form);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 300);
  };
  
  return(
    <div className={styles.mainContainer}>
      {/* DarkVeil as background */}
      <div className={styles.backgroundVeil}>
        <DarkVeil />
      </div>
      
      {/* Main content container */}
      <div className={`${styles.container} ${activeForm === 'login' ? styles.loginActive : styles.signupActive}`}>
        {/* Theme Toggle */}
        <button 
          className={styles.themeToggle} 
          onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <i className="fi fi-rc-moon-stars"/> : <i className="fi fi-rr-sun"/>}
        </button>
        
        {/* Main Card */}
        <div className={styles.card}>
          {/* Form Tabs */}
          <div className={styles.tabs}>
            <button 
              className={`${styles.tab} ${activeForm === 'login' ? styles.activeTab : ''}`}
              onClick={() => handleFormSwitch('login')}
            >
              <i className="fi fi-rr-sign-in-alt"></i>
              <span>Login</span>
            </button>
            <button 
              className={`${styles.tab} ${activeForm === 'signup' ? styles.activeTab : ''}`}
              onClick={() => handleFormSwitch('signup')}
            >
              <i className="fi fi-rr-user-add"></i>
              <span>Sign Up</span>
            </button>
          </div>
          
          {/* Form Container */}
          <div className={styles.formContainer}>
            {/* Login Form */}
            <div className={`${styles.formWrapper} ${activeForm === 'login' ? styles.active : ''}`}>
              <div className={`${styles.formContent} ${isTransitioning && activeForm === 'login' ? styles.entering : ''}`}>
                <Login />
              </div>
            </div>
            
            {/* Signup Form */}
            <div className={`${styles.formWrapper} ${activeForm === 'signup' ? styles.active : ''}`}>
              <div className={`${styles.formContent} ${isTransitioning && activeForm === 'signup' ? styles.entering : ''}`}>
                <Signup />
              </div>
            </div>
          </div>
          
          {/* Form Footer */}
          <div className={styles.formFooter}>
            {activeForm === 'login' ? (
              <p>
                Dont have an account?{' '}
                <button 
                  className={styles.switchLink}
                  onClick={() => handleFormSwitch('signup')}
                >
                  Sign up here
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  className={styles.switchLink}
                  onClick={() => handleFormSwitch('login')}
                >
                  Login here
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}