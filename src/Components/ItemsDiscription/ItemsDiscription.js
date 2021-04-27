import React from "react";
import styles from "./itemsDiscription.module.css"
import arrayData from "../../LocalData/localData";

import image1  from '../../assets/image2.jpg'
import image2 from '../../assets/img_2.jpg'
import image3 from '../../assets/img_3.jpg'
import image4 from '../../assets/img_4.jpg'

const ItemsDiscription = (props) => {

    let description = arrayData.personinfo.listItems[0].description;

    let title1 = arrayData.personinfo.listItems[1].title1;
    let description1 = arrayData.personinfo.listItems[1].description1.map((item)=> {
        return (
            <p className={styles.p_disc2}>{item}</p>
        )
    });
    let title2 = arrayData.personinfo.listItems[1].title2;
    let description2 = arrayData.personinfo.listItems[1].description2.map((item)=> {
        return (
            <p className={styles.p_disc2}>{item}</p>
        )
    });

    let description3 = arrayData.personinfo.listItems[2].description.map((item)=> {
        return (
            <p className={styles.p_disc}>{item}</p>
        )
    });

    switch(props.secsion) {
        case 'personal_slice':
            return (
                <div className={styles.block_disc}>
                    <div className={styles.wrapper_disc}>
                        <div className={styles.block_left}>
                            <img className={styles.img_left} alt='image2' src={image2}></img>
                        </div>
                        <div className={styles.block_right}>
                            <p className={styles.p_disc}>{description}</p>
                        </div>
                    </div>
                </div>
            );
        case 'social_skills':
            return (
                <div className={styles.block_disc}>
                    <div className={styles.wrapper_disc2}>
                        <div className={styles.block_left}>
                            <img className={styles.img_left2} alt='image1' src={image1}></img>

                        </div>
                        <div className={styles.block_right}>
                            <h5 className={styles.h5_disc}>{title1}</h5>
                            {description1}
                        </div>
                    </div>
                    <div className={styles.wrapper_disc2}>
                        <div className={styles.block_left}>
                            <img className={styles.img_left2} alt='image4' src={image4}></img>

                        </div>
                        <div className={styles.block_right}>
                            <h5 className={styles.h5_disc}>{title2}</h5>
                            {description2}
                        </div>
                    </div>
                </div>
            );
        case 'education':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.wrapper_disc}>
                        <div className={styles.block_left}>
                            <img className={styles.img_left} alt='image3' src={image3}></img>
                        </div>
                        <div className={styles.block_right}>
                            {description3}
                        </div>
                    </div>
                </div>
            );
        default:
            return '';
    }
};


export {ItemsDiscription};