'use client'
import styles from './Main.module.css';
import Header from '../Components/Header';
import About from '../Components/About';
import { useState } from 'react';
import Features from './Features';
import Message from '../Components/Message';
export default function Main(){ //only page to hold all component
    const[tab1,setTab1]=useState<boolean>(true);
    const[tab2,setTab2]=useState<boolean>(false);
    const[tab3,setTab3]=useState<boolean>(false);
    const [buttonsw,setButtonsw]=useState<boolean>(false);
    const [goodms,setGoodms]=useState<boolean>(false);
    const next1=()=>{
        setTab1(false);
        setGoodms(true);
        const time= setInterval(() => {
                setGoodms(false);
        }, 5000);
        return ()=>clearInterval(time);
    }
    return(
        <div>
                <Header/>       {/**topper */}

                {tab1&&<Features next1={next1}/>}
                {tab2&&<Plan/>}
                {tab3&&<Payment.tsx/>}


                <About/>       {/**bottom */}
        {
        goodms&&<Message text='Successful' color='green' comment='Directed to More'/> 
        }
        </div>
    )
}