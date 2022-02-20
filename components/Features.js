import React from 'react';
import Image from "next/image";
import styles from "../styles/Features.module.css";

const Features = () => {
    return (
        <div>
            <p> WHY CHOOSE US?</p>
            <h1>OUR KEY FEATURES SEE SOME</h1>
            <div className={styles.featureContainer}>
                <div className={styles.feature} >
                    <Image className={styles.img} src="/img/01.jpg" width="300" height="300" alt='' />
                    <div className={styles.bar}>

                    </div>
                    <div>
                        <h3>GET IN THE GROOVE</h3>
                        <p>Use a past defeat as a motivator.</p>
                        <p>Remind yourself you have.</p>
                    </div>
                </div>
                <div className={styles.feature} >
                    <Image className={styles.img} src="/img/01.jpg" width="300" height="300" alt='' />
                    <div className={styles.bar}>

                    </div>
                    <div>
                        <h3>GET IN THE GROOVE</h3>
                        <p>Use a past defeat as a motivator.</p>
                        <p>Remind yourself you have.</p>
                    </div>
                </div>
                <div className={styles.feature} >
                    <Image className={styles.img} src="/img/03.jpg" width="300" height="300" alt='' />
                    <div className={styles.bar}>

                    </div>
                    <div>
                        <h3>WORK YOUR BUTT OFF</h3>
                        <p>For those of you who are serious about having more</p>
                    </div>
                </div>
                <div className={styles.feature} >
                    <Image className={styles.img} src="/img/04.jpg" width="300" height="300" alt='' />
                    <div className={styles.bar}>

                    </div>
                    <div>
                        <h3>IT’S MORE THAN A GAME</h3>
                        <p>For those of you who are serious about having more.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;