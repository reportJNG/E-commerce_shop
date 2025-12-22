// Form.tsx - Fixed with proper structure
import React from 'react'
import styles from './Form.module.css'
import { 
  productIssues, 
  orderIssues, 
  deliveryIssues, 
  supportIssues, 
  returnIssues 
} from '../Types/Form'

interface FormProps {
  send: (e: React.FormEvent) => void;
  reset: (e: React.FormEvent) => void;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  type1: string;
  setType1: React.Dispatch<React.SetStateAction<string>>;
  type2: string;
  setType2: React.Dispatch<React.SetStateAction<string>>;
  type3: string;
  setType3: React.Dispatch<React.SetStateAction<string>>;
  type4: string;
  setType4: React.Dispatch<React.SetStateAction<string>>;
  type5: string;
  setType5: React.Dispatch<React.SetStateAction<string>>;
}

export default function Form({ 
  send, 
  reset, 
  text, 
  setText,
  type1, setType1,
  type2, setType2,
  type3, setType3,
  type4, setType4,
  type5, setType5
}: FormProps) {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(e);
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    reset(e);
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className={styles.container}>
      {/* Main Text Input */}
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          <i className="fi fi-rr-message"></i>
          <span>Describe Your Issue</span>
        </label>
        <textarea 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className={`${styles.textInput} ${styles.textarea}`}
          placeholder="Please describe your issue in detail..."
          required 
          rows={4}
        />
      </div>
      
      {/* Selection Grid */}
      <div className={styles.selectGrid}>
        {/* Product Issues */}
        <div className={styles.selectGroup}>
          <label className={styles.label}>
            <i className="fi fi-rr-box-open"></i>
            <span>Product Issue</span>
          </label>
          <select value={type1} onChange={(e) => setType1(e.target.value)} className={styles.select}>
            {productIssues.map((val, i) => (
              <option value={val} key={i}>{val}</option>
            ))}
          </select>
        </div>
        
        {/* Order Issues */}
        <div className={styles.selectGroup}>
          <label className={styles.label}>
            <i className="fi fi-rr-shopping-cart"></i>
            <span>Order Issue</span>
          </label>
          <select value={type2} onChange={(e) => setType2(e.target.value)} className={styles.select}>
            {orderIssues.map((val, i) => (
              <option value={val} key={i}>{val}</option>
            ))}
          </select>
        </div>
        
        {/* Delivery Issues */}
        <div className={styles.selectGroup}>
          <label className={styles.label}>
            <i className="fi fi-rr-truck"></i>
            <span>Delivery Issue</span>
          </label>
          <select value={type3} onChange={(e) => setType3(e.target.value)} className={styles.select}>
            {deliveryIssues.map((val, i) => (
              <option value={val} key={i}>{val}</option>
            ))}
          </select>
        </div>
        
        {/* Support Issues */}
        <div className={styles.selectGroup}>
          <label className={styles.label}>
            <i className="fi fi-rr-headset"></i>
            <span>Support Issue</span>
          </label>
          <select value={type4} onChange={(e) => setType4(e.target.value)} className={styles.select}>
            {supportIssues.map((val, i) => (
              <option value={val} key={i}>{val}</option>
            ))}
          </select>
        </div>
        
        {/* Return Issues */}
        <div className={styles.selectGroup}>
          <label className={styles.label}>
            <i className="fi fi-rr-refresh"></i>
            <span>Return Issue</span>
          </label>
          <select value={type5} onChange={(e) => setType5(e.target.value)} className={styles.select}>
            {returnIssues.map((val, i) => (
              <option value={val} key={i}>{val}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Buttons */}
      <div className={styles.buttonGroup}>
        <button type="submit" className={`${styles.button} ${styles.submitButton}`}>
          <i className="fi fi-rr-paper-plane"></i>
          <span>Submit Request</span>
        </button>
        <button type="reset" className={`${styles.button} ${styles.resetButton}`}>
          <i className="fi fi-rr-undo"></i>
          <span>Clear Form</span>
        </button>
      </div>
    </form>
  );
}