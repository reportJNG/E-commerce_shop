import styles from './man.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
type Manpropstype={
    url:string;
    name:string;
    type:string;
    
}
export default function Man ({url,name,type}:Manpropstype){
    const routes=useRouter();
    return(
        <div className={styles.containersqaure}>
            <Image src={url} alt='Man-with-clothes' className={styles.manwithclothes} />
            
            <div className={styles.underinfo}>
            <p className={styles.nameproduct}>{name}</p>
            <p className={styles.txt}>{type}</p>
            <button className={styles.minirighttbn} onClick={()=>routes.push('/Shop')}>Buy</button>
            </div>
        </div>
    )
}