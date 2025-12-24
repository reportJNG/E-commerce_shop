import styles from './Features.module.css';
import { useRouter } from 'next/navigation';
interface FeaturesProps {
  next1: () => void;
}

export default function Features({ next1 }: FeaturesProps) {
  const routes=useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Premium Features That Deliver <span className={styles.highlight}>Real Results</span>
          </h1>
          <p className={styles.subtitle}>
            Powerful tools designed to accelerate your workflow and maximize productivity
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              📊
            </div>
            <h3 className={styles.featureTitle}>Analytics Dashboards</h3>
            <p className={styles.featureDescription}>
              Get real-time insights with customizable dashboards that track performance metrics
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              ♾️
            </div>
            <h3 className={styles.featureTitle}>Unlimited Projects</h3>
            <p className={styles.featureDescription}>
              Scale without limits - manage as many projects as you need with no restrictions
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              ⚡
            </div>
            <h3 className={styles.featureTitle}>Advanced Automation</h3>
            <p className={styles.featureDescription}>
              Automate repetitive tasks and save hours every week with intelligent workflows
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              🔗
            </div>
            <h3 className={styles.featureTitle}>Custom Integrations</h3>
            <p className={styles.featureDescription}>
              Connect with your favorite tools and services through powerful API integrations
            </p>
          </div>
        </div>

        <div className={styles.trialSection}>
          <div className={styles.trialBadge}>✨ 3-DAY FREE TRIAL</div>
          <h2 className={styles.trialTitle}>Experience Premium Firsthand</h2>
          <p className={styles.trialText}>
            Start your 3-day free trial today and see the difference Premium makes. 
            <strong> 95% of trial users choose to stay with Premium</strong> after experiencing its value.
          </p>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>Retention Rate</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Hours Saved Weekly</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>ROI Guarantee</span>
            </div>
          </div>

          <p className={styles.investmentText}>
            Premium pays for itself through increased efficiency and better outcomes. 
            Its not just an upgrade - its an <strong>investment in your success</strong>.
          </p>

          <button className={styles.ctaButton} onClick={next1}>
            <span className={styles.buttonText}>Explore Premium Features</span>
            <span className={styles.buttonArrow}>→</span>
          </button>
          
          <p className={styles.note}>
            No credit card required • Cancel anytime • Full access included
          </p>
          <p className={styles.note2} onClick={()=>routes.push('/Feedback')}>
            Questions
          </p>
        </div>
      </div>
    </div>
  );
}