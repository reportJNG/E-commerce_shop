import styles from './Login.module.css';
import { useState } from 'react';
interface loginprops{
    getms:()=>void;
}
export default function Login ({getms}:loginprops){
const [loading,setLoading]=useState<boolean>(false);
const [email,setEmail]=useState<string>('');
const [pass,setPass]=useState<string>('');
const disabledbtn = !(email.length >= 4 && pass.length >= 8);
const redirect=()=>{
    setLoading(true);
    getms();
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
       
        </div>
    )

}