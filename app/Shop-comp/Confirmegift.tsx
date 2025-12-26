import styles from './Confirmegift.module.css';
import { FiX, FiGift, FiMail, FiCheck, FiUser, FiHeart } from 'react-icons/fi';
import { useState } from 'react';

interface confirmgiftprops {
  name: string;
  price: string;
  confirme: () => void;
  cancle: () => void;
}

export default function Confirmegift({ name, price, confirme, cancle }: confirmgiftprops) {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [giftMessage, setGiftMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add validation here
    confirme();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Decorative Background Elements */}
        <div className={styles.decorationCircle1}></div>
        <div className={styles.decorationCircle2}></div>
        
        {/* Header with Close Button */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <FiGift className={styles.giftIcon} />
            <h2 className={styles.headerTitle}>Gift Confirmation</h2>
          </div>
          <button 
            className={styles.closeButton}
            onClick={cancle}
            aria-label="Close"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Gift Preview */}
          <div className={styles.giftPreview}>
            <div className={styles.giftBadge}>
              <FiGift />
              <span>Gift Item</span>
            </div>
            <h1 className={styles.productName}>{name}</h1>
            <div className={styles.priceDisplay}>
              <span className={styles.priceLabel}>Gift Amount:</span>
              <span className={styles.priceValue}>{price}</span>
            </div>
            <div className={styles.giftNote}>
              <FiHeart className={styles.heartIcon} />
              <p>This gift will be delivered to the recipient with a personalized message</p>
            </div>
          </div>

          {/* Gift Form */}
          <form className={styles.giftForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FiMail className={styles.labelIcon} />
                <span>Recipients Email</span>
              </label>
              <input
                type="email"
                className={styles.formInput}
                placeholder="Enter recipient's email address"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
              <div className={styles.inputNote}>Well send the gift notification to this email</div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                <FiUser className={styles.labelIcon} />
                <span>Gift Message (Optional)</span>
              </label>
              <textarea
                className={styles.formTextarea}
                placeholder="Write a personal message for the recipient..."
                value={giftMessage}
                onChange={(e) => setGiftMessage(e.target.value)}
                rows={4}
                maxLength={200}
              />
              <div className={styles.charCount}>{giftMessage.length}/200 characters</div>
            </div>

            <div className={styles.anonymousOption}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className={styles.checkbox}
                />
                <span className={styles.checkmark}></span>
                <span>Send gift anonymously</span>
              </label>
              <div className={styles.anonymousNote}>
                The recipient wont see your name on the gift
              </div>
            </div>

            {/* Delivery Info */}
            <div className={styles.deliveryInfo}>
              <h3 className={styles.deliveryTitle}>
                <FiCheck className={styles.checkIcon} />
                <span>What happens next?</span>
              </h3>
              <ul className={styles.deliveryList}>
                <li>Recipient receives an email notification immediately</li>
                <li>Gift can be claimed with a single click</li>
                <li>No account required for the recipient</li>
                <li>Gift never expires</li>
              </ul>
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button 
            className={`${styles.actionButton} ${styles.confirmButton}`}
            onClick={handleSubmit}
            disabled={!recipientEmail}
          >
            <FiGift className={styles.buttonIcon} />
            <span>Complete Gift Purchase</span>
            <span className={styles.buttonPrice}>{price}</span>
          </button>
          
          <button 
            className={`${styles.actionButton} ${styles.cancelButton}`}
            onClick={cancle}
          >
            <span>Cancel</span>
          </button>
          
          <div className={styles.securityNote}>
            🔒 Secure payment • 256-bit SSL encryption
          </div>
        </div>
      </div>
    </div>
  );
}