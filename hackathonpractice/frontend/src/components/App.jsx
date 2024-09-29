// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './Landing';
import Sender from './Sender';
import { useEffect } from 'react';


function App() {

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'http://localhost:8000/api/healthcheck/',
        })
        .then( (response) => {
            console.log(response.data);
        })
        .catch( (error) => {
            console.log(error);
        });
        
    });


    return (
       
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/submit" element={<Sender />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;