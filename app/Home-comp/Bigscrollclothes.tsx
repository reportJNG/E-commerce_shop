'use client'
import styles from './bigscrollclothes.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState,useEffect} from 'react';
import { Clothestype } from '../Types/Clothesitems';
export default function Bigscrollclothes(){
const [clothes,setClothes]=useState<Clothestype[]|null>(null);//an emptey array before the fetching data
const [index,setIndex]=useState<number>(0);
const item = clothes?.[index];
const length = clothes?.length ??0;
const [loading,setLoading]=useState(false);
const routes=useRouter();
const prevclick =()=>{
if(length===0)return null
setIndex(
    prev=>(
       (prev-1+length)%length
    )
)
}
const nextclick=()=>{
if(length===0)return null
setIndex(prev=>(
        (prev+1)%length
    ))
}
const getfullitems= async()=>{

}
useEffect(()=>{
getfullitems();
},[])
    return(

        <div className={styles.container}>            
            {item&&!loading&&
            <div className={styles.box} key={index}>
            <button className={styles.leftedstuckbtn} onClick={prevclick}><i className="fi fi-br-angle-double-small-left"/></button>
            <Image src={item.url} alt='clothe-image' className={styles.clothimagefullcontainer}/>
            <p className={styles.nameontop}>{item.name}</p>
            <p className={styles.discriptionontop}>{item.description}</p>
            <button className={styles.discoverbtn} onClick={()=>routes.push('/Shop')}><p className={styles.minitxtbtn}>Discover</p></button>
            <button className={styles.rightstuckbtn} onClick={nextclick}><i className="fi fi-br-angle-double-small-right"/></button>
            </div>}
            {loading&& <p className={styles.loadingtext}>Loading ...</p> }
        </div>
    )
}