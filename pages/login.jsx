import React from 'react'
import style from '../styles/login.module.css'
import {   faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {
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
    <span className={style.home}>Home</span>/
    <span className={style.login}>Login</span>
    </div>
        </div>
        <div className={style.inputForm}>
        <div className={style.formBtn}>
        <span className={style.loginBtn}>Log in</span>
        <span className={style.registerBtn}>Register</span>
        </div>
        <form  className={style.form}>
            <input type="text" className={style.input} placeholder='Username'/>
            <input type="password" className={style.input} placeholder='Password'/>
            <div>
            <input type="submit" placeholder='SIGN UP' className={style.signUp} />
            <button className={style.alreadyUser}>Already Registered User? Click here to login</button>
            </div>
            
        </form>
        <div className={style.fbLogin}>
            <span>Login or Sign in with</span>
            <span className={style.fbBtn}> <FontAwesomeIcon icon={faFacebookF} /> Login with Facebook</span>
        </div>
        </div>
    </div>
  )
}
 export default Login