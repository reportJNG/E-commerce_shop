import styles from './Features.module.css';
interface Featuresprops{
    next1:()=>void;
}
export default function Features({next1}:Featuresprops){


    return(
        <div className={styles.container}>
           <h1 className={styles.title}>
            Premium Features That Deliver Real Results
            </h1>
            <p className={styles.text}>
            Get access to analytics dashboards, unlimited projects, advanced automation, 
            and custom integrations that save you hours every week.
            </p>
            <p className={styles.text}>
            Start your 3-day free trial today and see the difference Premium makes. 
            Experience firsthand why 95% of trial users choose to stay with Premium.
            </p>
            <p className={styles.text}>
            Premium pays for itself through increased efficiency and better outcomes. 
            Its not just an upgrade - its an investment in your success.
            </p>
            <button className={styles.buy} onClick={next1}>Explore Premuim</button>
        </div>
    )
}