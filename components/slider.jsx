import React from 'react'
import style from '../styles/slider.module.css'
import NextSlider from './NextSlider'
function Slider() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <span className={style.titleText}> <div className={style.box}></div> Train with Experts</span>
        <span className={style.subTitleText}>
        MEET THE MAGNIFICENT TRAINERS
        </span>
        <NextSlider/>
      </div>
      <div className={style.sliderImages}>
        
      </div>
    </div>
  )
}

export default Slider