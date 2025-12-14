import styles from './Contactus.module.css';

import { useRouter } from 'next/router';
export default function Contactus(){

    
const routes=useRouter();
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Us</h2> {/**top left with underlinehover*/}

            <div className={styles.information}>
                <h5 className={styles.inftxt}>Number: xxx-xxx-xxx</h5>
                <h5 className={styles.inftxt}>Email: hamzaremali10@gmail.com</h5>
                <h5 className={styles.inftxt}>Country: All Over World !</h5>
                <h5 className={styles.inftxt}>Years Experience: 6 Years</h5>
            </div>
            <div className={styles.feedback}>
                <h4>Have a problem or suggestion? Send us your feedback anytime.</h4>
                <button className={styles.contactbtn} onClick={()=>routes.push('/Feedback')}><i className="fi fi-rr-paper-plane"></i></button>
            </div>
        </div>
    )
}