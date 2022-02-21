import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import style from '../styles/slider.module.css'
import {   faFacebookF , faInstagram, faTwitter, faPinterest} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className={style.item} data-value="1">
    <img className={style.img}  src="http://themes.potenzaglobalsolutions.com/html/fitness/images/trainers/05.jpg" alt="trainer" />
    <span className={style.title}>Homer Reyes</span>
    <span className={style.subTitle}>Cardio Expert</span>
    <div className={style.icons}>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faFacebookF} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faInstagram} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faTwitter} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faPinterest} />
    </span>
    </div>
   

  </div>,
  <div className={style.item} data-value="2">
     <img className={style.img} src="http://themes.potenzaglobalsolutions.com/html/fitness/images/trainers/01.jpg" alt="trainer" />
    <span className={style.title}>mellissa Doe</span>
    <span className={style.subTitle}>Manager</span>
        <div className={style.icons}>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faFacebookF} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faInstagram} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faTwitter} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faPinterest} />
    </span>
    </div>
  </div>,
  <div className={style.item} data-value="3">
     <img className={style.img} src="http://themes.potenzaglobalsolutions.com/html/fitness/images/trainers/01.jpg" alt="trainer" />
    <span className={style.title}>Candice Mcdonald</span>
    <span className={style.subTitle}>Dancing Teacher</span>
        <div className={style.icons}>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faFacebookF} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faInstagram} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faTwitter} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faPinterest} />
    </span>
    </div>
  </div>,
  <div className={style.item} data-value="4">
     <img className={style.img} src="http://themes.potenzaglobalsolutions.com/html/fitness/images/trainers/04.jpg" alt="trainer" />
    <span className={style.title}>Gwen Bass</span>
    <span className={style.subTitle}>Yoga trainer</span>
        <div className={style.icons}>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faFacebookF} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faInstagram} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faTwitter} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faPinterest} />
    </span>
    </div>
  </div>,
  <div className={style.item} data-value="5">
     <img className={style.img} src="http://themes.potenzaglobalsolutions.com/html/fitness/images/trainers/03.jpg" alt="trainer" />
    <span className={style.title}>Annie Smith</span>
    <span className={style.subTitle}>Trainer</span>
        <div className={style.icons}>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faFacebookF} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faInstagram} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faTwitter} />
    </span>
    <span className={style.icon}>
    <FontAwesomeIcon icon={faPinterest} />
    </span>
    </div>
  </div>,
];

const NextSlider = () => (
  <AliceCarousel 
  className={style.container}
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="default"
      infinite={true}
  />
);
export default NextSlider