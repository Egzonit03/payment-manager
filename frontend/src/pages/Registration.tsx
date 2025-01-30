/* This is the registration page, which is going to call the SignUp or Login
component based on the state of the Chip component, which is set by deafult 'checked' and 
the Login component is called, otherwise, if 'unchecked', the SignUp component is called. */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import './SignUp';
import './Login';

//Material UI imports
import { Paper, Chip, Switch, Button } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import SignUp from './SignUp';
import Login from './Login';

function Register() {

    const [checked, setChecked] = React.useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const navigate = useNavigate();

    return(
        <div className='register-container'>
            <div className='registration'>
                <Paper elevation={3} style={{padding:'10px', backgroundColor:'#1111', border:'1px solid gray'}}>
                    {checked ? (
                        <Chip icon={<FaceIcon/>} label='Sign Up' variant='filled' sx={{backgroundColor:'#1111'}} />
                    ) : (
                        <Chip icon={<LockIcon/>} label='Login' variant='filled' sx={{backgroundColor:'#1111'}} />
                    )}
                    <br/>
                    <Switch checked={checked} onChange={handleChange} inputProps={{'aria-label' : 'controlled'}} className='switch-button'
                    sx={{
                        '& .MuiSwitch-thumb': {
                          backgroundColor: '#0f766e'
                        }
                      }}
                    />
                    <br/>
                    {checked ? <SignUp/> : <Login/>}
                </Paper>
            </div>
            <Button variant='contained' startIcon={<PublicIcon/>} 
            sx={{marginTop:'25px', width:'350px', 
                background: 'linear-gradient(135deg, #064e3b, #0f766e, #344e41)',
                transition: ' transform 0.3s ease',
                border: '1px solid gray',
                '&:hover': {
                    boxShadow: '2px 4px 10px gray',
                    transform: 'scale(1.05)'
                }
            }}
            onClick={() => navigate('/menu')}>Try EGZO as a Guest</Button>
        </div>
    )
}

export default Register;