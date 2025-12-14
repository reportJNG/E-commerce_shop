import styles from './animated.module.css';
import Image from 'next/image';
type animatedproprs={
    link:string
}
export default function Animated({link}:animatedproprs){


    return(
        <div className={styles.container}>
            <Image src={link} alt='gif-image'  className={styles.walkinggif}/> {/**this gif should take all container and make it run randomly with animation in css */}
        </div>
    )
}