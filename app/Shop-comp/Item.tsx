import styles from './Item.module.css';
import Image from 'next/image';
import { Clothestype } from '../Types/Clothesitems';
import { useRouter } from 'next/navigation';

interface itemprops {
    itm: Clothestype
}

export default function Item({ itm }: itemprops) {
    const routes = useRouter();
    
    const gotoitem = () => {
        routes.push(`/Shop/${itm.title}`);
    }
    
    const gift = () => {
        routes.push(`/Shop/Gift/${itm.title}`);
    }

    return (
        <div className={styles.container}>
            {/* Image Section */}
            <div className={styles.imageContainer}>
                <Image 
                    src={itm.url} 
                    alt={`logo-${itm.title}`}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Price Badge */}
                <div className={styles.priceBadge}>
                    <span className={styles.price}>${itm.price.toFixed(2)}</span>
                </div>
                
                {/* Category Icon */}
                <div className={styles.categoryBadge}>
                    <i className={`fi fi-tr-tshirt ${styles.categoryIcon}`}></i>
                </div>
                
                {/* Rating Badge */}
                <div className={styles.ratingBadge}>
                    <span className={styles.ratingNumber}>{itm.rating.rate}</span>
                    <i className="fi fi-rr-star"></i>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.content}>
                <h3 className={styles.title}>{itm.title}</h3>
                <p className={styles.description}>{itm.description}</p>
                
                {/* Features */}
                <div className={styles.features}>
                    {itm.livrison && (
                        <div className={styles.delivery}>
                            <i className="fi fi-rr-truck-side"></i>
                            <span>Free Delivery</span>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className={styles.actions}>
                    <button 
                        className={styles.viewButton}
                        onClick={gotoitem}
                    >
                        View Details
                    </button>
                    
                    <button 
                        className={styles.giftButton}
                        onClick={gift}
                        aria-label="Gift item"
                        title="Send as gift"
                    >
                        <i className="fi fi-rr-gift"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}