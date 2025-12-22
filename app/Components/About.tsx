'use client'
import styles from './about.module.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function About() {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const navigateTo = (path: string) => {
    router.push(path);
  };

 

  // Auto-hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalHeight) * 100;
      
      setScrollProgress(progress);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  
  return (
    <div className={`${styles.footerContainer} ${isVisible ? '' : styles.hidden}`}>
      {/* Progress bar */}
      <div 
        className={styles.progressBar} 
        style={{ width: `${scrollProgress}%` }}
      />
      

      
      <div className={styles.socialContainer}>
        <button 
          className={`${styles.socialButton} ${styles.webButton}`} 
          onClick={() => openLink('https://remalihamza.vercel.app/')}
          aria-label="Visit Portfolio"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          <i className="fi fi-sr-user"></i>
        </button>
        <button 
          className={`${styles.socialButton} ${styles.gitButton}`} 
          onClick={() => openLink('https://github.com/reportJNG')}
          aria-label="Visit GitHub"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          <i className="fi fi-brands-github"></i>
        </button>
        <button 
          className={`${styles.socialButton} ${styles.instaButton}`} 
          onClick={() => openLink('https://www.instagram.com/re_hamza_0/')}
          aria-label="Visit Instagram"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px) scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          <i className="fi fi-brands-instagram"></i>
        </button>
        
        {/* Optional: Add more social buttons */}
        <button 
          className={styles.socialButton} 
          onClick={() => openLink('https://www.linkedin.com/')}
          aria-label="Visit LinkedIn"
          style={{
            background: 'linear-gradient(135deg, #0077b5 0%, rgba(0, 119, 181, 0.2) 100%)',
            borderColor: '#0077b5'
          }}
        >
          <i className="fi fi-brands-linkedin"></i>
        </button>
      </div>
      
      <div className={styles.navContainer}>
        <i 
          className={`${styles.navIcon} fi fi-rr-home`} 
          onClick={() => navigateTo('/Home')}
          aria-label="Home"
        />
        
        <i 
          className={`${styles.navIcon} fi fi-rr-shopping-cart`} 
          onClick={() => navigateTo('/Shop')}
          aria-label="Shop"
        />  
            <i 
          className={`${styles.navIcon} fi fi-rs-sign-out-alt`} 
          onClick={() => navigateTo('/Shop')}
          aria-label="Exit"
        />  
      </div>
    </div>
  );
}