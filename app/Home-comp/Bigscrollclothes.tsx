'use client'
import styles from './bigscrollclothes.module.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Bigscrollclothes() {
  const clothes = [
    {
      name: "Varsity Bomber Jacket",
      description: "Classic red and white athletic jacket with ribbed trim",
      price: '$185',
      url: "/items/1.jpg"
    },
    {
      name: "Winter Knitwear and Eyewear",
      description: "A ribbed, chunky grey crew-neck sweater paired with black clubmaster-style sunglasses",
      price: '$250',
      url: "/items/2.jpg"
    },
    {
      name: "Plaid Fleece Zip-Up Jacket",
      description: "Folded grey and black large plaid (checkerboard) fleece jacket with a full zipper and collar",
      price: '$75',
      url: "/items/3.jpg"
    },
    {
      name: "White Halter Pleated Dress",
      description: "A monochromatic, high-neck halter dress with a ruched bodice and a pleated, A-line skirt",
      price: '$250',
      url: "/items/4.jpg"
    },
    {
      name: "Standard Fit Long-Sleeve Shirt",
      description: "A classic, collared button-up shirt available in multiple solid colors, including grey, white, green, maroon, and blue",
      price: '$49.99',
      url: "/items/5.jpg"
    },
    {
      name: "Men's Business Casual",
      description: "A complete outfit collection including a sport coat/blazer, dress pants, jeans, three T-shirts, a sweater, a button-down shirt, a tie, and brown leather dress shoes.",
      price: '$599',
      url: "/items/6.png"
    },
    {
      name: "White Halter Pleated Dress",
      description: "A monochromatic, high-neck halter dress with a ruched bodice and a pleated, A-line midi skirt.",
      price: '$50',
      url: "/items/7.png"
    },
    {
      name: "Folded White Dress Shirt",
      description: "A neatly folded, solid white, long-sleeve dress shirt with a stiff collar, suitable for formal or business wear.",
      price: '$29.99',
      url: "/items/8.png"
    },
    {
      name: "Classic Denim Trucker Jacket",
      description: "A dark wash blue denim jacket with a standard collar, button front, and characteristic chest pockets",
      price: '$80',
      url: "/items/9.png"
    },
    {
      name: "Grey Textured Sport Coat",
      description: "A single-breasted, grey jacket with a subtle textured pattern and a contrasting dark blue paisley-patterned interior lining",
      price: '$167',
      url: "/items/10.png"
    }
  ];

  const [index, setIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const item = clothes?.[index];
  const length = clothes?.length ?? 0;

  const router = useRouter();
  const prevclick = () => {
    if (length === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setIndex(prev => (prev - 1 + length) % length);
    setTimeout(() => setIsTransitioning(false), 800);
  }

  const nextclick = () => {
    if (length === 0 || isTransitioning) return;
    setIsTransitioning(true);
    setIndex(prev => (prev + 1) % length);
    setTimeout(() => setIsTransitioning(false), 800);
  }




  return (
    <div className={styles.container}>
      {item &&
        <div className={`${styles.box} ${isTransitioning ? styles.transitioning : ''}`} key={index}>
          <button 
            className={styles.leftedstuckbtn} 
            onClick={prevclick}
            aria-label="Previous item"
          >
            <i className="fi fi-br-angle-double-small-left" />
          </button>
          
          <Image
            src={item.url}
            alt={item.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          />
          
          <p className={styles.nameontop}>{item.name}</p>
          <p className={styles.discriptionontop}>{item.description}</p>
          
          <button 
            className={styles.discoverbtn} 
            onClick={() => router.push('/Shop')}
            aria-label={`Discover ${item.name} for ${item.price}`}
          >
            <p className={styles.minitxtbtn}>Shop Now - {item.price}</p>
          </button>
          
          <button 
            className={styles.rightstuckbtn} 
            onClick={nextclick}
            aria-label="Next item"
          >
            <i className="fi fi-br-angle-double-small-right" />
          </button>
        </div>
      }
    </div>
  )
}