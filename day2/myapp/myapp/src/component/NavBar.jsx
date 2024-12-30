import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div><AppBar color='error'>
        <Toolbar>
            
           <Typography variant="h6">Myapp</Typography>
           <Link to="/login">
            <Button variant="contained">Login</Button>
            </Link>&nbsp;
            <Link to="/signup">
                <Button variant="contained">SignUp</Button>
                </Link>&nbsp;
                <Link to ="/tb">
                <Button variant="contained">Table</Button>
                </Link>&nbsp;
                <Link to="/state">
                  <Button variant="contained">StateSpace</Button>
                </Link>&nbsp;
                <Link to="/counter">
                <Button variant="contained">Counter</Button>
                </Link>&nbsp;
                <Link to="/name">
                  <Button variant="contained">Name</Button>
                </Link>&nbsp;
                <Link to="/api">
                  <Button variant="contained">Api</Button>
                </Link>&nbsp;
                <Link to="/product">
                  <Button variant="contained">Product</Button>
                </Link>
             </Toolbar>
            </AppBar>
            <br/><br/>

            </div>
  )
}

export default NavBar