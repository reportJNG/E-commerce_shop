'use client'
import About from '../Components/About';
import Header from '../Components/Header';
import styles from './Main.module.css';
import Itemlist from './Itemlist';
import Textchange from '../Home-comp/Textchange';
const twords:string[]=[
  "Find your perfect fit",
  "High quality materials",
  "Easy returns if it doesn’t fit",
  "New styles added regularly",
  "Shop with confidence"
]
export default function Main(){


    return(
        <div className={styles.container}> {/**main holder all component*/}
            <Header/>
            <Textchange t={twords}/>
            
            <div className={styles.centered}>
            <Itemlist/>
            </div>

            
            <About quant={0}/>
        </div>
    )
}