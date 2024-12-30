import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const counter = () => {
  var [val,setval]=useState(0)
  const add=()=>{
  setval(val+1)
}
const sub=()=>{
setval(val-1)
}
  return (
    <div>
      <Typography variant='h3'>count:{val}</Typography>
      <Button variant="contained" onClick={add}>+</Button>
      <Button variant="contained" onClick={sub}>-</Button>
    </div>
  )
}

export default counter