import React from "react";
import styles from "./linkContact.module.css"

const LinkContact = (props) => {

    return(

                   <a href={props.link} target="_blank" rel="noopener noreferrer">
                       <div className={styles.block_item}>
                            <div className={styles.images}>
                                <i className={props.className}></i>
                            </div>
                            <h6>{props.title}</h6>
                      </div>
                   </a>

    )
};
export {LinkContact}