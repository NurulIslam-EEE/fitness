import React from 'react';
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <h3>ABOUT US</h3>
                <p>The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people</p>
            </div>
            <div>
                <h3>USEFUL LINKS</h3>


                <p>About</p>
                <p>Our Trainers</p>
                <p>Services</p>
                <p>Bmi Calculator</p>
                <p>Classes</p>
                <p>Blog</p>
                <p>Gallery</p>
                <p>Classes Timetable</p>
                <p>Shop</p>
                <p>Contact Us</p>
            </div>
            <div>
                <h3>SUBSCRIBE US</h3>
                <p>Sign up to our newsletter to get the latest news and offers</p>
                <input placeholder='Enter Email' type="email" name="" id="" /> <br />
                <button className={styles.notify}>GET NOTIFIED </button>
            </div>
            <div>
                <h3>OUR GALLERY</h3>
            </div>
        </div>
    );
};

export default Footer;