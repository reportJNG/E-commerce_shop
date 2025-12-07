'use client'
import styles from './Textchange.module.css';
import { useEffect, useState } from 'react';
  const shopPhrases: string[] = [
    "Premium Quality, Handpicked for You",
    "Over 500+ Satisfied Customers Trust Our Collection",
    "Affordable Luxury — Stylish Looks Without Breaking the Bank",
    "Eco-Friendly Materials for a Sustainable Wardrobe",
    "Fast Shipping & Hassle-Free Returns",
    "Limited Stock — Grab Your Favorite Pieces Before They’re Gone!",
    "Exclusive Collections You Won’t Find Anywhere Else",
    "Handcrafted Details for a Perfect Fit",
    "Customer Favorites — Rated 5 Stars",
    "Shop with Confidence — Secure Payments & Privacy Guaranteed",
    "Seasonal Trends Curated Just for You",
    "Join Our Loyalty Program & Enjoy Special Rewards"
  ];
export default function Textchange() {


  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);       
  const [subIndex, setSubIndex] = useState(0);  
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = shopPhrases[index];

    // speed typing
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        // typing forward
        setText(current.substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);

        if (subIndex === current.length) {
          // pause full text then delete
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        // deleting backward
        setText(current.substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);

        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % shopPhrases.length); // move next phrase
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <div className={styles.container}>
      <h3 className={styles.changedtext}>{text}</h3><p className={styles.curssor}></p> {/** here need the cursor allwys look like typing with this text with good animation */ }
    </div>
  );
}
