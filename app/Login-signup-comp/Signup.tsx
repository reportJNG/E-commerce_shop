import { useRouter } from 'next/navigation';
import styles from './Signup.module.css';
import { User } from '../Types/User';
import { useState,useEffect } from 'react';
import { allCountry } from '../Types/User';
import Message from '../Components/Message';
export default function Signup(){

const [first,setFirst]=useState<string>('');
const [confirme,setComfirme]=useState<string>('');
const [disabledbtn,setDisabledbtn]=useState<boolean>(false);
const [showms,setShowms]=useState<boolean>(false);
const [counter, setCounter] = useState(0);

 const getprogress = (count: number): string => {
    if (count === 0) return '0%';
    if (count === 3) return '30%';
    if (count === 6) return '60%';
    return '100%';
  };

  useEffect(() => {
    const upper = /[A-Z]/.test(first);
    const lower = /[a-z]/.test(first);
    const number = /[0-9]/.test(first);

    let newCounter = 0;

    if (upper && lower && number) {
      newCounter = 10;
    } else if ((upper && lower) || (upper && number) || (lower && number)) {
      newCounter = 6;
    } else if (upper || lower || number) {
      newCounter = 3;
    }

    setCounter(newCounter); // update state
  }, [first]); //only update the state of the password strong


  useEffect(() => {
    setDisabledbtn(first !== confirme); 
  }, [first, confirme]); //only update the state of the button


    const routes=useRouter();
    const Bypassuser=()=>{
    if(disabledbtn){
        return 
    }
    else{
        setShowms(true);
        const timer = setInterval(() => {
        setShowms(false);
        }, 4000);
        routes.push('/Login?=true');
        return ()=>clearInterval(timer);
}}






const [datauser,setDatauser]=useState<User>({name:'',secondname:'',profilename:'',email:'',country:'',password:''});
    return(
      
       <div className={styles.container}>
                {!showms&&<div className={styles.box}>
                <h2 className={styles.title}>Sign-Up</h2>
                <form onSubmit={Bypassuser} className={styles.form}>
                <div className={styles.inputinformation}>
                <input type="text" name="name" id="name" value={datauser?.name} onChange={(e)=>setDatauser(prev=>({...prev,name:e.target.value}))} required minLength={4} maxLength={10} placeholder='Name...'/>
                <input type="text" name="secname" id="secname" value={datauser?.secondname} onChange={(e)=>setDatauser(prev=>({...prev,secondname:e.target.value}))} required minLength={4} maxLength={12} placeholder='Second-Name...'/>
                <input type="text" name="profilename" id="profilename" value={datauser?.profilename} onChange={(e)=>setDatauser(prev=>({...prev,profilename:e.target.value}))} required minLength={3} maxLength={9} placeholder='Profile-name...'/>
                <input type="email" name='email' id='email' value={datauser?.email} onChange={(e)=>setDatauser(prev=>({...prev,email:e.target.value}))} required minLength={4}  maxLength={30} placeholder='Email...'/>
                <select name="allcontry" id="allcontry" onChange={(e)=>setDatauser(prev=>({...prev,country:e.target.value}))} required>
                {allCountry.map((val,i)=>(
                        <option id="contry" key={i}>{val.toUpperCase()}</option>
                ))}
                </select>
                <div className={styles.passwordstats}><p>Strong:</p> <div className={`${styles.line} ${styles[`line${getprogress(counter).replace('%', '')}`]}`}></div>{/**here this line should show the line css styles if less is red then blue then green there is from 0% to 30% to 60% to 100%*/}</div>
                <input type="password" name="Password" id="Password" minLength={8} maxLength={16} onChange={(e)=>setFirst(e.target.value)} required/>
                <div className={styles.passowrdnomatch}>{first!==confirme&&disabledbtn &&( <p className={styles.redtext}>Password Doesnt Match</p> )}</div>
                <input type="password" name="con-Password" id="con-Password" minLength={8} maxLength={16} onChange={(e)=>setComfirme(e.target.value)} required/>
                </div>
                <div className={styles.buttonhandler}>
                <button type="submit" disabled={disabledbtn}>{disabledbtn? 'Waiting':'Sign-Up'}</button>
                </div>
                </form></div>}
                {
                    showms&&<Message text='Successfully Sign-Up' comment='Redirect to login' color='green'/>
                }
        </div>
    )
}