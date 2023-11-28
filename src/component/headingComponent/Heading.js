import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import '../headingComponent/heading.css';
export default function Heading(){
    return(
        <React.Fragment>
          <div className="container">
            <div className="header-wraper">
                <h1>ReactWeather</h1>
                {/* logo area is for profile and toogle button starts */}
            <div className="logo-area">
                <Switch  />
                <AccountCircleIcon fontSize="large"/>
            </div>
                {/* logo area is for profile and toogle button ends */}
            </div>
          </div>
        </React.Fragment>
    )
}