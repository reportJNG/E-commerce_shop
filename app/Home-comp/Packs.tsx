import styles from './pack.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export type PacksProps = {
  title: string;
  description: string;
  link: string;
  price: number;
};

export default function Packs({ title, description, link, price }: PacksProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/Shop');
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainpic}>
        <div className={styles.title}>
          <h4 className={styles.titletxt}>{title}</h4>
        </div>
        
        <Image 
          src={link} 
          alt={`${title} package`}
          className={styles.logopic}
          width={400}
          height={300}
          priority={false}
        />
        
        <div className={styles.giftlooking}></div>
      </div>
      
      <div className={styles.content}>
        <p className={styles.description}>{description}</p>
        <button 
          className={styles.btn} 
          onClick={handleClick}
          aria-label={`Buy ${title} package for $${price}`}
          disabled={true}
        >
          {`$${price}`}
        </button>
      </div>
    </div>
  );
}