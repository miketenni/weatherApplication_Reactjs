import React, { useEffect } from "react";
import Currentweather from "../currentweather/Currentweather";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useState } from 'react';
import '../searchcomponent/search.css'

export default function Search(){

    const [name,setname]=useState([])
    const [cityName,setCityName] = useState('')

    // initialLoadingApi
        useEffect(()=>{
            const APIkey='136beb0723e116ecf079f4816838a57a';
            const Apiurl=`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${APIkey}&units=metric`
            axios.get(Apiurl).then(data=>{setname([data.data])
            }).catch((err)=>{
                alert("enter valid city name")
            })
        },[])
    // when we click submit button.api call
        function handleSubmit(){
            const APIkey='136beb0723e116ecf079f4816838a57a';
            const Apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`
            axios.get(Apiurl).then(data=>{setname([data.data])
            }).catch((err)=>{
                alert("enter valid city name")
            })
        }

 
    return(
        <React.Fragment>
            <div className="container">
{/* searchbar input starts */}
            <Paper className="searchBar_main" component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                <InputBase sx={{ ml: 1, flex: 1 }} onChange={e => setCityName(e.target.value)}
                placeholder="Search By Name " inputProps={{ 'aria-label': 'Search By Name' }}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon onClick={handleSubmit}/>
                </IconButton>
            </Paper>
{/* search bar input end */}

{/* current weather component start */}
            <div className="comp mt-2">
                <Currentweather data={name}/>
            </div>  
{/* current weather component end */}
            </div>
        </React.Fragment>
    )
}