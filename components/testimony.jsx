import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from '../styles/testimony.module.css';
import { Carousel } from 'react-responsive-carousel';
import {  faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Testimony extends Component {
	render() {
		return (
			<div className={style.tesimonies}>
			<Carousel showThumbs={false} emulateTouch infiniteLoop showArrows={false} ariaLabel={false}
			showIndicators={false}
			showStatus={false}
			>
				<div className={style.tesimony}>
				<img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/feature-info/02.jpg" alt="trainer" />
            <FontAwesomeIcon icon={faQuoteLeft} className={style.icon} />
			<div className={style.para}>
			Just what I was looking for. I will let my mum know about this, she could really make use of Worthy! Since I invested in Worthy I made over 100,000 dollars profits.			

			</div>
			<div className={style.name}>
				SUMMER N.
			</div>
			<div className={style.title}>
				Marketing Expert
			</div>

				</div>
				<div className={style.tesimony}>
				<img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/feature-info/01.jpg" alt="trainer" />
            <FontAwesomeIcon icon={faQuoteLeft} className={style.icon} />
			<div className={style.para}>
			Worthy is the next killer app. Worthy did exactly what you said it does. I will let my mum know about this, she could really make use of Worthy! Thank you for making it painless,

			</div>
			<div className={style.name}>
			Paul Flavius
			</div>
			<div className={style.title}>
			Quality control
			</div>

				</div>
				<div className={style.tesimony}>
				<img src="http://themes.potenzaglobalsolutions.com/html/fitness/images/feature-info/03.jpg" alt="trainer" />
            <FontAwesomeIcon icon={faQuoteLeft} className={style.icon} />
			<div className={style.para}>
			I have gotten at least 50 times the value from Worthy. I will let my mum know about this, she could really make use of Worthy! Wow what great service, I love it! Worthy is the real deal!

			</div>
			<div className={style.name}>
			Vincent Moreno
			</div>
			<div className={style.title}>
			Team Leader
			</div>

				</div>
			</Carousel>
			</div>
		);
	}
};

