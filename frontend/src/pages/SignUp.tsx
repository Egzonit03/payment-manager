
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Material UI imports
import { TextField, FormControl, IconButton, Input,InputLabel, InputAdornment, 
         Button, Stack, Alert } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';

//Email Validation
const isEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function SignUp() {

    //Password Field
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    //Inputs
    const[usernameInput, setUsernameInput] = useState<string>('');
    const[emailInput, setEmailInput] = useState<string>('');
    const[passwordInput, setPasswordInput] = useState<string>('');

    //Input Errors
    const[usernameError, setUsernameError] = useState(false);
    const[emailError, setEmailError] = useState(false);
    const[passwordError, setPasswordError] = useState(false);

    //Overall Form Validity
    const[formValid, setFormValid] = useState<string | null>(null);
    const[success, setSuccess] = useState<string | null>(null);

    //In the state declarations
    const[confirmPasswordInput, setConfirmPasswordInput] = useState<string>('');
    const[confirmPasswordError, setConfirmPasswordError] = useState<boolean>(false);

    //Validation for onBlur Username
    const handleUsername = () => {
        if(!usernameInput || usernameInput.length < 5 || usernameInput.length > 25) {
            setUsernameError(true);
            return;
        }
        setUsernameError(false);
    };

    //Validation for onBlur Email
    const handleEmail = () => {
        console.log(isEmail(emailInput));
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

    //Validation for confirmPassword
    const handleConfirmPassword = () => {
        if(confirmPasswordInput !== passwordInput) {
            setConfirmPasswordError(true);
            return;
        }
        setConfirmPasswordError(false);
    };

    const handleSubmit = async () => {
        setSuccess(null);

        if(usernameError || !usernameInput) {
            setFormValid('Username is set to 5-25 characters long. Please Re-Enter!');
            return;
        }

        if(emailError || !emailInput) {
            setFormValid('Email is Invalid. Please Re-Enter!');
            return;
        }

        if(passwordError || !passwordInput) {
            setFormValid('Password must be 5-20 characters long and it must contain mixed letters and symbols. Please Re-Enter!');
            return;
        }

        if(passwordInput !== confirmPasswordInput) {
            setFormValid('Passwords do not match!');
            return;
        }

        if(!passwordInput || !confirmPasswordInput) {
            setFormValid('Please make sure you enter both password fields!');
            return;
        }

        setFormValid(null);

        const registrationData = { 
            username: usernameInput,
            email: emailInput,
            password: passwordInput,
            confirmPassword: confirmPasswordInput,
        };

        console.log('Registration Data: ', registrationData);

        try {
            const response = await axios.post('http://127.0.0.1:3000/api/users/register', registrationData);
            console.log('Response: ', response.data);
            setSuccess('Registration made successfully!')
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                console.error('Error Response: ', error.response?.data);
                setFormValid(error.response?.data.error || 'An unexpected error occurred while trying to sign up!');
            } else {
                console.error('An unexpected error occurred while trying to sign up: ', error);
                setFormValid('Registration failed! Please try again.');
            }
        }
    };
    
    return(
        <>
        <div className='signPage'>
            <div style={{marginTop:'10px'}}>
                <TextField id = 'standard-basic' 
                           error = {usernameError}
                           label = 'Username'
                           variant = 'standard'
                           fullWidth size = 'small'
                           value = {usernameInput}
                           onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setUsernameInput(event.target.value)}
                           onBlur = {handleUsername} />
            </div>
            <div style= {{marginTop:'5px'}}>
                <TextField id='standard-basic'
                           error = {emailError}
                           label = 'E-mail'
                           variant = 'standard'
                           fullWidth size = 'small'
                           value = {emailInput}
                           onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setEmailInput(event.target.value)}
                           onBlur = {handleEmail} />
            </div>
            <div style={{marginTop:'5px'}}>
                <FormControl sx={{width:'100%'}} variant='standard'>
                    <InputLabel error={passwordError} htmlFor='standard-adornment-password'>Password</InputLabel>
                    <Input
                    id = 'standard-adornment-password'
                    type = {showPassword ? 'text' : 'password'}
                    error = {passwordError}
                    value = {passwordInput}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>) => setPasswordInput(event.target.value)}
                    onBlur = {handlePassword}
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
                            aria-label = {
                                showPassword ? 'hide the passsword' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <FormControl sx={{width:'100%'}} variant='standard'>
                    <InputLabel error={confirmPasswordError} htmlFor='confirm-password'>Confirm Password</InputLabel>
                    <Input
                    id = 'confirm-password'
                    type = {showPassword ? 'text' : 'password'}
                    error = {confirmPasswordError}
                    value = {confirmPasswordInput}
                    onChange = {(event) => setConfirmPasswordInput(event.target.value)}
                    onBlur = {handleConfirmPassword}
                    endAdornment = {
                        <InputAdornment position='end'>
                            <IconButton
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
            <div style={{marginTop:'10px'}}>
                <Button onClick={handleSubmit} fullWidth variant='contained' startIcon={<LoginIcon />} sx={{
                    background: 'linear-gradient(135deg, #064e3b, #0f766e, #344e41)',
                    border: '1px solid gray',
                    transition: 'transform 0.3s ease',
                    '&:hover' : {
                        transform: 'scale(1.05)'
                    }
                }}>SIGN UP</Button>
            </div>

            {/*Show Form Error if there is any */}
            {formValid && (
                <Stack sx={{width:'100%', paddingTop:'10px'}} spacing={2}>
                    <Alert severity='error'>
                        {formValid}
                    </Alert>
                </Stack>
            )}

            {/** Show Success if there are no issues */}
            {success && (
                <Stack sx={{width:'100%', paddingTop:'10px'}} spacing={2}>
                    <Alert severity='success'>
                        {success}
                    </Alert>
                </Stack>
            )}

            <div style={{marginTop:'7px', fontSize:'10px', margin:'left'}}>
                <a href='#' style={{color:'white'}}>Forgot Password</a>
                <br/>
                <span style={{color:'black', textShadow:'2px 4px 10px white'}}>Do you have an account already ? {' '}</span>
                <Link to=''><small style={{textDecoration: 'underline', color: 'whitesmoke'}}>Login</small></Link>
            </div>
        </div>
        </>
    )
}

export default SignUp;