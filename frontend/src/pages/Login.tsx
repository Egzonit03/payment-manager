
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//Material UI imports
import { TextField, FormControl, IconButton, Input, InputLabel, InputAdornment, 
         Button, Stack, Alert, Checkbox } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

//Email Validation
const isEmail = (email: string): boolean =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function Login() {

    const[showPassword, setShowPassword] = React.useState<boolean>(false);
    const navigate = useNavigate();

    //Inputs
    const[emailInput, setEmailInput] = useState<string>('');
    const[passwordInput, setPasswordInput] = useState<string>('');
    const[rememberMe, setRememberMe] = useState<boolean>(false);

    //The below line of code is only for the reason to use rememberMe because of TypeScript that does not let unused variables
    console.log(rememberMe);

    //Input Errors
    const[emailError, setEmailError] = useState<boolean>(false);
    const[passwordError, setPasswordError] = useState<boolean>(false);

    //Overall Form Validity
    const[formValid, setFormValid] = useState<string | null>(null);
    const[success, setSuccess] = useState<string | null>(null);

    //Handles Display and Hide Password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    //Validation for onBlur Email
    const handleEmail = () => {
        if(!isEmail(emailInput)) {
            setEmailError(true);
            return;
        }
        setEmailError(false);
    };

    //Validation for onBlur Password
    const handlePassword = () => {
        if(!passwordInput || passwordInput.length < 5 || passwordInput.length > 20) {
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
    };

    //Handle Submission
    const handleSubmit = async () => {
        setSuccess(null);

        if(emailError || !emailInput) {
            setFormValid('Email is Invalid. Please Re-Enter!');
            return;
        }

        if(passwordError || !passwordInput) {
            setFormValid('Password is set between 5-20 characters long. Please Re-Enter!');
            return;
        }

        setFormValid(null);

        const loginData = {
            email: emailInput,
            password: passwordInput,
        };

        try {
            const response = await axios.post('http://127.0.0.1:3000/api/users/login', loginData);
            console.log('Response: ', response.data);
            setSuccess('Login successful!');
            navigate('/menu');
            if(response.data?.token) {
                sessionStorage.setItem('token', response.data.token);
            }
        }
        
        catch(error) {
            console.error('There was an error during login: ', error);
            setFormValid('Login failed! Please check your credentials and try again.');
        }
    };

    return(
        <>
        <div>
            <div style={{marginTop:'5px'}}>
                <TextField
                label = 'E-mail'
                fullWidth
                error = {emailError}
                variant = 'standard'
                sx = {{width:'100%'}}
                value = {emailInput}
                size = 'small'
                onBlur = {handleEmail}
                onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {
                    setEmailInput(event.target.value);
                }}
                />
            </div>
            <div style={{marginTop:'5px'}}>
                <FormControl sx={{width:'100%'}} variant='standard'>
                    <InputLabel error={passwordError} htmlFor='standard-adronment-password'>Password</InputLabel>
                    <Input 
                    error = {passwordError}
                    onBlur = {handlePassword}
                    id = 'standard-adornment-password'
                    type = {showPassword ? 'text' : 'password'}
                    value = {passwordInput}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement> ) => {
                        setPasswordInput(event.target.value);
                    }}
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                            aria-label = 'toggle password visibility'
                            onClick = {handleClickShowPassword}
                            onMouseDown = {handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
            </div>
            <div style={{fontSize:'10px'}}>
                <Checkbox
                size = 'small'
                onChange = {(event: React.ChangeEvent<HTMLInputElement>) => {
                    setRememberMe(event.target.checked)
                }}
                />
                Remember Me
            </div>
            <div style={{marginTop:'10px'}}>
                <Button
                variant = 'contained'
                fullWidth
                startIcon = {<LoginIcon />}
                onClick = {handleSubmit}
                sx={{backgroundColor:'#452103'}}
                >
                    LOGIN
                </Button>
            </div>

            {/** Show Form Error if there is any */}
            {formValid && (
                <Stack sx={{width:'100%', paddingTop:'10px'}} spacing={2}>
                    <Alert severity='error'>
                        {formValid}
                    </Alert>
                </Stack>
            )}

            {/** Show success if there are no issues */}
            { success && (
                <Stack sx={{width:'100%', paddingTop:'10px'}} spacing={2}>
                    <Alert severity='success'>
                        {success}
                    </Alert>
                </Stack>
            )}

            <div style={{marginTop:'7px', fontSize:'10px', margin:'left'}}>
                <a href='#' style={{color:'whitesmoke'}}>Forgot Password</a>
                <br />
                Do not have an account?! Click{' '}
                <Link to='/'><small style={{textDecoration:'underline', color:'whitesmoke'}}>Sign Up</small></Link>
            </div>
        </div>
        </>
    )
}

export default Login;