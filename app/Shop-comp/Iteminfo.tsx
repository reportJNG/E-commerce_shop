import styles from './Iteminfo.module.css';
import Image from 'next/image';
import { FiArrowLeft, FiGift, FiShoppingBag, FiStar } from 'react-icons/fi';
import { BsLightningCharge } from 'react-icons/bs';

interface ItemInfoProps {
  name: string;
  price: string;
  url: string;
  buy: () => void;
  back: () => void;
  gift: () => void;
}

export default function ItemInfo({ name, price, url, buy, back, gift }: ItemInfoProps) {
  return (
    <div className={styles.container}>
      {/* Decorative Background Elements */}
      <div className={styles.decorationCircle1}></div>
      <div className={styles.decorationCircle2}></div>
      
      {/* Left side - Product Image with Elegant Frame */}
      <div className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imageFrame}>
            <Image
              className={styles.productImage}
              alt={name}
              src={url}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className={styles.imageBadge}>
            <BsLightningCharge className={styles.badgeIcon} />
            <span>Premium Quality</span>
          </div>
        </div>
        
        {/* Product Highlights */}
        <div className={styles.highlights}>
          <div className={styles.highlightItem}>
            <FiStar />
            <span>Premium Materials</span>
          </div>
          <div className={styles.highlightItem}>
            <FiStar />
            <span>Free Shipping</span>
          </div>
          <div className={styles.highlightItem}>
            <FiStar />
            <span>1-Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Right side - Product Info & Actions */}
      <div className={styles.infoSection}>
        {/* Header with Back Button */}
        <div className={styles.header}>
          <button 
            className={styles.backButton}
            onClick={back}
            aria-label="Go back"
          >
            <FiArrowLeft className={styles.backIcon} />
            <span>Back To Shop</span>
          </button>
          <div className={styles.headerDivider}></div>
        </div>
        
        {/* Product Info */}
        <div className={styles.productContent}>
          <div className={styles.categoryTag}>Premium Product</div>
          
          <h1 className={styles.productName}>{name}</h1>
          
          <div className={styles.priceSection}>
            <div className={styles.priceTag}>{price}</div>
            <div className={styles.priceNote}>VAT included • Free shipping</div>
          </div>
          
          {/* Product Description */}
          <div className={styles.description}>
            <p>Experience premium quality and exceptional craftsmanship with this exquisite item. 
            Designed for those who appreciate excellence in every detail.</p>
          </div>
          
          {/* Rating & Reviews */}
          <div className={styles.rating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className={styles.starIcon} />
              ))}
            </div>
            <span className={styles.ratingText}>4.8 • 256 reviews</span>
          </div>
          
          {/* Action Buttons */}
          <div className={styles.actions}>
            <button 
              className={`${styles.actionButton} ${styles.buyButton}`}
              onClick={buy}
              aria-label={`Buy ${name} for ${price}`}
            >
              <FiShoppingBag className={styles.buttonIcon} />
              <span>Buy</span>
            </button>
            
            <button 
              className={`${styles.actionButton} ${styles.giftButton}`}
              onClick={gift}
              aria-label={`Gift ${name} for ${price}`}
            >
              <FiGift className={styles.buttonIcon} />
              <span>Gift This Item</span>
            </button>
          </div>
          
          {/* Additional Info */}
          <div className={styles.additionalInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Delivery:</span>
              <span className={styles.infoValue}>2-3 business days</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Returns:</span>
              <span className={styles.infoValue}>30-day return policy</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>In stock:</span>
              <span className={`${styles.infoValue} ${styles.inStock}`}>Available</span>
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className={styles.footerNote}>
          <span>✨ Premium packaging included at no extra cost</span>
        </div>
      </div>
    </div>
  );
}