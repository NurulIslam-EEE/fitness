import React from 'react'
import style from '../styles/signin.module.css'


const SignIn = () => {
  return (
          <form  className={style.form}>
    <input type="text" className={style.input} placeholder='Username'/>
    <input type="password" className={style.input} placeholder='Password'/>
    <div>
    <input type="submit" placeholder='SIGN UP' className={style.signUp} />
    <button className={style.alreadyUser}>Already Registered User? Click here to login</button>
    </div>
    
</form>

  )
}

export default SignIn

