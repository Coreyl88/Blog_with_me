import React from 'react'
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="sticky" elevation={15} sx={{ background: "radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2%)"}}>
      <Toolbar>
        <Typography variant='h4'>
          Blog-With-Me
        </Typography>
        <Box display="flex" marginLeft="auto">
          <Button variant= "contained" sx={{margin: 1, borderRadius: 10}} color="primary">Login</Button>
          <Button variant= "contained" sx={{margin: 1, borderRadius: 10}} color="primary">Register</Button>
        </Box>
      </Toolbar>  
    </AppBar>
  )
}

export default Header