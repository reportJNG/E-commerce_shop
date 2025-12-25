import About from '../Components/About';
import Header from '../Components/Header';
import styles from './Main.module.css';

export default function Main(){


    return(
        <div className={styles.container}> {/**main holder all component*/}
            <Header/>
            <div className={styles.left}>
            
            </div>
            
            <div className={styles.centered}>

            </div>

            <div className={styles.right}>

            </div>
            <About quant={0}/>
        </div>
    )
}