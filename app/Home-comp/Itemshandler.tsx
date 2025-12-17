import styles from './itemshandler.module.css';
import { packsprops } from './Packs';
import Squareproduct from './Sqaureproduct';
import { productropstype } from './Sqaureproduct';
import { useState } from 'react';
import Packs from './Packs';
export default function Itemshandler(){
    const [index,setIndex]=useState<number>(2|5);
     const packsItem:packsprops[] = [         // need to be 3 items only with matching pack
  {
    title: 'Starter Pack',
    description: 'Perfect pack to get you started with the basics.',
    link: '/packs/starter',
    price: 19.99,
  },
  {
    title: 'Pro Pack',
    description: 'Advanced features and premium content included.',
    link: '/packs/pro',
    price: 49.99,
  },
  {
    title: 'Pro Pack',
    description: 'Advanced features and premium content included.',
    link: '/packs/pro',
    price: 39.99,
  },
];


const carthandler =()=>{
}


const productsitems: productropstype[] = [           //only 3 to six items
  {
    url: "/images/product1.jpg",
    name: "Leather Jacket",
    price: 120,
    isincart: false,
    togglecart: () => carthandler(),
  },
  {
    url: "/images/product2.jpg",
    name: "Sneakers",
    price: 80,
    isincart: false,
    togglecart: () => console.log("Toggled product 2"),
  },
  {
    url: "/images/product3.jpg",
    name: "Jeans",
    price: 60,
    isincart: false,
    togglecart: () => console.log("Toggled product 3"),
  },
  {
    url: "/images/product4.jpg",
    name: "T-Shirt",
    price: 25,
    isincart: false,
    togglecart: () => console.log("Toggled product 4"),
  },
  {
    url: "/images/product5.jpg",
    name: "Hat",
    price: 15,
    isincart: false,
    togglecart: () => console.log("Toggled product 5"),
  },
  {
    url: "/images/product6.jpg",
    name: "Sunglasses",
    price: 50,
    isincart: false,
    togglecart: () => console.log("Toggled product 6"),
  },
];
let temp=0;
    return(
        <div className={styles.container}>
            <div className={styles.buttontopout}> {/** need to be out of the squre */}
                <h2 className={styles.title}>Shopping</h2>
            </div>
            <div className={styles.square}> {/** square with 24px raduis */}
            
            <div className={styles.packhandler}> {/**pack handler */}
            <h3 className={styles.titlepack}>Pack Offer</h3>
            <div className={styles.itemspacks}>
            {packsItem.map((val,i)=>(
                <div key={i} className={styles.packforeach}>
                <Packs title={val.title} description={val.description} link={val.link} price={val.price}/><div className={styles.fullprice}>{temp+=val.price} <div className={styles.txttopright}><p className={styles.txt}>%45</p></div></div>{/**full price should be in circle and the <p > should be top left inside the circle */} 
                </div>
            ))}
            </div>
            </div>
            
            <div className={styles.producthandler}>{/** 3 when click more it be 6 view more change to Shop */}
            {productsitems.slice(0,index).map((val,i)=>(
                <div key={i}>
                <Squareproduct url={val.url} name={val.name} />
                </div>
            ))}
            </div>

            </div>
            <div className={styles.buttondownout}>{/**need to be out off the square */}
                <button className={styles.btnv}>View More</button>
            </div>


        </div>
    )
}