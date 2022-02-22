import React from 'react'
import style from '../styles/register.module.css'


const Register = () => {
  return (
          <form  className={style.form}>
    <input type="text" className={style.input} placeholder='Username'/>
    <input type="email" className={style.input} placeholder='Email Address'/>
    <input type="password" className={style.input} placeholder='Password'/>
    <input type="password" className={style.input} placeholder='Confirm Password'/>
    <div>
    <input type="submit" placeholder='SIGN UP' className={style.signUp} />
    <button className={style.alreadyUser}>Already Registered User? Click here to login</button>
    </div>
    
</form>

  )
}

export default Register