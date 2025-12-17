import styles from './squareproduct.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
export type productropstype={
    url:string;
    name:string;
    price:number;
    isincart:boolean;
    togglecart:()=>void;
}

export default function Squareproduct({url,name,price,togglecart,isincart}:productropstype){
const routes=useRouter();
const handling = ()=>{
    isincart=!isincart;
    togglecart();
}
    return(
        <div className={styles.containersquaremini}>
            <Image src={url} className={styles.imageclothes} alt='Clothes-Image'
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
            <div className={styles.line}></div>
            <p className={styles.ontoptext}>{name}</p> {/**this should be left and button right same line */}
            <button className={styles.hiddentillhover} onClick={()=>routes.push('/Shop')}>
            <span className={styles.hoverover}><i className="fi fi-rr-shopping-cart"></i></span>    <span className={styles.showus}>{`$${price}`}</span> </button> {/** i want here to show cart and when hover shows price */}
            {isincart ? 
            <button className={styles.deletecart} onClick={handling}><i className="fi fi-rs-trash"></i></button>
            :<button className={styles.addtocart} onClick={handling}><i className="fi fi-br-plus"></i></button> 
            }
            
            
        </div>
    )
}