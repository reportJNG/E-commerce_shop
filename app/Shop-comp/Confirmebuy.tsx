import styles from './Confirmebuy.module.css';
import { FiX, FiShoppingBag, FiCheckCircle, FiShield, FiCreditCard, FiPackage } from 'react-icons/fi';

interface confirmbuyprops {
  name: string;
  price: string;
  confirme: () => void;
  cancle: () => void;
}

export default function Confirmebuy({ name, price, confirme, cancle }: confirmbuyprops) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        {/* Decorative Background Elements */}
        <div className={styles.decorationCircle1}></div>
        <div className={styles.decorationCircle2}></div>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.headerIcon}>
              <FiShoppingBag />
            </div>
            <div>
              <h2 className={styles.headerTitle}>Confirm Purchase</h2>
              <p className={styles.headerSubtitle}>Review your order details</p>
            </div>
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
          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <div className={styles.orderHeader}>
              <FiPackage className={styles.orderIcon} />
              <h3 className={styles.orderTitle}>Order Summary</h3>
            </div>
            
            <div className={styles.productInfo}>
              <div className={styles.productName}>{name}</div>
              <div className={styles.productPrice}>{price}</div>
            </div>
            
            <div className={styles.divider}></div>
            
            {/* Order Details */}
            <div className={styles.orderDetails}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Subtotal</span>
                <span className={styles.detailValue}>{price}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Shipping</span>
                <span className={`${styles.detailValue} ${styles.free}`}>FREE</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Tax</span>
                <span className={styles.detailValue}>Included</span>
              </div>
              <div className={`${styles.detailRow} ${styles.totalRow}`}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalValue}>{price}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className={styles.paymentMethod}>
            <div className={styles.paymentHeader}>
              <FiCreditCard className={styles.paymentIcon} />
              <h4 className={styles.paymentTitle}>Payment Method</h4>
            </div>
            <div className={styles.paymentInfo}>
              <div className={styles.paymentCard}>
                <div className={styles.cardIcon}>💳</div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardName}>•••• •••• •••• 4242</div>
                  <div className={styles.cardType}>Visa • Expires 12/25</div>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Benefits */}
          <div className={styles.benefits}>
            <div className={styles.benefit}>
              <FiShield className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>Secure Payment</div>
                <div className={styles.benefitDesc}>256-bit SSL encryption</div>
              </div>
            </div>
            <div className={styles.benefit}>
              <FiCheckCircle className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>30-Day Returns</div>
                <div className={styles.benefitDesc}>Hassle-free returns</div>
              </div>
            </div>
            <div className={styles.benefit}>
              <FiPackage className={styles.benefitIcon} />
              <div>
                <div className={styles.benefitTitle}>Fast Delivery</div>
                <div className={styles.benefitDesc}>2-3 business days</div>
              </div>
            </div>
          </div>

          {/* Terms Confirmation */}
          <div className={styles.terms}>
            <label className={styles.termsLabel}>
              <input type="checkbox" className={styles.termsCheckbox} defaultChecked />
              <span className={styles.checkmark}></span>
              <span className={styles.termsText}>
                I agree to the <a href="#" className={styles.termsLink}>Terms of Service</a> and 
                acknowledge that this purchase is non-refundable unless specified.
              </span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          <button 
            className={`${styles.actionButton} ${styles.confirmButton}`}
            onClick={confirme}
          >
            <FiShoppingBag className={styles.buttonIcon} />
            <span>Complete Purchase</span>
            <span className={styles.buttonPrice}>{price}</span>
          </button>
          
          <button 
            className={`${styles.actionButton} ${styles.cancelButton}`}
            onClick={cancle}
          >
            Cancel Order
          </button>
          
          <div className={styles.securityNote}>
            🔒 Your payment information is secure and encrypted
          </div>
        </div>
      </div>
    </div>
  );
}