import styles from './itemshandler.module.css';
import {useState} from 'react';
import Packs, { PacksProps } from './Packs';
import Squareproduct, { ProductPropsType } from './Sqaureproduct';
import { useRouter } from 'next/navigation';

interface Itemshandlerprops{
  setQuant:React.Dispatch<React.SetStateAction<number>>
}

export default function Itemshandler({setQuant}:Itemshandlerprops) {
  const [index, setIndex] = useState<number>(4);
  const [cartItems, setCartItems] = useState<number[]>([]);
  const routes = useRouter();

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
 


  // BETTER ALTERNATIVE: Update both states separately
  const carthandlerAlternative = (productId: number) => {
    const isInCart = cartItems.includes(productId);
    
    if (isInCart) {
      // Remove from cart
      setCartItems(prev => prev.filter(id => id !== productId));
      setQuant(prev => prev - 1);
    } else {
      // Add to cart
      setCartItems(prev => [...prev, productId]);
      setQuant(prev => prev + 1);
    }
  };

  // Use the alternative version which is cleaner
  const productsitems: ProductPropsType[] = [
    {
      url: "/images/product1.jpg",
      name: "Leather Jacket",
      price: 50,
      isincart: cartItems.includes(1),
      togglecart: () => carthandlerAlternative(1),
    },
    {
      url: "/images/product2.jpg",
      name: "Sneakers",
      price: 80,
      isincart: cartItems.includes(2),
      togglecart: () => carthandlerAlternative(2),
    },
    {
      url: "/images/product3.jpg",
      name: "Jeans",
      price: 90,
      isincart: cartItems.includes(3),
      togglecart: () => carthandlerAlternative(3),
    },
    {
      url: "/images/product4.jpg",
      name: "T-Shirt",
      price: 35,
      isincart: cartItems.includes(4),
      togglecart: () => carthandlerAlternative(4),
    },
    {
      url: "/images/product5.jpg",
      name: "Hat",
      price: 10,
      isincart: cartItems.includes(5),
      togglecart: () => carthandlerAlternative(5),
    },
    {
      url: "/images/product6.jpg",
      name: "Sunglasses",
      price: 25,
      isincart: cartItems.includes(6),
      togglecart: () => carthandlerAlternative(6),
    },
    {
      url: "/images/product7.jpg",
      name: "Watch",
      price: 20,
      isincart: cartItems.includes(7),
      togglecart: () => carthandlerAlternative(7),
    },
    {
      url: "/images/product8.jpg",
      name: "Backpack",
      price: 40,
      isincart: cartItems.includes(8),
      togglecart: () => carthandlerAlternative(8),
    },
  ];

  const viewhandler = () => {
    setIndex(prev => prev === 4 ? 8 : 4);
  };

  return (
    <div className={styles.container}>
      {/* Pack Section - Looks like an actual package */}
      <div className={styles.packhandler}>
        <h3 className={styles.titlepack}>Premium Bundles</h3>
        
        {/* 45% Discount Badge - Top Right */}
        <div className={styles.discountBadge}>
          <p className={styles.discountText}>45%</p>
          <p className={styles.discountLabel}>OFF</p>
        </div>
        
        <div className={styles.itemspacks}>
          {packsItem.map((val, i) => (
            <div key={i} className={styles.packforeach}>
              <Packs 
                title={val.title} 
                description={val.description} 
                link={val.link} 
                price={val.price} 
              />                
            </div>
          ))}
        </div>
        
        {/* Buy Pack Button - Bottom Right */}
        <button 
          className={styles.packhandlerbtn}
          onClick={()=>routes.push('/Premnuim')}
        >
          Get Premium Bundle
        </button>
      </div>
      
      
      <div className={styles.producthandler}>
        <div className={styles.productsHeader}>
          <h2 className={styles.productsTitle}>Featured Products</h2>
        </div>
        
        <div className={styles.productsGrid}>
          {productsitems.slice(0, index).map((val, i) => (
            <div key={i} className={styles.productCard}>
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
      
      {/* Bottom Action Buttons */}
      <div className={styles.buttondownout}>
        <button 
          className={styles.btnv} 
          onClick={viewhandler}
          aria-label={index === 4 ? "Show more products" : "Show less products"}
        >
          {index === 4 ? 
            <i className="fi fi-br-angle-double-small-down"></i> : 
            <i className="fi fi-br-angle-double-small-up"></i>
          }
        </button>
        
        {index === 8 && (
          <button 
            className={styles.goshopbtn}
            onClick={() => routes.push('/Shop')}
          >
            <i className="fi fi-br-shopping-cart"></i>
            Explore All Products
          </button>
        )}
      </div>
    </div>
  );
}