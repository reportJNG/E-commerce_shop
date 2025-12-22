import styles from './Login.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Message from '../Components/Message';
export default function Login (){
const [loading,setLoading]=useState<boolean>(false);
const [email,setEmail]=useState<string>('');
const [pass,setPass]=useState<string>('');
const [showms,setShowms]=useState<boolean>(false);
const disabledbtn = !(email.length >= 4 && pass.length >= 8);
const routes=useRouter();
const redirect=()=>{
    setLoading(true);
    setShowms(true);
    const timer = setInterval(() => {
            setLoading(false);
            setShowms(false);
            routes.push('/Home')
    }, (4000));

    return ()=> clearInterval(timer);
}
    return(
        <div className={styles.container}>
        {loading&&<div className={styles.loding}>{/**create a loeaeder with a css styles */}</div>}
        {!loading&&<div className={styles.box}>
            <form onSubmit={redirect}>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email...' maxLength={30} minLength={4}/>
            <input type="password" name="passw" id="passw" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Password...  ' maxLength={16} minLength={8}/>            <button type="submit" disabled={disabledbtn}>{disabledbtn?'Waiting':'Login'}</button>
            </form>
        </div>}
        {showms&&<Message text='Succsesfull' color='green' comment='Enjoy Happy Shoppin'/>
        }
        </div>
    )

}