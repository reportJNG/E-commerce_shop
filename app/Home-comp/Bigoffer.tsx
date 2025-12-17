'use client'
import React from 'react';
import styles from './Bigoffer.module.css';
import Message from '../Components/Message';
import Offer from './Offer';
import { useState, useEffect, useMemo, useCallback } from 'react';

type Timer = {
  day: string;
  hours: number;
  minutes: number;
}

type OfferProps = {
  title: string;
  description: string;
  link: string;
  price: string;
}

// Move offers arrays outside component
const FIRST_OFFERS: OfferProps[] = [
  {
    title: "Luxury Wool Coat",
    description: "Warm, elegant, and crafted for premium winter style.",
    link: "/offers/1.jpg",
    price: "$180"
  },
  {
    title: "Urban Cargo Pants",
    description: "Relaxed fit with functional pockets and street style.",
      link: "/offers/2.jpg",
    price: "$90"
  },
  {
    title: "Signature Knit Sweater",
    description: "Soft knit texture with a refined modern look.",
    link: "/offers/3.jpg",
    price: "$75"
  }
];

const SECOND_OFFERS: OfferProps[] = [
  {
    title: "Everyday Oversized Tee",
    description: "Comfort-first design loved by our customers.",
    link: "/offers/4.png",
    price: "$40"
  },
  {
    title: "Slim Leather Belt",
    description: "Minimal design with premium leather finish.",
      link: "/offers/5.jpg",
    price: "$30"
  },
  {
    title: "Casual Zip Hoodie",
    description: "Perfect balance between comfort and style.",
    link: "/offers/6.jpg",
    price: "$65"
  }
];

const THIRD_OFFERS: OfferProps[] = [
  {
    title: "Summer Linen Shirt",
    description: "Lightweight fabric for breathable comfort.",
    link: "/offers/7.jpg",
    price: "$55"
  },
  {
    title: "Relaxed Fit Shorts",
    description: "Clean cut with all-day comfort.",
    link: "/offers/8.jpg",
    price: "$45"
  },
  {
    title: "Modern Canvas Sneakers",
    description: "Fresh design with durable sole.",
    link: "/offers/9.jpg",
    price: "$85"
  }
];

export default function Bigoffer() {
  const [time, setTime] = useState<Timer>({ day: '7', hours: 8, minutes: 16 });
  const [temp, setTemp] = useState<number>(3);
  const [loaderMessage, setLoaderMessage] = useState<boolean>(false);
  const [resetedMessage, setResetedMessage] = useState<boolean>(false);
  const [dontclick,setDontclick]=useState<boolean>(false);
  // Track revealed offers
  const [revealedOffers, setRevealedOffers] = useState<Set<string>>(new Set());

  // Compute current offers
  const currentOffers = useMemo(() => {
    switch (temp) {
      case 3:
        return THIRD_OFFERS;
      case 2:
        return SECOND_OFFERS;
      case 1:
        return FIRST_OFFERS;
      default:
        return [];
    }
  }, [temp]);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (parseInt(prev.day) > 0) {
          return { day: (parseInt(prev.day) - 1).toString(), hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const reloadItems = useCallback(() => {
    if (temp === 1) {
      setLoaderMessage(true);
      setDontclick(true)
      const timeout = setTimeout(() => {
        setLoaderMessage(false);
        setRevealedOffers(new Set());
        setDontclick(false);
      }, 5000);
      return () => clearTimeout(timeout);
    } else if (temp > 0) {
      setTemp(prev => prev - 1);
      setDontclick(true)
      setResetedMessage(true);
      const timeout = setTimeout(() => {
        setResetedMessage(false);
        setDontclick(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [temp]);

  const handleRevealOffer = useCallback((index: number) => {
    const offerKey = `${temp}-${index}`;
    setRevealedOffers(prev => {
      const newSet = new Set(prev);
      newSet.add(offerKey);
      return newSet;
    });
  }, [temp]);

  const isOfferRevealed = useCallback((index: number) => {
    const offerKey = `${temp}-${index}`;
    return revealedOffers.has(offerKey);
  }, [temp, revealedOffers]);

  const formattedTime = `${time.day.padStart(2, '0')} D : ${time.hours.toString().padStart(2, '0')} H : ${time.minutes.toString().padStart(2, '0')} M`;

  return (
    <div className={styles.container}>
      <div className={styles.tophandler}>
        
        
        {/* Gift reload button */}
        <div className={styles.reloadbtn}>
          <button 
            className={styles.realoding} 
            onClick={reloadItems}
            title={`Refresh offers (${temp} remaining)`}
            disabled={dontclick}
          >
            <i className="fi fi-bs-refresh"></i>
            <u className={styles.mininumbertopleft}>{temp-1}</u>
          </button>
        </div>
        
        {/* Gift box content */}
        <div className={styles.titelaontainer}>
          <h2 className={styles.title}>Offers of the week</h2>
          <div className={styles.minidowntimer}>
            <p className={styles.texttimer}>
              {formattedTime}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.rowoffers}>
        {currentOffers.length > 0 ? (
          currentOffers.map((offer, index) => {
            const isRevealed = isOfferRevealed(index);
            
            return (
              <div key={`${temp}-${index}`} className={styles.offerItem}>
                {isRevealed ? (
                  <Offer 
                    title={offer.title} 
                    description={offer.description} 
                    link={offer.link} 
                    price={offer.price}
                  />
                ) : (
                  <div className={styles.hidden}>
                    <button 
                      className={styles.btnturnon} 
                      onClick={() => handleRevealOffer(index)}
                      title="Reveal this offer"
                    >
                      <i className="fi fi-rs-eye"></i>
                    </button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className={styles.emptyState}>
            <p>No offers available</p>
          </div>
        )}
      </div>

      {loaderMessage && (
        <Message
          text="Your offers are 0"
          comment="Sorry, try again next week !"
          color='red'
        />
      )}

      {resetedMessage && (
        <Message
          text="Your offers are less now"
          comment="Looks like your items have reset !"
          color='white'
        />
      )}
    </div>
  );
}