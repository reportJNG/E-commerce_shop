import styles from './offer.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type Offerprops={
    title:string;
    description:string;
    link:string;
    price:string;
}
export default function Offer ({title,description,link,price}:Offerprops){
    const routes=useRouter();

    return(
        <div className={styles.container}>               
                        {/** here theere 5 items that get updated with just render diff component */}
                        {  /** this items have the same ui/ux */}
                    <div className={styles.item}>
                        <h3 className={styles.itemtitle}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <Image src={link} alt='Logo-product' className={styles.logopng}/>
                        <button className={styles.btnproduct} onClick={()=>routes.push('/Shop')}>{price}</button>
                    </div>


                
        </div>
    )
}