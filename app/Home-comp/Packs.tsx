import styles from './pack.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
export type packsprops={
    title:string;
    description:string;
    link:string;
    price:number;
}
export default function Packs({title,description,link,price}:packsprops){

    const routes = useRouter()
    return(
        <div className={styles.container}>

            <div className={styles.mainpic}> {/** this container have hover option just getting size bit big */}
                <div className={styles.title}> {/** title inside picture top left with hover */}
                <h4 className={styles.titletxt}>{title}</h4>
                </div>
                <Image src={link} alt='logo-photo' className={styles.logopic}/>

                <div className={styles.giftlooking}></div>{/* here with css we add this min pic container looking like gift*/}
            </div>
            <p className={styles.description}>{description}</p><button className={styles.btn} onClick={()=>routes.push('/Shop')}>{`$${price}`}</button> {/**make this in same line as the description + button */}

        </div>
    )
}