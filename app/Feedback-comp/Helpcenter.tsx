'use client'
import styles from './Helpcenter.module.css';
import { useState } from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Chat from './Chat';
import Formhandler from './Formhandler';
import Message from '../Components/Message';
import { useRouter } from 'next/navigation';

export default function Helpcenter() {
    const [switchs, setSwitchs] = useState<boolean>(false);
    const [greenms, setGreenms] = useState<boolean>(false);
    const [redms, setRedms] = useState<boolean>(false);
    const route = useRouter();

    const good = () => {
        setGreenms(true);
        const time = setInterval(() => {
            setGreenms(false);
            route.push('/Home');
        }, 5000);
        return () => clearInterval(time);
    };

    const bad = () => {
        setRedms(true);
        const time = setInterval(() => {
            setRedms(false);
        }, 5000);
        return () => clearInterval(time);
    };

    return (
        <div className={styles.pageContainer}>
            <Header />
            
            <div className={styles.mainContent}>
                <div className={styles.navContainer}>
                    <div className={styles.navlinks}>
                        <button 
                            className={`${styles.navBtn} ${!switchs ? styles.active : ''}`}
                            onClick={() => setSwitchs(false)}
                        >
                            <span className={styles.btnText}>Chat</span>
                            {!switchs && <span className={styles.activeIndicator}></span>}
                        </button>
                        <button 
                            className={`${styles.navBtn} ${switchs ? styles.active : ''}`}
                            onClick={() => setSwitchs(true)}
                        >
                            <span className={styles.btnText}>Help</span>
                            {switchs && <span className={styles.activeIndicator}></span>}
                        </button>
                    </div>
                    
                   
                </div>

                <div className={styles.handlerContainer}>
                    <div className={`${styles.handler} ${switchs ? styles.formActive : styles.chatActive}`}>
                        {!switchs && <Chat />}
                        {switchs && <Formhandler good={good} bad={bad} />}
                    </div>
                </div>

                <About />
            </div>

            {/* Message Notifications */}
            <div className={styles.messagesContainer}>
                {greenms && (
                    <div className={styles.messageWrapper}>
                        <Message text='Sended Succesfully' color='green' comment='You will redirect to home' />
                    </div>
                )}
                {redms && (
                    <div className={styles.messageWrapper}>
                        <Message text='All slots restarted' color='red' comment='Make sure to send good write' />
                    </div>
                )}
            </div>
        </div>
    );
}