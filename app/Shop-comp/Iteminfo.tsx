import styles from './Iteminfo.module.css';
import Image from 'next/image';
import { FiArrowLeft } from 'react-icons/fi';

interface ItemInfoProps {
  name: string;
  price: string;
  url: string;
  buy: () => void;
  back: () => void;
}

export default function ItemInfo({ name, price, url, buy, back }: ItemInfoProps) {
  return (
    <div className={styles.container}>
      {/* Left side - Product Image */}
      <div className={styles.leftedbodyimage}>
        <Image
          className={styles.bgfull}
          alt={name}
          src={url}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right side - Product Info & Actions */}
      <div className={styles.rightside}>
        <button 
          className={styles.closebutton}
          onClick={back}
          aria-label="Go back"
          title="Go back"
        >
          <FiArrowLeft size={24} />
        </button>
        
        <h1 className={styles.nameitem}>{name}</h1>
        
        {/* Additional product details could go here */}
        <div className={styles.productDetails}>
          {/* You can add description, features, etc. here */}
        </div>
        
        <button 
          className={styles.buy}
          onClick={buy}
          aria-label={`Buy ${name} for ${price}`}
        >
          {price}
        </button>
      </div>
    </div>
  );
}