import styles from './offer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export type Offerprops = {
    title: string;
    description: string;
    link: string;
    price: string;
}

export default function Offer({ title, description, link, price }: Offerprops) {
    const routes = useRouter();

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h3 className={styles.itemtitle}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={link} 
                        alt='Logo-product' 
                        className={styles.logopng}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <button className={styles.btnproduct} onClick={() => routes.push('/Shop')}>
                    {price}
                </button>
            </div>
        </div>
    )
}