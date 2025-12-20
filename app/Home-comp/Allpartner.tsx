import styles from './allpartner.module.css';
import { partnerprops } from './Partner';
import Partner from './Partner';
import { FaTshirt, FaIndustry, FaStore, FaShirtsinbulk, FaWarehouse } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";

export default function Allpartner() {
  const fashionPartners: partnerprops[] = [
    {
      ui: <FaTshirt className={styles.categoryIcon} />,
      name: "UrbanWear Co.",
      description: "Streetwear brand specializing in urban fashion and contemporary street style."
    },
    {
      ui: <FaIndustry className={styles.categoryIcon} />,
      name: "NorthThread Apparel",
      description: "Premium casual clothing with focus on comfort and sustainable materials."
    },
    {
      ui: <FaStore className={styles.categoryIcon} />,
      name: "ModeLine Studio",
      description: "Minimalist fashion designs with clean lines and timeless aesthetics."
    },
    {
      ui: <GiClothes className={styles.categoryIcon} />,
      name: "VogueCrafters",
      description: "Haute couture and bespoke tailoring services for premium clients."
    }
  ];

  const textilePartners: partnerprops[] = [
    {
      ui: <FaShirtsinbulk className={styles.categoryIcon} />,
      name: "Atlas Denim",
      description: "Denim specialists with innovative fabric technology and sustainable practices."
    },
    {
      ui: <FaWarehouse className={styles.categoryIcon} />,
      name: "Eclipse Outfitters",
      description: "Outdoor clothing designed for extreme conditions and adventure enthusiasts."
    },
    {
      ui: <FaStore className={styles.categoryIcon} />,
      name: "Velora Fashion",
      description: "Everyday elegance with focus on versatile wardrobe essentials."
    },
    {
      ui: <FaTshirt className={styles.categoryIcon} />,
      name: "SilkThread Collective",
      description: "Luxury fabrics and artisanal textile production for high-end fashion."
    }
  ];

  return (
    <div className={styles.partnersContainer}>
      <div className={styles.partnersHeader}>
        <h1 className={styles.partnersTitle}>Our Trusted Partners</h1>
        <p className={styles.partnersSubtitle}>
          Collaborating with industry leaders to bring you the finest fashion and textiles
        </p>
      </div>
      
      <div className={styles.partnerCategory}>
        <div className={styles.categoryHeader}>
          <FaTshirt className={styles.categoryIcon} />
          <h2 className={styles.categoryTitle}>Fashion Brands</h2>
        </div>
        <p className={styles.categoryDescription}>
          Leading fashion houses setting trends and defining modern style
        </p>
        <div className={styles.partnersGrid}>
          {fashionPartners.map((partner, index) => (
            <Partner
              key={`fashion-${index}`}
              ui={partner.ui}
              name={partner.name}
              description={partner.description}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.partnerCategory}>
        <div className={styles.categoryHeader}>
          <FaIndustry className={styles.categoryIcon} />
          <h2 className={styles.categoryTitle}>Textile Manufacturers</h2>
        </div>
        <p className={styles.categoryDescription}>
          Specialized textile producers with innovative materials and sustainable practices
        </p>
        <div className={styles.partnersGrid}>
          {textilePartners.map((partner, index) => (
            <Partner
              key={`textile-${index}`}
              ui={partner.ui}
              name={partner.name}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}