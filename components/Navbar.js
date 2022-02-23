import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from "next/image";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    console.log(isOpen)
    return (
        <header className={styles.header}>

            <nav className={isOpen === false ? styles.nav : styles.nav + ' ' + styles.open}>



                <div>
                    <Image className={styles.img} src="/img/logo.svg" width="80" height="80" alt='' />
                </div>
                <ul >
                    <li>
                        <Link href='/'>
                            <a>HOME <FontAwesomeIcon className={styles.downIcon} icon={faChevronDown} /></a>
                        </Link>

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