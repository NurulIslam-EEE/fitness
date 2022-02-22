import React from 'react';
import styles from '../styles/Banner.module.css';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.socialContainer}>
                <div className={styles.social}>
                    <div className={styles.socialIcon}> <FontAwesomeIcon icon={faPinterest} /></div>
                    <div className={styles.socialIcon}><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className={styles.socialIcon}><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className={styles.socialIcon}><FontAwesomeIcon icon={faInstagram} /></div>




                </div>
                <div className={styles.share}>
                    <h4>SHARE</h4>
                </div>

                <div className={styles.bar}></div>
            </div>
            <div className={styles.bannerTitle}>
                <h3>Trainer in gym gives you training how to be fit </h3>
                <h1>LOVE <br /> <span>YOUR BODY.</span> </h1>
                <h3>DO NOT LOSE TRACK OF YOUR GOAL DUE TO HEALTH ISSUES.</h3>
            </div>

        </div >
    );
};

export default Banner;