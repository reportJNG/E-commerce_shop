import styles from './squareproduct.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
type Manpropstype={
    url:string;
    name:string;
}

export default function Squareproduct({url,name}:Manpropstype){
const routes=useRouter();
    return(
        <div className={styles.containersquaremini}>
            <Image src={url} className={styles.imageclothes} alt='Clothes-Image'/>
            <p className={styles.ontoptext}>{name}</p>
            <button className={styles.hiddentillhover} onClick={()=>routes.push('/Shop')} >Buy</button>{/**this is hidden only appear when hover and blur the all container leave only the button */}
        </div>
    )
}