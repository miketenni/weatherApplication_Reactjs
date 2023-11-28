import React from "react";
import Card from 'react-bootstrap/Card';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import '../currentweather/currentweather.css';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import CompressRoundedIcon from '@mui/icons-material/CompressRounded';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

export default function Currentweather(props){
    return(
        <React.Fragment>
            <h1>Currentweather</h1>
            <Card>
            <div className='weather-header'>
            <Card.Title> {props.data[0]?.name} Weather</Card.Title>
            </div>
          
        <Card.Body>
            <div className='row'>
                <div className='col'>
                    <div className='current-weather-image'>
                    <img src='https://cdn-icons-png.flaticon.com/512/263/263883.png' alt='icon' style={{ width: 100, height: 100 }}/>
                    <weather/>
                    <h1>{props.data[0]?.main?.temp}&deg;C</h1>
                    </div>
                    <h1>{props.data[0]?.weather[0]?.description}</h1>
                </div>
                <div className='col'>
                    <h6>feel like</h6>
                    <div className='arrows'>
                    <ArrowUpwardRoundedIcon/>
                    <h5>{props.data[0]?.main?.temp_max}&deg;C</h5>
                    <SouthRoundedIcon/>
                    <h5>{props.data[0]?.main?.temp_min}&deg;C</h5>
                    </div>
                    <div className="icon-menu">
                        <ul>
                        <li> <WaterDropIcon/><h4>huminity</h4> <h4>{props.data[0]?.main?.humidity}%</h4>
                           </ li>
                           <li>
                           <AirRoundedIcon/><h6>Wind</h6><h4>{props.data[0]?.wind?.speed}kph</h4>
                           </li>
                           <li>
                           <CompressRoundedIcon/><h6>pressure</h6><h4>{props.data[0]?.main?.pressure}hpa</h4>
                           </li>
                        </ul>
                    </div>             
                </div>             
            </div>
      </Card.Body>
        </Card>
        </React.Fragment>
    )
}