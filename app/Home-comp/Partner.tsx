import styles from './Partner.module.css';
import React from 'react';
type partnerprops={
    ui:React.ReactNode;
    name:string;
    description:string;
}

export default function Partner({ui,name,description}:partnerprops){

    return(
        <div className={styles.box}> {/**for on ui single partner make it square small */}
        <div className={styles.iii}>{ui}</div>
        <p className={styles.name}>{name}</p>
        <p className={styles.minitxt}>{description}</p>
        </div>
    )
}