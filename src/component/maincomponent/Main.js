import React from "react";
import Heading from "../headingComponent/Heading";
import Search from "../searchcomponent/Search";


export default function Main(){
    return(
        <React.Fragment>
            {/* heading and search component starts */}
            <Heading/>
            <Search/>
            {/* heading and search compoent ends */}
        </React.Fragment>
    )
}