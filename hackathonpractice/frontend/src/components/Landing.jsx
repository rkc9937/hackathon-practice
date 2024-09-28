import Button from '@mui/material/Button';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Landing from './Landing';
// import Sender from './Sender';


function Landing(){
    return(
        <div>
            <h1>Hello World</h1>
            <Button variant="text" href="/submit">Submit an item for search</Button>
        </div>
    )
}
export default Landing;