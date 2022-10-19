import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import { Link as ReactLink } from 'react-router-dom'
import SliderComponent from '../ui/slider/SliderComponent'
function MinimalLayout({ children }) {
    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        iM - rEcRuItEr
                    </Typography>
                    <ReactLink to="/register" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Register</Button>
                    </ReactLink>
                    <ReactLink to="/login" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>Login</Button>
                    </ReactLink>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <SliderComponent />
                </Grid>
                <Grid item xs={6}>
                    {children}
                </Grid>
            </Grid>
        </Box>


    </>
}

export default MinimalLayout