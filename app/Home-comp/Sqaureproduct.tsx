import styles from './squareproduct.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export type ProductPropsType = {
  url: string;
  name: string;
  price: number;
  isincart: boolean;
  togglecart: () => void;
};

export default function Squareproduct({ 
  url, 
  name, 
  price, 
  togglecart, 
  isincart 
}: ProductPropsType) {
  const router = useRouter();

  const handleCartToggle = () => {
    togglecart();
  };

  const handleShopRedirect = () => {
    router.push('/Shop');
  };

  return (
    <div className={styles.containersquaremini}>
      <Image 
        src={url} 
        className={styles.imageclothes} 
        alt={`${name} product image`}
        fill
        style={{ objectFit: 'cover' }}
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      <div className={styles.line}></div>
      
      <div className={styles.productInfo}>
        <p className={styles.ontoptext} title={name}>{name}</p>
        
        <button 
          className={styles.hiddentillhover} 
          onClick={handleShopRedirect}
          aria-label={`View ${name} in shop`}
        >
          <span className={styles.hoverover}>
            <i className="fi fi-rr-shopping-cart"></i>
          </span>
          <span className={styles.showus}>{`$${price}`}</span>
        </button>
      </div>
      
      {isincart ? 
        <button 
          className={styles.deletecart} 
          onClick={handleCartToggle}
          aria-label={`Remove ${name} from cart`}
        >
          <i className="fi fi-rs-trash"></i>
        </button>
        :
        <button 
          className={styles.addtocart} 
          onClick={handleCartToggle}
          aria-label={`Add ${name} to cart`}
        >
          <i className="fi fi-br-plus"></i>
        </button>
      }
    </div>
  );
}