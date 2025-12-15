'use client'
import styles from './Bigoffer.module.css';
import Offer from './Offer';
import React, { Dispatch } from 'react';
import { useState } from 'react';
type timer ={
    day:string;
    hours:number;
    minuts:number;
}
export default function Bigoffer(){
const [time,setTime]=useState<timer>({day:'7',hours:23,minuts:17});

const minustime = () => {
  setTime((prev: timer) => {
    if (prev.minuts > 0) {
      return {
        ...prev,
        minuts: prev.minuts - 1,
      };
    }

    if (prev.hours > 0) {
      return {
        ...prev,
        hours: prev.hours - 1,
        minuts: 59,
      };
    }

    return prev;
  });
};
    return(

        <div className={styles.container}>{/**we need here to make call for 5 component of the offer  */}

            <div className={styles.titelaontainer}>
                <h2 className={styles.title}>The Offer Of The Day</h2>
                <div className={styles.minidowntimer}>

                </div>
            </div>
            <div className={styles.rowoffers}>
            <Offer/>
            </div>
        </div>
    )
}