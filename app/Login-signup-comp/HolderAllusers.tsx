'use client'
import styles from './Holderallusers.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Login from './Login';
import Signup from './Signup';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeProvider';
import DarkVeil from './DarkVeil';
import Message from '../Components/Message';

export default function Holderallusers(){
  const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login');
  const routes=useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showms,setShowms]=useState<boolean>(false);
  const [fmsx,setFmsx]=useState<boolean>(false)
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
  const getms=()=>{
    setShowms(true);
    const time = setInterval(() => {
      setShowms(false);
      routes.push('/Home');
    }, 5000);
    return ()=> clearInterval(time);
  }
   const fms=()=>{
    setFmsx(true);
    const time = setInterval(() => {
      setFmsx(false);
      routes.push('/Home');
    }, 5000);
    return ()=> clearInterval(time);
  }
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
                <Login getms={getms}/>
              </div>
            </div>
            
            {/* Signup Form */}
            <div className={`${styles.formWrapper} ${activeForm === 'signup' ? styles.active : ''}`}>
              <div className={`${styles.formContent} ${isTransitioning && activeForm === 'signup' ? styles.entering : ''}`}>
                <Signup fms={fms}/>
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
       {showms&&<Message text='Succsesfull' color='green' comment='Enjoy Happy Shoppin'/>}
      {fmsx&&<Message text='Successfully Sign-Up' comment='Redirect to Home' color='green'/>}
    </div>
  )
}