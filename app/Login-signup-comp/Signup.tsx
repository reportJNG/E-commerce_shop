import { useRouter } from 'next/navigation';
import styles from './Signup.module.css';
import { User } from '../Types/User';
import { useState,useEffect } from 'react';
import { allCountry } from '../Types/User';
import Message from '../Components/Message';

export default function Signup(){
  const [first,setFirst]=useState<string>('');
  const [confirme,setComfirme]=useState<string>('');
  const [disabledbtn,setDisabledbtn]=useState<boolean>(true);
  const [showms,setShowms]=useState<boolean>(false);
  const [counter, setCounter] = useState(0);

  const getprogress = (count: number): string => {
    if (count === 0) return '0%';
    if (count === 3) return '30%';
    if (count === 6) return '60%';
    return '100%';
  };

  const getStrengthLabel = (count: number): string => {
    if (count === 0) return 'Weak';
    if (count === 3) return 'Fair';
    if (count === 6) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = (count: number): string => {
    if (count === 0) return '#ef4444';
    if (count === 3) return '#f59e0b';
    if (count === 6) return '#3b82f6';
    return '#10b981';
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

    setCounter(newCounter);
  }, [first]);

  useEffect(() => {
    setDisabledbtn(first !== confirme); 
  }, [first, confirme]);

  const routes=useRouter();
  
  const Bypassuser = (e: React.FormEvent) => {
    e.preventDefault();
    if(disabledbtn){
      return;
    } else {
      setShowms(true);
      setTimeout(() => {
        setShowms(false);
        routes.push('/Home');
      }, 5000);
    }
  }

  const [datauser,setDatauser]=useState<User>({
    name:'',
    secondname:'',
    profilename:'',
    email:'',
    country:'',
    password:''
  });

  return (
    <div className={styles.container}>
      {showms ? (
        <Message text='Successfully Sign-Up' comment='Redirect to Home' color='green'/>
      ) : (
        <div className={styles.box}>
          <form onSubmit={Bypassuser} className={styles.form}>
            <div className={styles.inputinformation}>
              <div className={styles.inputRow}>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={datauser?.name} 
                  onChange={(e)=>setDatauser(prev=>({...prev,name:e.target.value}))} 
                  required 
                  minLength={4} 
                  maxLength={10} 
                  placeholder='First Name'
                />
                <input 
                  type="text" 
                  name="secname" 
                  id="secname" 
                  value={datauser?.secondname} 
                  onChange={(e)=>setDatauser(prev=>({...prev,secondname:e.target.value}))} 
                  required 
                  minLength={4} 
                  maxLength={12} 
                  placeholder='Last Name'
                />
              </div>
              
              <input 
                type="text" 
                name="profilename" 
                id="profilename" 
                value={datauser?.profilename} 
                onChange={(e)=>setDatauser(prev=>({...prev,profilename:e.target.value}))} 
                required 
                minLength={3} 
                maxLength={9} 
                placeholder='Username'
              />
              
              <input 
                type="email" 
                name='email' 
                id='email' 
                value={datauser?.email} 
                onChange={(e)=>setDatauser(prev=>({...prev,email:e.target.value}))} 
                required 
                minLength={4}  
                maxLength={30} 
                placeholder='Email Address'
              />
              
              <select 
                name="allcontry" 
                id="allcontry" 
                onChange={(e)=>setDatauser(prev=>({...prev,country:e.target.value}))} 
                required
                value={datauser.country}
              >
                <option value="">Select Country</option>
                {allCountry.map((val,i)=>(
                  <option value={val} key={i}>
                    {val.toUpperCase()}
                  </option>
                ))}
              </select>

              <div className={styles.passwordSection}>
                <div className={styles.passwordstats}>
                  <p>Password Strength:</p>
                  <div className={styles.strengthIndicator}>
                    <div className={styles.strengthBar}>
                      <div 
                        className={styles.strengthFill}
                        style={{
                          width: getprogress(counter),
                          backgroundColor: getStrengthColor(counter)
                        }}
                      ></div>
                    </div>
                    <span 
                      className={styles.strengthLabel}
                      style={{ color: getStrengthColor(counter) }}
                    >
                      {getStrengthLabel(counter)}
                    </span>
                  </div>
                </div>
                
                <input 
                  type="password" 
                  name="Password" 
                  id="Password" 
                  minLength={8} 
                  maxLength={16} 
                  onChange={(e)=>setFirst(e.target.value)} 
                  required
                  placeholder='Enter Password'
                />
                
                <div className={styles.passowrdnomatch}>
                  {first!==confirme && disabledbtn &&(
                    <p className={styles.redtext}>Waiting</p>
                  )}
                </div>
                
                <input 
                  type="password" 
                  name="con-Password" 
                  id="con-Password" 
                  minLength={8} 
                  maxLength={16} 
                  onChange={(e)=>setComfirme(e.target.value)} 
                  required
                  placeholder='Confirm Password'
                />
              </div>
            </div>
            
            <div className={styles.buttonhandler}>
              <button type="submit" disabled={disabledbtn}>
                Create Account
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}