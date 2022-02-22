
import React from 'react'
import style from '../styles/abouttwo.module.css'
import {  faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Testimony from './testimony'
const AboutTwo = () => {
  return (
    <div className={style.container}>
        <div className={style.partOne}>
        <span className={style.titleText}> <div className={style.box}></div>ABOUT OUR COMPANY</span>
        <span className={style.subTitleText}>
        WHO WE ARE AND WHAT WE DO
        </span>
        <div className={style.table}>
            <div className={style.row}>
                <span className={style.topRow}>BMI range - kg/m2</span>
                <span className={style.topRow}>Weight Status</span>
            </div>
            <div className={style.row}>
                <span>Below 10.2</span>
                <span>Severe Thinness</span>
            </div>
            <div className={style.row}>
                <span>10.0 - 20.5</span>
                <span>Moderate Thinness</span>
            </div>
            <div className={style.row}>
                <span>20.5 - 26.2</span>
                <span>Mild Thinness</span>
            </div>
            <div className={style.row}>
                <span>40.0 - and Above</span>
                <span>Normal</span>
            </div>
        </div>
        <div className={style.para}>
        Success isn’t really that difficult. There is a significant portion of the population here in North America, that actually want and need success to be hard! Why? So they then have a built-in excuse when things don’t go their way! Pretty sad situation, to say the least.
        </div>
        </div>
        <div className={style.partTwo}>
          <Testimony/>
        </div>
    </div>
  )
}


export default AboutTwo