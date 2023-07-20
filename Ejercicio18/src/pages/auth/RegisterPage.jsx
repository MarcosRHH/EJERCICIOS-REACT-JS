import React from 'react';
import Registerformik from '../../components/pure/forms/registerFormik';
import { useHistory } from 'react-router-dom';
/* Icons */
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const RegisterPage = () => {

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    const goBack = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
    }

    return (
        <div>
            <h1>Register Page</h1>
            <Registerformik></Registerformik>
            <div className='p-5'>
                <Button variant="outlined" onClick={ () => navigate('/')}>
                    <HomeIcon></HomeIcon>
                </Button>
                <Button variant="outlined" onClick = { goBack }>
                    <ArrowBackIcon/>
                </Button>
                <Button variant="outlined" onClick = { goForward }>
                    <ArrowForwardIcon/>
                </Button>
            </div>
        </div>
    );
}

export default RegisterPage;
