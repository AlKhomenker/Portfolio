import React from "react";
import {Discription} from "../../Components/Discription/Discription";
import {ListInfo} from "../../Components/ListInfo/ListInfo";
import {Route} from "react-router-dom";

const PersonInfo = () => {
    return(
        <div>
            <ListInfo urlName={'personinfo'}/>
            <Route path={'/personinfo/personal_slice'} render = {() => <Discription/>}/>
            <Route path={'/personinfo/social_skills'} render = {()=> <Discription/>}/>
            <Route path={'/personinfo/education'} render = {()=> <Discription/>}/>
        </div>
    )
};

export {PersonInfo};