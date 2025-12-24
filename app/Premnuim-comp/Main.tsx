'use client'
import styles from './Main.module.css';
import Plan from './Plans';
import Header from '../Components/Header';
import About from '../Components/About';
import { useState } from 'react';
import Features from './Features';
import Message from '../Components/Message';
import { useRouter } from 'next/navigation';
import Payment from './Payment';

export default function Main() {
    const [tab1, setTab1] = useState<boolean>(true);
    const [tab2, setTab2] = useState<boolean>(false);
    const [tab3, setTab3] = useState<boolean>(false);
    const [goodms, setGoodms] = useState<boolean>(false);
    const [badms, setBadms] = useState<boolean>(false);
    const [Loading, setLoading] = useState<boolean>(false);
    const [plan, setPlan] = useState<string>('');
    const [tab4, setTab4] = useState<boolean>(false);
    const routes = useRouter();

    const next1 = () => {
        setTab1(false);
        setGoodms(true);
        setLoading(true);
        
        const time = setTimeout(() => {
            setGoodms(false);
            setLoading(false);
            setTab2(true);
        }, 5000);
        
        return () => clearTimeout(time);
    }

    const next2 = (index: number) => {
        const plans = ['Fashion Starter', 'Fashion Plus', 'Fashion Pro'];
        setPlan(plans[index] || '');
        setTab2(false);
        setGoodms(true);
        setLoading(true);
        
        const time = setTimeout(() => {
            setGoodms(false);
            setLoading(false);
            setTab3(true);
        }, 5000);
        
        return () => clearTimeout(time);
    }

    const next3 = () => {
        setTab3(false);
        setGoodms(true);
        setLoading(true);
        
        const time = setTimeout(() => {
            setGoodms(false);
            setLoading(false);
            setTab4(true);
        }, 5000);
        
        return () => clearTimeout(time);
    }

    const decline = () => {
        setTab3(false);
        setBadms(true);
        setLoading(true);
        
        const time = setTimeout(() => {
            setBadms(false);
            setLoading(false);
            setTab3(true);
        }, 5000);
        
        return () => clearTimeout(time);
    }

    const finished = () => {
        setTab4(false);
        setLoading(true);
        setGoodms(true);
        
        const time = setTimeout(() => {
            setGoodms(false);
            setLoading(false);
            setTab1(true);
            routes.push('/Shop');
        }, 5000);
        
        return () => clearTimeout(time);
    }

    return (
        <div className={styles.container}>
            <Header />
            
            {Loading && (
                <>
                    <div className={styles.overlay} />
                    <div className={styles.loading} />
                </>
            )}
            
            <div className={styles.content}>
                {tab1 && <Features next1={next1} />}
                {tab2 && <Plan next2={next2} />}
                {tab3 && <Payment text={plan} next3={next3} decline={decline} />}
                {tab4 && (
                    <div className={styles.direct}>
                        <h1 className={styles.type}>{plan}</h1>
                        <p className={styles.subtitle}>Your premium fashion journey begins now</p>
                        <button 
                            className={styles.bigbutton} 
                            onClick={finished}
                            aria-label="Explore Premium Fashion Collection"
                        >
                            Explore The Premium Collection
                        </button>
                    </div>
                )}
            </div>
            
            <About />
            
            <div className={styles.messageContainer}>
                {goodms && (
                    <Message 
                        text='Successful' 
                        color='green' 
                        comment='Directed to Next Step'
                    />
                )}
                {badms && (
                    <Message 
                        text='Failed' 
                        color='red' 
                        comment='Please Check Your Information'
                    />
                )}
            </div>
        </div>
    )
}