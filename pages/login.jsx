import React, { useState } from 'react'
import style from '../styles/login.module.css'
import {   faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignIn from '../components/signIn'
import Register from '../components/Register';
import Link from 'next/link';
const Login = () => {
  const [switchForm, setswitchForm] = useState(true)
  const signInForm = () =>{
    setswitchForm(true)
  }
   const registerForm = () =>{
    setswitchForm(false)
   }
  return (
    <div className={style.container}>
        <div className={style.banner}>
    <div className={style.title}>
    LOGIN
    </div>
    <div className={style.subTitle}>
    Create more robust client connections, make more sales, and save time with our end to end solution.
    </div>
    <div className={style.buttons}>
    
    <span className={style.home}><Link href='/'>Home</Link></span>/
    <span className={style.login}>Login</span>
    </div>
        </div>
        <div className={style.inputForm}>
        <div className={style.formBtn}>
        <span className={style.loginBtn} style={{background: switchForm ? '#da1d25' : 'black'}} onClick={signInForm}>Log in</span>
        <span className={style.registerBtn} onClick={registerForm} style={{background: !switchForm ? '#da1d25' : 'black'}}>Register</span>
        </div>
        {switchForm ?
 <SignIn/> :
 <Register/>
        }
    
    
        <div className={style.fbLogin}>
            <span>Login or Sign in with</span>
            <span className={style.fbBtn}> <FontAwesomeIcon icon={faFacebookF} /> Login with Facebook</span>
        </div>
        </div>
    </div>
  )
}
 export default Login