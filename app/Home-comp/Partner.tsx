import styles from './Partner.module.css';
import React from 'react';

export type partnerprops = {
  ui: React.ReactNode;
  name: string;
  description: string;
}

export default function Partner({ ui, name, description }: partnerprops) {
  return (
    <div className={styles.partnerBox}>
      <div className={styles.partnerUI}>
        {ui}
      </div>
      <p className={styles.partnerName}>{name}</p>
      <p className={styles.partnerDescription}>{description}</p>
    </div>
  );
}