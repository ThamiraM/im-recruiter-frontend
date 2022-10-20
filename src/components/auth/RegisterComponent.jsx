import { Button, Stack, TextField, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import MinimalLayout from "../layouts/MinimalLayout"

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
            const userData = { name, email, password }
            dispatch(register(userData))
        }
    }

    return (
        <>
            <MinimalLayout>
                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 4 }}>
                    Register User
                </Typography>
                <Typography gutterBottom={true} variant="subtitle1" sx={{ mb: 4 }}>Let's get started ..!</Typography>
                <form onSubmit={onSubmit}>
                    <Stack spacing={3} sx={{ width: { sm: '100vw', md: '30vw' } }}>
                        <TextField id="name" required={true} name="name" label="Name" value={name} variant="outlined" onChange={onChange} />
                        <TextField id="email" required={true} name="email" label="Email" type="email" value={email} variant="outlined" onChange={onChange} />
                        <TextField id="password" required={true} name="password" label="Password" type="password" value={password} variant="outlined" onChange={onChange} />
                        <TextField id="password2" required={true} name="password2" label="Confirm Password" type="password" value={password2} variant="outlined" onChange={onChange} />
                        <Button variant="contained" type='submit' sx={{ p: 2 }} >Submit</Button>
                    </Stack>
                </form>
            </MinimalLayout>
        </>
    )
}

export default Register