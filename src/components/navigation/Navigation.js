import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";
import styles from './navigation.module.css';

const Navigation = () => {
    const { pathname } = useLocation();
    const text = (pathname === "/cart") ? "سبد خرید" : "محصول";
    return (
        <>
            {
                (pathname !== "/") &&
                <nav className={styles.container}>
                    <Link className={styles.link} to="/">صفحه اصلی</Link>
                    <MdKeyboardArrowLeft />
                    <Link className={styles.activeLink} to={pathname}>{text}</Link>   
                </nav> 
            }
        </>
    );
};

export default Navigation;