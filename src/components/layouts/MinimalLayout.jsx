import { Button, Grid, Typography } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import SliderComponent from '../ui/slider/SliderComponent'
import './css/layouts.css'

function MinimalLayout({ children }) {
    return <>
        <Grid container spacing={2} className='header'>
            <Grid item xs={12} md={6} className="logo">
                <Typography variant="p" component="div" >
                    IM RECRUITER
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="links">
                <ReactLink to="/register" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Vacancies</Button>
                </ReactLink>
                <ReactLink to="/register" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Register</Button>
                </ReactLink>
                <ReactLink to="/login" style={{ textDecoration: 'none' }}>
                    <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                </ReactLink>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SliderComponent />
                </Grid>
                <Grid item xs={6}>
                    {children}
                </Grid>
        </Grid>
    </>
}

export default MinimalLayout