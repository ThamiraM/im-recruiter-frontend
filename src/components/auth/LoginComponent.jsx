import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MinimalLayout from '../layouts/MinimalLayout'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function LoginComponent() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    // const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)


    // useEffect(() => {
    //     if (isError) {
    //         toast.error(message)
    //     }

    //     // Redirect when logged in 
    //     if (isSuccess) {
    //         navigate('/dashboard')
    //     }

    //     dispatch(reset())
    // }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        // e.preventDefault()
        // const userData = { email, password }
        // dispatch(login(userData))
    }

    return <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Typography variant="h5" component="div" sx={{ my: 6 }}>
                Login to your Account
            </Typography>
            <form onSubmit={onSubmit}>
                <Stack spacing={3} sx={{ width: { lg: '30vw', md: '100vw' } }} >
                    <TextField id="email" name="email" label="Email" type="email" value={email} onChange={onChange} variant="outlined" />
                    <TextField id="password" name="password" label="Password" type="password" value={password} onChange={onChange} variant="outlined" />
                    <Button variant="contained" sx={{ p: 2, my: 6 }} type='submit'>Login</Button>
                </Stack>
            </form>
        </Grid>
    </>


}

export default LoginComponent