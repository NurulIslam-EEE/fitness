
import React from 'react'
import style from '../styles/about.module.css'
import {  faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.texts}>
      <span className={style.titleText}> <div className={style.box}></div>ABOUT OUR COMPANY</span>
        <span className={style.subTitleText}>
        WHO WE ARE AND WHAT WE DO
        </span>
        <p className={style.para}>
        The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing.
        </p>
        <div className={style.points}>
        <span><FontAwesomeIcon icon={faPlusSquare} className={style.icon} /> Get the oars in the water and start rowing.</span>
      
       
        <span><FontAwesomeIcon icon={faPlusSquare} className={style.icon} />Most people believe that success is difficult.</span>
      
      
        <span><FontAwesomeIcon icon={faPlusSquare} className={style.icon} />Success is something of which we all want more.</span>
       
    
        <span><FontAwesomeIcon icon={faPlusSquare} className={style.icon} /> Introspection is the trick.</span>
        </div>
        <button>READ MORE</button>
      </div>
      <img className={style.img} src="http://themes.potenzaglobalsolutions.com/html/fitness/images/about/11.png" alt="train" />
    </div>
  )
}


export default About