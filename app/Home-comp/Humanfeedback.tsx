import styles from './humanfeedback.module.css';
import Image from 'next/image';
type Humanfeedbackprops={
name:string;
secname:string;
rating:number;
link:string;
description:string;
advice:string;
favorite:string
}
export default function Humanfeedback({name,secname,rating,link,description,advice,favorite}:Humanfeedbackprops){


    return(         
        <div className={styles.container}>{/** only ui for only one human */}

        <div className={styles.upper}>
        <div className={styles.userimage}>
        <Image src={link} alt='User-image' className={styles.logoimage}/> {/**mini image of user left top with name */}
        <h4 className={styles.nameuser}>{name+' '+secname}</h4>
        </div>
        <div className={`styles${rating}`}> {/** here rating will be from 1 to 5 fixed number no half so create 5 styles 1 2 .. */}</div>           
        </div>
        <div className={styles.lower}> {/**here the description big mini right do the items there  */}
        <p className={styles.description}>{description}</p>
        </div>      
        <div className={styles.items}>
        <p>Favoirte Product :{favorite}</p>
        <p>Advice :{advice}</p>
        </div>
        </div>
    )
}