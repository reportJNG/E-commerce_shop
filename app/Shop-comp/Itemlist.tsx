import styles from './Itemlist.module.css';
import Item from './Item';
import { Items } from '../Types/Items';
//all item will be listed here all direct to gift or prushes
export default function Itemlist(){

    return(
        <div className={styles.container}>
            {Items.map((val,i)=>(
                <div key={i}><Item itm={val}/></div>
            ))}
        </div>
    )
}