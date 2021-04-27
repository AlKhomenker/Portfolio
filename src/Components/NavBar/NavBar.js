import React from "react";
import styles from "./navBar.module.css"
import {NavLink} from "react-router-dom";
import logo from '../../assets/logo.png'

const NavBar = () => {

    const scrollToAnchor = () =>{
        setTimeout(() => {
            window.scrollTo({top: 1000, behavior: 'smooth'});
        }, 100);
    };

    return (
            <div>
                <ul className={styles.ul_NavBar}>
                    <li className={styles.li_NavBar}>
                        <img src={logo} alt='logo' className={styles.img_logo}/></li>
                    <li className={styles.li_NavBar}>
                        <NavLink to="/personinfo" activeClassName={styles.active}
                                 onClick={scrollToAnchor}>About me</NavLink></li>
                    <li className={styles.li_NavBar}>
                        <NavLink to="/skills" activeClassName={styles.active}
                                 onClick={scrollToAnchor}>Skills</NavLink></li>
                    <li className={styles.li_NavBar}>
                        <NavLink to="/contact" activeClassName={styles.active}
                                 onClick={scrollToAnchor}>Contact</NavLink></li>
                    <li className={styles.li_NavBar}><hr className={styles.hr_hor}/></li>
                </ul>
            </div>
    )
};

export {NavBar}