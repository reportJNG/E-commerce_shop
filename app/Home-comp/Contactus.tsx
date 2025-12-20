import styles from './Contactus.module.css';
import Textchange from './Textchange';
import { useRouter } from 'next/navigation';
export default function Contactus(){

const problem: string[] = [
  "Having an issue?",
  "Something not working?",
  "Need help or have feedback?",
  "We're here to help",
  "Contact us"
];

const routes=useRouter();
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Us<i className="fi fi-sr-users-alt"></i></h2> {/**top left with underlinehover*/}

            <div className={styles.information}>
                <h5 className={styles.inftxt}>xxx-xxx-xxx</h5>
                <h5 className={styles.inftxt}>hamzaremali10@gmail.com</h5>
                <h5 className={styles.inftxt}>All Over World !</h5>
                <h5 className={styles.inftxt}>6 Years Experience</h5>
            </div>
            <Textchange t={problem}/>
            <div className={styles.feedback}>
                <button className={styles.contactbtn} onClick={()=>routes.push('/Feedback')}><i className="fi fi-rr-paper-plane"></i></button>
            </div>
        </div>
    )
}