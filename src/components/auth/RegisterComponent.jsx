import { Button, Grid, Stack, TextField, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { reset } from '../../features/auth/authSlice'
import { register } from '../../features/auth/authActions'
import MinimalLayout from "../layouts/MinimalLayout"
import CSRFTokenComponent from "../common/csrf/CSRFTokenComponent"


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        // Redirect when logged in 
        if (isSuccess) {
            navigate('/login')
        }

        dispatch(reset())
    }, [isError, isSuccess, user, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Passwords do not match')
        } else {
           const userData = { name, username: email, password, password2 }
           dispatch(register(userData))
        }
    }

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >

                <form onSubmit={onSubmit}>
                    <CSRFTokenComponent />
                    <Stack spacing={3} sx={{ width: { lg: '40vw', md: '100vw', marginTop: '20%' }, backgroundColor: '#ffff', p: 3, borderRadius: '10px' }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ mb: 4 }}>
                            Register User
                        </Typography>

                        <TextField id="name" required={true} name="name" label="Name" value={name} variant="outlined" onChange={onChange} />
                        <TextField id="email" required={true} name="email" label="Email" type="email" value={email} variant="outlined" onChange={onChange} />
                        <TextField id="password" required={true} name="password" label="Password" type="password" value={password} variant="outlined" onChange={onChange} />
                        <TextField id="password2" required={true} name="password2" label="Confirm Password" type="password" value={password2} variant="outlined" onChange={onChange} />
                        <Button variant="contained" type='submit' sx={{ p: 2, backgroundColor: '#4c1d95' }} >Register</Button>
                    </Stack>
                </form>
            </Grid>
        </>
    )
}

export default Register