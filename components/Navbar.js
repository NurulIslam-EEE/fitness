import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from "next/image";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    const [classname, setClassname] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const listenScrollEvent = () => {
        window.scrollY > 200
            ? setClassname(true)
            : setClassname(false)
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })
    console.log(isOpen)
    return (
        <header className={classname ? styles.header : styles.header2}>

            <nav className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.open}>

                <div className={styles.img}>
                    <Image src="/img/logo.svg" width="80" height="80" alt='' />
                </div>
                <ul >
                    <li className={styles.navItem}>
                        <Link href='/'>
                            <a>HOME <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        {/* dropdown */}
                        <div className={styles.homeDropDown}>
                            <h4>PAGES</h4>
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Login </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Contract Us </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Service </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </li>
                    <li>
                        <Link href='/'>
                            <a>PAGES <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>CLASSES <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>GALLERY <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>BLOGS <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>SHOP <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                    </li>
                </ul>
                <button >MEMBERSHIP</button>
                <div className={styles.navIcon} onClick={openMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;