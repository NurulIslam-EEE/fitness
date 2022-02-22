import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import Image from "next/image";


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
                            <a>HOME</a>
                        </Link>

                    </li>
                    <li>
                        <Link href='/'>
                            <a>PAGESt</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>CLASSES</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>GALLERY</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>BLOGS</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a>SHOP</a>
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