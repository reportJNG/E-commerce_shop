import styles from './Payment.module.css';
import { useState, FormEvent } from 'react';

interface PaymentProps {
  text: string;
  next3: () => void;
  decline: () => void;
}

export default function Payment({ text, next3, decline }: PaymentProps) {
  const [card, setCard] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cardError, setCardError] = useState<string>('');
  const [nameError, setNameError] = useState<string>('');

  const validateCard = (cardNumber: string): boolean => {
    // Remove spaces and check if it's only numbers
    const cleanedCard = cardNumber.replace(/\s/g, '');
    
    // Check if it contains only digits
    if (!/^\d+$/.test(cleanedCard)) {
      setCardError('Card number must contain only numbers');
      return false;
    }
    
    // No specific length requirement - only numbers is good
    setCardError('');
    return true;
  };

  const validateName = (fullName: string): boolean => {
    // Only check if name is less than 15 characters
    if (fullName.length > 15) {
      setNameError('Name must be less than 15 characters');
      return false;
    }
    
    setNameError('');
    return true;
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const isCardValid = validateCard(card);
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    
    if (isCardValid && isNameValid && isEmailValid) {
      next3();
    } else {
      if (!isCardValid && !cardError) {
        setCardError('Invalid card number');
      }
      if (!isNameValid && !nameError) {
        setNameError('Invalid name');
      }
    }
  };

  const handleCardChange = (value: string) => {
    // Format card number with spaces every 4 digits
    const formatted = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
    setCard(formatted);
    
    // Clear error when user starts typing
    if (cardError) {
      setCardError('');
    }
  };

  const handleNameChange = (value: string) => {
    setName(value);
    if (nameError) {
      setNameError('');
    }
  };

  return (
    <div className={styles.container}> 
      <h2 className={styles.titlepayment}>{`Complete Payment for ${text}`}</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            minLength={19}
            maxLength={19} // 15 digits + 4 spaces
            placeholder="1234 5678 9012 345"
            value={card}
            onChange={(e) => handleCardChange(e.target.value)}
            className={`${styles.input} ${styles.cardInput}`}
            required
          />
          <div className={styles.cardHint}>Enter card number (numbers only)</div>
          {cardError && (
            <div className={styles.error}>
              ⚠️ {cardError}
            </div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            maxLength={15}
            placeholder="John Doe"
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            className={styles.input}
            required
          />
          {nameError && (
            <div className={styles.error}>
              ⚠️ {nameError}
            </div>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            maxLength={40}
            minLength={5}
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Pay Now
          </button>
          <button 
            type="button" 
            onClick={decline}
            className={styles.declineButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}