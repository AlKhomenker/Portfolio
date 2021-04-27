import React from "react";
import styles from "./itemInfo.module.css"
import {NavLink} from "react-router-dom";
import personalSlice from '../../assets/icons/personalSlice.png'
import lifeSkills from '../../assets/icons/lifeSkills.png'
import education from '../../assets/icons/education.png'
import constructor from '../../assets/icons/constructor.png'
import language from '../../assets/icons/language.png'
import library from '../../assets/icons/library.png'
import pen from '../../assets/icons/pen.png'
import stack from '../../assets/icons/stack.png'
import tools from '../../assets/icons/tools.png'

const ItemInfo = (props) => {
    switch(props.pathname) {
        case 'personal_slice':
            return (
                <div className={styles.block_item}>
                <NavLink activeClassName={styles.active}
                         to={{ pathname : `/${props.url}/${props.pathname}`}}>
                    <img className={styles.images} alt="icon" src={personalSlice}/>
                    <h6>{props.title}</h6>
                </NavLink>
            </div>);

        case 'social_skills':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={lifeSkills}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        case 'education':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={education}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);
        case 'languages':
            return (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={language}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        case 'main_stack':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={stack}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        case 'libraries':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={library}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);
        case 'builders':
            return (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={constructor}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        case 'design':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={pen}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        case 'tools':
            return  (
                <div className={styles.block_item}>
                    <NavLink activeClassName={styles.active}
                             to={{ pathname : `/${props.url}/${props.pathname}`}}>
                        <img className={styles.images} alt="icon" src={tools}/>
                        <h6>{props.title}</h6>
                    </NavLink>
                </div>);

        default:
            return '';
    }
};

export {ItemInfo};