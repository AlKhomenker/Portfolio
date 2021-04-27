import React from "react";
import styles from "./listInfo.module.css"
import {ItemInfo} from "../ItemInfo/ItemInfo";
import {ItemContact} from "../ItemContact/ItemContact";
import {LinkContact} from "../LinkContact/LinkContact";

import arrayData from "../../LocalData/localData";

const ListInfo = (props) => {
    let linkContact;
    let itemsContact;
    let pathname = props.urlName;
    let title;
    let disc;
    for(let key in arrayData){
        if(key === pathname){
            title = arrayData[key].infoPage[0].title;
            disc = arrayData[key].infoPage[0].description;
        }
    }

    const scrollToAnchor = () =>{
        setTimeout(() => {
            window.scrollTo({top: 1700, behavior: 'smooth'});
        }, 100);
    };

    const items = arrayData[pathname].listItems.map((item,index)=> {
        return (
            <li className={styles.li_listInfo} onClick={scrollToAnchor}>
                <ItemInfo
                    key = {index}
                    title = {item.title}
                    description = {item.description}
                    pathname = {item.pathname}
                    url = {props.urlName}
                />
            </li>
        )
    });

    if(arrayData[pathname].links){
        itemsContact = arrayData[pathname].listItems.map((item,index)=> {
            return (
                <li className={styles.li_listInfo}>
                    <ItemContact
                        key = {index}
                        title = {item.title}
                        description = {item.description}
                        className = {item.className}
                    />
                </li>
            )
        });
        linkContact = arrayData[pathname].links.map((item,index)=> {
            return (
                <li className={styles.li_listInfo}>
                    <LinkContact
                        key = {index}
                        title = {item.title}
                        className = {item.className}
                        link = {item.link}
                    />
                </li>
            )
        });
    }
    return(
        <div className={styles.block_info}>
            <div className={styles.wrapper_info}>
                <h2 className={styles.h2_info}>{title}</h2>
                <h4 className={styles.h4_info}>{disc}</h4>

                <ul className={styles.ul_listInfo}>
                    {(pathname !== 'contact')?items : itemsContact}
                </ul>

                <ul className={styles.ul_linkInfo}>
                    {(pathname !== 'contact')?null : linkContact}
                </ul>
            </div>
        </div>
    )
};

export {ListInfo};