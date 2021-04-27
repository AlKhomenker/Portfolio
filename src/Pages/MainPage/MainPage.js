
import React from "react";
import styles from "./MainPage.module.css";
import {NavBar} from "../../Components/NavBar/NavBar";

const MaimPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>

              <NavBar/>

                <div className={styles.text_block}>
                    <h1>Khomenker Alina</h1>
                    <h3>Junior Frontend<br/>Developer</h3>
                </div>
                    <h4>Your life is your canvas <br/>Your skills are your tools</h4>


                        <a href='mailto:alinahom@me.com?subject=I liked your work and I want to collaborate'>
                            <div className={styles.btn_bg}> Send me an email</div>
                        </a>



                <div className={styles.ul_block}>

                    <div><a className={styles.icons} href="https://www.facebook.com/alina.khomenker/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i></a></div>
                    <div><a className={styles.icons} href="https://www.behance.net/alinakhomenker" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-behance"></i></a></div>
                    <div><a className={styles.icons} href="https://github.com/AlKhomenker" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i></a></div>
                    <div><a className={styles.icons} href="https://www.linkedin.com/in/alina-khomenker-0a2532137/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i></a></div>
                </div>
            </div>
        </div>
    )
};

export {MaimPage}