import styles from './itemshandler.module.css';
import { useState } from 'react';
import Packs, { PacksProps } from './Packs';
import Squareproduct, { ProductPropsType } from './Sqaureproduct';
import { useRouter } from 'next/navigation';
export default function Itemshandler() {
  const [index, setIndex] = useState<number>(3);
  const [cartItems, setCartItems] = useState<number[]>([]); // Track which items are in cart
  const routes=useRouter();
  const packsItem: PacksProps[] = [
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
      title: 'Ultimate Pack',
      description: 'Everything you need for maximum performance.',
      link: '/packs/ultimate',
      price: 39.99,
    },
  ];



  const carthandler = (productId: number) => {
    setCartItems(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const productsitems: ProductPropsType[] = [
    {
      url: "/images/product1.jpg",
      name: "Leather Jacket",
      price: 120,
      isincart: cartItems.includes(1),
      togglecart: () => carthandler(1),
    },
    {
      url: "/images/product2.jpg",
      name: "Sneakers",
      price: 80,
      isincart: cartItems.includes(2),
      togglecart: () => carthandler(2),
    },
    {
      url: "/images/product3.jpg",
      name: "Jeans",
      price: 60,
      isincart: cartItems.includes(3),
      togglecart: () => carthandler(3),
    },
    {
      url: "/images/product4.jpg",
      name: "T-Shirt",
      price: 25,
      isincart: cartItems.includes(4),
      togglecart: () => carthandler(4),
    },
    {
      url: "/images/product5.jpg",
      name: "Hat",
      price: 15,
      isincart: cartItems.includes(5),
      togglecart: () => carthandler(5),
    },
    {
      url: "/images/product6.jpg",
      name: "Sunglasses",
      price: 50,
      isincart: cartItems.includes(6),
      togglecart: () => carthandler(6),
    },
  ];

  const viewhandler = () => {
    setIndex(prev => prev === 3 ? 6 : 3);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttontopout}>
        <h2 className={styles.title}>Shopping</h2>
      </div>
      
      <div className={styles.square}>
        <div className={styles.packhandler}>
          <h3 className={styles.titlepack}>Pack Offer</h3>
          <div className={styles.itemspacks}>
            {packsItem.map((val, i) => (
              <div key={i} className={styles.packforeach}>
                <Packs 
                  title={val.title} 
                  description={val.description} 
                  link={val.link} 
                  price={val.price} 
                />
                <div className={styles.fullprice}>
                  $95.99
                  <div className={styles.txttopright}>
                    <p className={styles.txt}>%45</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={styles.producthandler}>
          {productsitems.slice(0, index).map((val, i) => (
            <div key={i}>
              <Squareproduct 
                url={val.url} 
                name={val.name} 
                price={val.price} 
                togglecart={val.togglecart} 
                isincart={val.isincart} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.buttondownout}>
        <button 
          className={styles.btnv} 
          onClick={viewhandler}
          aria-label={index === 3 ? "Show more products" : "Show less products"}
        >
          {index === 3 ? 
            <i className="fi fi-br-angle-double-small-down"></i> : 
            <i className="fi fi-br-angle-double-small-up"></i>
          }
        </button>
        
        {index === 6 && (
          <button 
            className={styles.goshopbtn}
            onClick={() => routes.push('/Shop')}
          >
            Shop Now
          </button>
        )}
      </div>
    </div>
  );
}