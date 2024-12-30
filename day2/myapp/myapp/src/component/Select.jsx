import { Button, Typography } from '@mui/material'
import React,{useState} from 'react'

const Select = () => {
  var [name,setname]=useState()
  const anjali=()=>{
    setname("anjali")
  }
  const minnu=()=>{
    setname("minnu")
  }
  const anu=()=>{
    setname("anu")
  }
  return (
    <div>
      <Typography variant='h3'>welcome{name}</Typography>
      <Button variant='contained'color='inherit'onClick={anjali}>anjali</Button>&nbsp;&nbsp;
      <Button variant='contained'color='inherit'onClick={minnu}>minnu</Button>&nbsp;&nbsp;
      <Button variant='contained'color='inherit'onClick={anu}>anu</Button>
    </div>
  )
}

export default Select
