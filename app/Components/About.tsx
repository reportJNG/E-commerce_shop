'use client'
import styles from './about.module.css';
import { useRouter } from 'next/navigation';
export default function About (){
const routes = useRouter();
    return(
        <div className={styles.container}>
            <div className={styles.topcenter}>
                    <p className={styles.owner} onClick={()=>window.open('_blank','https://remalihamza.vercel.app/')}>@ByHamzaDev</p>
            </div>
            <div className={styles.minileftedcontainer}>
                <button className={styles.btnweb} onClick={()=>window.open('_blank','https://remalihamza.vercel.app/')}><i className="fi fi-sr-user"></i></button>
                <button className={styles.btngithub} onClick={()=>window.open('_blank','https://github.com/reportJNG')}><i className="fi fi-brands-github"></i></button>
                <button className={styles.btninsta} onClick={()=>window.open('_blank','https://www.instagram.com/re_hamza_0/')}><i className="fi fi-brands-instagram"></i></button>
            </div>
            <div className={styles.minirightcontainer}>
            <i className="fi fi-rr-home" onClick={()=>routes.push('/')}/>
            <i className="fi fi-rr-shopping-cart" onClick={()=>routes.push('/Shop')}/>
            </div>
        </div>
    )
}