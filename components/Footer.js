import React from 'react';
import styles from '../styles/Footer.module.css';
import Image from "next/image";
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div>
                    <h3>ABOUT US</h3>
                    <p>The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people</p>
                </div>
                <div>
                    <h3>USEFUL LINKS</h3>
                    <div className={styles.links}>
                        <div>

                            <p>About</p>
                            <p>Our Trainers</p>
                            <p>Services</p>
                            <p>Bmi Calculator</p>
                            <p>Classes</p>
                        </div>
                        <div>

                            <p>Blog</p>
                            <p>Gallery</p>
                            <p>Classes Timetable</p>
                            <p>Shop</p>
                            <p>Contact Us</p>
                        </div>
                    </div>



                </div>
                <div>
                    <h3>SUBSCRIBE US</h3>
                    <p>Sign up to our newsletter to get the latest news and offers</p>
                    <input placeholder='Enter Email' type="email" name="" id="" /> <br />
                    <button className={styles.notify}>GET NOTIFIED </button>
                </div>
                <div>
                    <h3>OUR GALLERY</h3>
                    <div className={styles.gallery}>
                        <div>
                            <Image src="/img/01 (2).jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/02 (2).jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/03 (2).jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/04 (2).jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/05.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/06.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/07.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/08.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/09.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/10.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/11.jpg" width="70" height="60" alt='' />
                        </div>
                        <div>
                            <Image src="/img/12.jpg" width="70" height="60" alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer2}></div>
            <div className={styles.footer2}>
                <div>
                    <Image className={styles.img} src="/img/logo.svg" width="100" height="100" alt='' />
                </div>
                <div>
                    <p>©Copyright 2022 Fitness All Rights Reserved</p>
                </div>
                <div>
                    <p>Terms & Conditions API Use Policy Privacy Policy</p>
                </div>
            </div>
        </>
    );
};

export default Footer;