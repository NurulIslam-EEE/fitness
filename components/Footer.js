import React from 'react';
import styles from '../styles/Footer.module.css';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <h1>ABOUT US</h1>
                <p>The first thing to remember about success is that it is a process – nothing more, nothing less. There is really no magic to it and it’s not reserved only for a select few people</p>
            </div>
            <div>
                <h1>USEFUL LINKS</h1>
            </div>
            <div>
                <h1>SUBSCRIBE US</h1>
                <p>Sign up to our newsletter to get the latest news and offers</p>
                <input type="email" name="" id="" />
            </div>
            <div>
                <h1>OUR GALLERY</h1>
            </div>
        </div>
    );
};

export default Footer;