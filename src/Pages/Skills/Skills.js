import React from "react";
import {Discription} from "../../Components/Discription/Discription";
import {ListInfo} from "../../Components/ListInfo/ListInfo";

const Skills = () => {
    return(
        <div>
            <ListInfo urlName={'skills'}/>
            <Discription/>
        </div>
    )
};

export {Skills};