import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from "next/image";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router, useRouter } from 'next/router';


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
    //route checker
    const route = useRouter();
    return (
        <header className={classname ? styles.header : styles.header2}>

            <nav className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.open}>

                <div className={styles.img}>
                    <Image src="/img/logo.svg" width="80" height="80" alt='' />
                </div>
                <ul >
                    <li className={styles.drop}>
                        <Link href='/' >
                            <a className={route.pathname == '/' ? styles.active : null}>HOME <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>

                        <div className={styles.homeDropDown} >
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Home default </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Home Yoga </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Home Dark </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Home Shop </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.drop}>
                        <Link href='/' >
                            <a className={route.pathname == '/login' ? styles.active : null}>PAGES <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        <div className={styles.homeDropDown} >
                            <h4>PAGES</h4>
                            <ul>
                                <li>
                                    <Link href='/login'>
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
                    <li className={styles.drop}>
                        <Link href='/'>
                            <a>CLASSES <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        <div className={styles.homeDropDown} >
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Classes </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Classes Single </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Classes TimeTable </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.drop}>
                        <Link href='/'>
                            <a> Gallery <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        <div className={styles.homeDropDown} >
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Gallery 2 columns </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Gallery 3 columns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a> Gallery 4 columns </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a> Gallery 5 columns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a> Gallery 6 columns</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a> Gallery Single</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.drop}>
                        <Link href='/'>
                            <a>BLOGS <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        <div className={styles.homeDropDown} >
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Blogs </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Blogs List </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Blogs Single </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.drop}>
                        <Link href='/'>
                            <a>SHOP <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>
                        <div className={styles.homeDropDown} >
                            <ul>
                                <li>
                                    <Link href='/'>
                                        <a>Shop</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Shop Single </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>Shop Cart </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a> Shop Checkout </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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