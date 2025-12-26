import styles from './Itemlist.module.css';
import Item from './Item';
import { Items } from '../Types/Items';

export default function Itemlist(){

    return(
        <div className={styles.container}>
            {Items.map((val,i)=>(
                <div key={i}><Item itm={val}/></div>
            ))}
        </div>
    )
}