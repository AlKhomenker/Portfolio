import React from "react";
import styles from "./itemContct.module.css"

const ItemContact = (props) => {
    return(
                <div className={styles.block_item}>
                    <div >
                        <div className={styles.images}>
                            <i className={props.className}/>
                        </div>
                        <h6>{props.title}</h6>
                        <p>{props.description}</p>
                    </div>
                </div>
    )
};
export {ItemContact}