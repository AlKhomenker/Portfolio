import React from "react";
import styles from "./discription.module.css"
import {ItemsDiscription} from "../ItemsDiscription/ItemsDiscription";
import {Route} from "react-router-dom";
import {ItemSkills} from "../ItemlSkills/ItemSkills";

const Discription = () => {
    return(
        <div className={styles.block_disc}>
            <div className={styles.wrapper_disc}>
                <Route path={'/personinfo/personal_slice'} render = {(props)=>
                    <ItemsDiscription {...props} secsion={'personal_slice'} />}/>
                <Route path={'/personinfo/social_skills'} render = {(props)=>
                    <ItemsDiscription  {...props} secsion={'social_skills'}/>}/>
                <Route path={'/personinfo/education'} render = {(props)=>
                    <ItemsDiscription {...props} secsion={'education'} />}/>

                <Route path={'/skills/languages'} render = {(props)=>
                    <ItemSkills {...props} secsion={'languages'} />}/>
                <Route path={'/skills/main_stack'} render = {(props)=>
                    <ItemSkills {...props} secsion={'main_stack'} />}/>
                <Route path={'/skills/libraries'} render = {(props)=>
                    <ItemSkills {...props} secsion={'libraries'} />}/>
                <Route path={'/skills/builders'} render = {(props)=>
                    <ItemSkills {...props} secsion={'builders'} />}/>
                <Route path={'/skills/design'} render = {(props)=>
                    <ItemSkills {...props} secsion={'design'} />}/>
                <Route path={'/skills/tools'} render = {(props)=>
                    <ItemSkills {...props} secsion={'tools'} />}/>
            </div>
        </div>
    )
};

export {Discription};