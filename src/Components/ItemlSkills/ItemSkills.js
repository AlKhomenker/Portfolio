import React from "react";
import styles from "./itemSkills.module.css"
import arrayData from "../../LocalData/localData";

import js from "../../assets/skills/javascript.png";
import ts from "../../assets/skills/typescript.png";
import java from "../../assets/skills/java.png";

import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import boot from "../../assets/skills/bootstrap.png";
import bulma from "../../assets/skills/bulma.png";
import ajax from "../../assets/skills/ajax.png";
import node from "../../assets/skills/node.png";
import jsx from "../../assets/skills/jsx.png";
import json from "../../assets/skills/json.png";
import xml from "../../assets/skills/xml.png";

import jquery from "../../assets/skills/jquery.png";
import react from "../../assets/skills/react.png";
import angular from "../../assets/skills/angular.png";

import webflow from "../../assets/skills/webflow.png";
import wordpress from "../../assets/skills/wordpress.png";

import illusrtrator from "../../assets/skills/illusrtrator.png";
import xd from "../../assets/skills/xd.png";
import figma from "../../assets/skills/figma.png";

import eclipse from "../../assets/skills/Eclipse.png";
import vsc from "../../assets/skills/vsc.png";
import android from "../../assets/skills/Android.png";
import webStorm from "../../assets/skills/WebStorm.png";
import dreamweaver from "../../assets/skills/Dreamweaver.png";
import git from "../../assets/skills/git.png";
import jira from "../../assets/skills/Jira.png";
import confluence from "../../assets/skills/Confluence.png";
import bitbucket from "../../assets/skills/Bitbucket.png";
import source from "../../assets/skills/sourceTree.png";

const ItemSkills = (props) => {
    let languages = arrayData.skills.listItems[0].description;
    let stack = arrayData.skills.listItems[1].description;
    let libraries = arrayData.skills.listItems[2].description;
    let builders = arrayData.skills.listItems[3].description;
    let design = arrayData.skills.listItems[4].description;
    let tools = arrayData.skills.listItems[5].description;

    switch(props.secsion) {
        case 'languages':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{languages[0]}</h5>
                        <img className={styles.images} alt="icon" src={js}/>
                        <p className={styles.p_disc}>{languages[1]}</p>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{languages[2]}</h5>
                        <img className={styles.images} alt="icon" src={ts}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{languages[3]}</h5>
                        <img className={styles.images} alt="icon" src={java}/>
                    </div>
                </div>);

        case 'main_stack':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[0]}</h5>
                        <img className={styles.images} alt="icon" src={html}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[1]}</h5>
                        <img className={styles.images} alt="icon" src={css}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[3]}</h5>
                        <img className={styles.images} alt="icon" src={bulma}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[4]}</h5>
                        <img className={styles.images} alt="icon" src={ajax}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[5]}</h5>
                        <img className={styles.images} alt="icon" src={node}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[6]}</h5>
                        <img className={styles.images} alt="icon" src={json}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[7]}</h5>
                        <img className={styles.images} alt="icon" src={jsx}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[8]}</h5>
                        <img className={styles.images} alt="icon" src={xml}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{stack[2]}</h5>
                        <img className={styles.images} alt="icon" src={boot}/>
                    </div>
                </div>);


        case 'libraries':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{libraries[0]}</h5>
                        <img className={styles.images} alt="icon" src={jquery}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{libraries[1]}</h5>
                        <img className={styles.images} alt="icon" src={react}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{libraries[2]}</h5>
                        <img className={styles.images} alt="icon" src={angular}/>
                    </div>
                </div>);

        case 'builders':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{builders[0]}</h5>
                        <img className={styles.images} alt="icon" src={webflow}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{builders[1]}</h5>
                        <img className={styles.images} alt="icon" src={wordpress}/>
                    </div>
                </div>);


        case 'design':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{design[0]}</h5>
                        <img className={styles.images} alt="icon" src={illusrtrator}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{design[1]}</h5>
                        <img className={styles.images} alt="icon" src={xd}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{design[2]}</h5>
                        <img className={styles.images} alt="icon" src={figma}/>
                    </div>
                </div>);


        case 'tools':
            return  (
                <div className={styles.block_disc}>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[0]}</h5>
                        <img className={styles.images} alt="icon" src={eclipse}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[1]}</h5>
                        <img className={styles.images} alt="icon" src={vsc}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[2]}</h5>
                        <img className={styles.images} alt="icon" src={webStorm}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[3]}</h5>
                        <img className={styles.images} alt="icon" src={android}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[4]}</h5>
                        <img className={styles.images} alt="icon" src={dreamweaver}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[5]}</h5>
                        <img className={styles.images} alt="icon" src={git}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[6]}</h5>
                        <img className={styles.images} alt="icon" src={bitbucket}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[7]}</h5>
                        <img className={styles.images} alt="icon" src={source}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[8]}</h5>
                        <img className={styles.images} alt="icon" src={jira}/>
                    </div>
                    <div className={styles.skill_block}>
                        <h5 className={styles.h5_disc}>{tools[9]}</h5>
                        <img className={styles.images} alt="icon" src={confluence}/>
                    </div>
                </div>);

        default:
            return '';
    }
};
export {ItemSkills};