import styles from './Item.module.css';
import { Clothestype } from '../Types/Clothesitems';
interface itemprops{
    itm:Clothestype
}
export default function Item({itm}:itemprops){


    return(
        <div className={styles.container}>

        </div>
    )
}