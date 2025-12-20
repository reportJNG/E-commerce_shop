import styles from './humanfeedback.module.css';

type Humanfeedbackprops = {
  name: string;
  secname: string;
  rating: number;
  description: string;
  advice: string;
  favorite: string;
}

export default function Humanfeedback({ name, secname, rating, description, advice, favorite }: Humanfeedbackprops) {
  // Validate rating is between 1-5
  const validRating = Math.min(5, Math.max(1, Math.floor(rating)));
  const ratingClass = styles[`rating${validRating}`];

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.userimage}>
          <i className="fi fi-sr-user"></i>
          <h4 className={styles.nameuser}>{name + ' ' + secname}</h4>
        </div>
        <div className={`${styles.ratingContainer} ${ratingClass}`}>
          <div className={styles.starsWrapper}>
            <div className={styles.emptyStars}>★★★★★</div>
            <div className={styles.filledStars}>★★★★★</div>
          </div>
        </div>
      </div>
      <div className={styles.lower}>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.items}>
        <p><i className="fi fi-sr-star" style={{ color: 'white',fontSize:'20px' }}></i>Favorite Product: {favorite}</p>
        <p><i className="fi fi-rr-bulb"style={{ color: 'black',fontSize:'20px' }}></i>Advice: {advice}</p>
      </div>
    </div>
  );
}