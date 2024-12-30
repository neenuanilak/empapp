import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios';

const Product = () => {
    var[user,setuser]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        console.log(response.data)
        setuser(response.data)
    }
    )
        return (
    <div><Grid container spacing={2}>
        {user.map((val)=> {
            return (
                <Grid item xs={12} mid={4} sm={6}>
        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={val.image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {val.title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {val.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card></Grid>
            )
        })}</Grid></div>
  )
        
}

export default Product