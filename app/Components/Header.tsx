'use client';
import styles from './header.module.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import {ThemeContext } from './ThemeProvider';

export default function Header(){
    const routes=useRouter();
    const tcontext=useContext(ThemeContext);
    if(!tcontext)return null;
    const {theme,setTheme}=tcontext;
    return(
        <div className={styles.container}>
            <div className={styles.logostuckleft}>
            <Image src='/logo.png' alt='LogoOfEcomerce' width={60} height={60} className={styles.logophoto}/>
            </div>
            <div className={styles.hrefslinksONcenter}>
            <i className="fi fi-rr-home" onClick={()=>routes.push('/')}/>
            <i className="fi fi-rr-shopping-cart" onClick={()=>routes.push('/Shop')}/>
            <i className="fi fi-rr-bell" onClick={()=>routes.push('/')}/>
            </div>
            <div className={styles.themetoright}>
            <button className={styles.themeToggle} onClick={()=>setTheme(theme==='dark'? "light":"dark")}>
                {theme==="light"? <i className="fi fi-rc-moon-stars"/>:<i className="fi fi-rr-sun"/>}</button>
            </div>
        </div>
    )
}