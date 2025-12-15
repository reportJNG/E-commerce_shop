'use client'
import styles from './man.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Manpropstype = {
  url: string;
  name: string;
  type: string;
}

export default function Man({ url, name, type }: Manpropstype) {
  const routes = useRouter();
  
  return (
    <div 
      className={styles.containersqaure}>
      <div className={styles.imageWrapper}>
        <Image 
          src={url} 
          alt={`${name} - ${type}`} 
          className={styles.manwithclothes}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          quality={85}
        />
      </div>
      
      <div className={styles.infoOverlay}>
        <div className={styles.textContainer}>
          <p className={styles.nameproduct}>{name}</p>
          <p className={styles.txt}>{type}</p>
        </div>
        
        <div className={styles.buttonContainer}>
          <button 
            className={styles.minirighttbn} 
            onClick={(e) => {
              e.stopPropagation();
              routes.push('/Shop');
            }}
            aria-label={`Buy ${name}`}
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  )
}