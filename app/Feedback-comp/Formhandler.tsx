// Formhandler.tsx - Fixed
import styles from './Formhandler.module.css';
import Textchange from '../Home-comp/Textchange';
import Form from './Form';
import { useState } from 'react';

const texts: string[] = [
  "Hi 👋 Welcome to our Help Center!",
  "How can we help you today?",
  "Need help choosing the right size?",
  "Questions about your order or delivery?",
  "Having trouble with payment or checkout?",
  "Want to return or exchange a product?",
  "Our support team is here for you 24/7.",
  "Still need help? Contact our customer support."
];

interface FormHandlerProps {
  good: () => void;
  bad: () => void;
}

export default function Formhandler({ good, bad }: FormHandlerProps) {
  const [text, setText] = useState<string>('');
  const [product, setProduct] = useState<string>('Product Quality');
  const [order, setOrder] = useState<string>('Order Status');
  const [delivery, setDelivery] = useState<string>('Delivery Time');
  const [support, setSupport] = useState<string>('Technical Support');
  const [returns, setReturns] = useState<string>('Return Policy');

  const sendHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      good();
      // Reset form after successful submission
      setText('');
      setProduct('Product Quality');
      setOrder('Order Status');
      setDelivery('Delivery Time');
      setSupport('Technical Support');
      setReturns('Return Policy');
    } else {
      bad();
    }
  };

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setText('');
    setProduct('Product Quality');
    setOrder('Order Status');
    setDelivery('Delivery Time');
    setSupport('Technical Support');
    setReturns('Return Policy');
    bad();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.minitext}>
          <Textchange t={texts} />
        </div>
      </div>
      
      <div className={styles.formWrapper}>
        <Form 
          send={sendHandler} 
          reset={resetHandler} 
          text={text} 
          setText={setText} 
          type1={product} 
          setType1={setProduct}
          type2={order} 
          setType2={setOrder} 
          type3={delivery} 
          setType3={setDelivery}
          type4={support} 
          setType4={setSupport} 
          type5={returns} 
          setType5={setReturns} 
        />
      </div>
    </div>
  );
}