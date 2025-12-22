import styles from './Chat.module.css';
import { useState, useRef, useEffect } from 'react'; // Added useRef and useEffect

interface QFA {
  key: number;
  question: string;
  answer: string;
}

const questions: QFA[] = [
  {
    key: 1,
    question: "Can I return or exchange an item?",
    answer: "Yes, returns and exchanges are accepted within 14 days if the product is unused and in original condition."
  },
  {
    key: 2,
    question: "Do you have all sizes available?",
    answer: "Sizes may vary per product. Please check the size chart on each product page before purchasing."
  },
  {
    key: 3,
    question: "How can I contact customer support?",
    answer: "You can contact us via email, live chat, or our support phone number listed on the Contact Us page."
  },
  {
    key: 4,
    question: "I lost my account access, what should I do?",
    answer: "Use the 'Forgot Password' option on the login page or contact support to recover your account."
  },
  {
    key: 5,
    question: "I was charged incorrectly, how can I get a refund?",
    answer: "Contact our support team with your order details. Refunds will be processed within 5–7 business days."
  },
  {
    key: 6,
    question: "My order hasn't arrived, what can I do?",
    answer: "Check your tracking number first. If delayed, contact support with your order ID."
  },
  {
    key: 7,
    question: "Can I change my delivery address after placing an order?",
    answer: "Address changes are only possible within 2 hours of placing the order. Contact support immediately."
  },
  {
    key: 8,
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and other local payment options depending on your country."
  },
  {
    key: 9,
    question: "How can I know if an item is in stock?",
    answer: "Stock availability is displayed on each product page. Out-of-stock items will show as unavailable."
  },
  {
    key: 10,
    question: "Can I cancel my order?",
    answer: "Orders can be canceled within 1 hour of purchase. After that, it may already be processed for shipping."
  },
  {
    key: 11,
    question: "My item arrived damaged or defective, what should I do?",
    answer: "Contact support within 48 hours with photos of the item. We will provide a replacement or refund."
  },
  {
    key: 12,
    question: "Do you ship internationally?",
    answer: "Yes, we ship to selected countries. Shipping fees and delivery times vary by location."
  }
];

export default function Chat() {
  const [loading, setLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string[]>([]);
  const answersEndRef = useRef<HTMLDivElement>(null); // New ref for answers section
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref for chat container

  const scrollToBottom = () => {
    
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
    
    // Also scroll the whole window to the answers section if it's visible
    if (answersEndRef.current && answer.length > 0) {
      setTimeout(() => {
        answersEndRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'end'
        });
      }, 100);
    }
  };

  const respond = (ans: string) => {
    setLoading(true);
    
    const timer = setTimeout(() => {
      setAnswer(prev => [...prev, ans]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  };

  // Scroll to bottom whenever answers change
  useEffect(() => {
    if (answer.length > 0 && !loading) {
      scrollToBottom();
    }
  }, [answer, loading]);

  return (
    <div className={styles.container}>
      <div className={styles.titlechat}>
        <div className={styles.titleIcon}>
          <i className="fi fi-sr-headset"></i>
        </div>
        <h1>Help Center</h1>
        <div className={styles.subtitle}>
          Here Always To Help Our Costumers
        </div>
      </div>
      
      <div className={styles.chatWrapper}>
        <div className={styles.chat} ref={chatContainerRef}>
          {/* Questions Grid */}
          {!loading && (
            <div className={styles.questionfiled}>
              {questions.map((val) => (
                <div 
                  key={val.key} 
                  className={styles.questionCard}
                  onClick={() => respond(val.answer)}
                >
                  <div className={styles.questionIcon}>
                    <i className="fi fi-ss-question"></i>
                  </div>
                  <p className={styles.eachquestion}>{val.question}</p>
                  <div className={styles.questionHint}>
                    Click to view answer
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Answers Section */}
          {answer.length > 0 && !loading && (
            <div className={styles.answerSection}>
              <div className={styles.answersHeader}>
                <h3>
                  <i className="fi fi-ss-comment-alt"></i>
                  Recent Answers ({answer.length})
                </h3>
              </div>
              
              <div className={styles.asnwerfiled}>
                {answer.map((val, i) => (
                  <div className={styles.answerCard} key={i}>
                    <div className={styles.answerHeader}>
                      <div className={styles.answerNumber}>
                        #{i + 1}
                      </div>
                      <div className={styles.answerTime}>
                        Just now
                      </div>
                    </div>
                    <p className={styles.eachanswer}>{val}</p>
                  </div>
                ))}
                {/* This div will be our scroll target */}
                <div ref={answersEndRef} style={{ height: '1px' }} />
              </div>
              
              {answer.length > 0 && (
                <button 
                  className={styles.clearBtn}
                  onClick={() => setAnswer([])}
                >
                  <i className="fi fi-ss-trash"></i>
                  Clear All Answers
                </button>
              )}
            </div>
          )}

          {/* Loading Indicator */}
          {loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.typingbot}></div>
              <p className={styles.loadingText}>Thinking ...</p>
            </div>
          )}
        </div>

        {/* Bottom Input Area */}
        <div className={styles.bottom}>
          <div className={styles.inputWrapper}>
            <input 
              type="text" 
              disabled 
              placeholder="Type your question here..." 
            />
            <div className={styles.inputHint}>
              <i className="fi fi-ss-info"></i>
              You can also click questions above
            </div>
          </div>
          <button className={styles.sendbutton} disabled>
            <i className="fi fi-ss-paper-plane"></i>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}