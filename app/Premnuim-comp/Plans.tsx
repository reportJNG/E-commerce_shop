import styles from './Plan.module.css';
import { Plans } from '../Types/Plans';

interface Planprops {
    next2: (index: number) => void;
}

export default function Plan({ next2 }: Planprops) {
    return (
        <div className={styles.container}>
            {Plans.map((val, i) => (
                <div className={styles.card} key={i}>
                    <div className={styles.cardHeader}>
                        <h3 className={styles.title}>{val.title}</h3>
                        <div className={styles.priceSection}>
                            <span className={styles.price}>{val.price}</span>
                            {val.discount && (
                                <span className={styles.discount}>{val.discount}</span>
                            )}
                        </div>
                        {val.comment && (
                            <p className={styles.comment}>{val.comment}</p>
                        )}
                    </div>
                    
                    <div className={styles.featuresContainer}>
                        <ul className={styles.features}>
                            {val.features[1] && (
                                <li className={styles.feature}>
                                    <span className={styles.checkmark}>✓</span>
                                    {val.features[1]}
                                </li>
                            )}
                            {val.features[2] && (
                                <li className={styles.feature}>
                                    <span className={styles.checkmark}>✓</span>
                                    {val.features[2]}
                                </li>
                            )}
                            {val.features[3] && (
                                <li className={styles.feature}>
                                    <span className={styles.checkmark}>✓</span>
                                    {val.features[3]}
                                </li>
                            )}
                            {val.features[4] && (
                                <li className={styles.feature}>
                                    <span className={styles.checkmark}>✓</span>
                                    {val.features[4]}
                                </li>
                            )}
                            {val.features[5] && (
                                <li className={styles.feature}>
                                    <span className={styles.checkmark}>✓</span>
                                    {val.features[5]}
                                </li>
                            )}
                        </ul>
                    </div>
                    
                    <button 
                        className={styles.button} 
                        onClick={() => next2(i)}
                    >
                        {val.p}
                    </button>
                </div>
            ))}
        </div>
    );
}