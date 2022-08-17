import React from 'react'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Pubnub from 'pubnub';

function LoginPage({ onLogin }) {

    const [loginInfo, setLoginInfo] = useState({ username: "", password: "" })
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setLoginInfo({ ...loginInfo, [name]: value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        loginUser(loginInfo)
        setIsLoading(true)
    }


    const loginUser = (loginInfo) => {
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginInfo)
        })
            .then(res => {
                setIsLoading(false)
                if (res.ok) {
                    res.json().then((user) => {
                        onLogin(user)
                    })
                    navigate('/homepage')
                } else {
                    res.json().then((err) => {
                        setErrors(err.errors)
                    })
                    navigate('/')
                }
            })

    }

    const handleSignUpButton = (e) => {
        navigate('/signup')
    }


    return (
        <>
            <form onSubmit={handleLogin}>

                <Stack direction="row"
                    justifyContent="center">
                    <Stack
                        className="login-stack"
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        style={{ minHeight: '50vh' }}
                    >
                        <TextField id="outlined-basic" name="username" value={loginInfo.username} label="Username" variant="outlined" onChange={handleChange} />
                        <TextField id="outlined-basic" name="password" value={loginInfo.password} label="Password" variant="outlined" type="password" onChange={handleChange} />
                        <Stack
                            direction="row"
                            spacing={2}
                            style={{ minHeight: '2vh' }}>
                            <Button
                                className="Login-Button"
                                type="submit"
                                variant="contained">Login</Button>
                            <Button onClick={handleSignUpButton} variant="contained">Sign Me Up!</Button>
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
        </>
    )
}

export default LoginPage