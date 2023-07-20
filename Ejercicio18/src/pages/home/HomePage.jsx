import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';


const HomePage = () => {
    const location = useLocation();

    console.log('We are in Route:', location.pathname); 

    return (
        <div>
            <h1>Home Page</h1>
           
        </div>
    );
}

export default HomePage;
