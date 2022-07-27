import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';


function SignupPage({ onSignUp }) {

    const [signUpInfo, setSignUpInfo] = useState({ username: "", password: "", password_confirmation: "", name: "", email_address: "" })
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const navigate = useNavigate()


    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setSignUpInfo({ ...signUpInfo, [name]: value })
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        signUpUser(signUpInfo)
        setIsLoading(true)
    }

    const signUpUser = (signUpInfo) => {
        fetch('/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpInfo)
        })
            .then(res => {
                setIsLoading(false)
                if (res.ok) {
                    res.json().then((user) => onSignUp(user))
                    navigate('/settingsPage')
                } else {
                    res.json().then((err) => setErrors(err.errors))
                    navigate('/signup')
                }
            })
    }

    const handleLogInButton = (e) => {
        navigate('/')
    }


    const handlePasswordClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePasswordClose = () => {
        setAnchorEl(null);
    };


    return (
        <form onSubmit={handleSignUp}>

            <Stack direction="row"
                justifyContent="center">
                <Stack
                    className="signup-stack"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    style={{ minHeight: '50vh' }}
                >
                    <TextField id="outlined-basic" name="username" value={signUpInfo.username} label="Username" variant="outlined" onChange={handleChange} />
                    <TextField
                        id="outlined-basic"
                        name="password"
                        value={signUpInfo.password}
                        label="Password"
                        variant="outlined"
                        type="password"
                        aria-describedby={id}
                        onClick={handlePasswordClick}
                        onChange={handleChange} />
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handlePasswordClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}> <p><small>Must contain:</small></p>
                            <p><small>8 characters</small></p>
                            <p><small>One uppercase letter</small></p>
                            <p><small>One lowercase letter</small></p>
                            <p><small>One digit and a special character</small></p>
                            </Typography>
                    </Popover>

                    <TextField id="outlined-basic" name="password_confirmation" value={signUpInfo.password_confirmation} label="Password Confirmation" variant="outlined" type="password" onChange={handleChange} />
                    <TextField id="outlined-basic" name="name" value={signUpInfo.name} label="Name" variant="outlined" onChange={handleChange} />
                    <TextField id="outlined-basic" name="email_address" value={signUpInfo.email_address} label="Email Address" variant="outlined" onChange={handleChange} />
                    <Stack
                        direction="row"
                        spacing={2}
                        style={{ minHeight: '2vh' }}>
                    </Stack>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center" >
                        <Button type="submit" variant="contained">Sign Up!</Button>
                        <p><small>Have an account?</small></p>
                        <Button onClick={handleLogInButton} variant="contained">Log In!</Button>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                style={{ minHeight: '50vh' }}>
                {errors.map((err) => {
                    return <Alert severity="error">{`${err}`}</Alert>
                })}
            </Stack>
        </form>
    )
}

export default SignupPage