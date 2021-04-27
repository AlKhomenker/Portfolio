import React from "react";
import styles from "./footer.module.css"

const Footer = () => {
    return(
        <div className = {styles.footer}>
            <div className={styles.wrapper}>
                <ul className = {styles.ul_footer}>
                    <li><p className = {styles.p_footer}>Single page app in React.js</p></li>
                    <li><p className = {styles.p_footer}>Design and App development by Alina Khomenker</p></li>
                    <li><p className = {styles.p_footer}>© 2020.</p></li>
                </ul>
            </div>

        </div>

    )
};
export {Footer}