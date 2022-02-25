import React, { useState } from "react";
import styles from '../styles/Banner.module.css';
import { faFacebookF, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const Banner = () => {
    const [bullet, setBullet] = useState(1);

    return (
        <div className={styles.banner}>
            <div className={styles.bannerSocialTitle}>
                <div className={styles.bannerSocialTitle2}>

                    <div className={styles.bannerSocialTitle3}>



                        {bullet === 1 ? <div className={styles.bannerTitle}>

                            <h3>Trainer in gym gives you training how to be fit </h3>
                            <h1>LOVE </h1> <h1><span>YOUR BODY.</span> </h1>
                            <h3>DO NOT LOSE TRACK OF YOUR GOAL DUE TO HEALTH ISSUES.</h3>


                        </div> : <div className={styles.bannerTitle}>

                            <h3>Nothing tastes as good as being fit feels. </h3>
                            <h1>MAKING </h1> <h1><span>FITNESS FUN.</span> </h1>
                            <h3>Success never comes to those who quit..</h3>


                        </div>}
                    </div>
                </div>
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
                <div className={styles.bullet}>
                    <div className={bullet === 1 ? styles.whiteColor : styles.redColor} onClick={() => setBullet(1)}></div>
                    <div className={bullet === 2 ? styles.whiteColor : styles.redColor} onClick={() => setBullet(2)}></div>
                </div>
            </div>

            <div className={styles.bannerFooter}>
                <div className={styles.bannerFooterChild1}>
                    <h3>MODERN <br /> EQUIPMENT</h3>
                </div>
                <div className={styles.bannerFooterChild2}>

                    <h3>COACHES <br /> CHAMPION</h3>
                </div>
                <div className={styles.bannerFooterChild3}>
                    <h3>SWIMMING POOLS <br /> AVAILABLE</h3>
                </div>
            </div>

        </div >
    );
};

export default Banner;