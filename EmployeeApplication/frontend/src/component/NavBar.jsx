import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <AppBar color="success">
            <Toolbar>
                <Typography variant='h6'>EMPLOYEE DETAILS</Typography>&nbsp;
                <Link to='/add'>
                <Button variant='contained'color='secondary'>Add</Button>
                </Link>&nbsp;
                <Link to='/view'>
                <Button variant='contained'color='secondary'>View</Button>
                </Link>
            </Toolbar>
        </AppBar><br /><br /><br />
    </div>
  )
}

export default NavBar