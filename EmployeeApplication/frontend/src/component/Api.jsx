import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import axios from 'axios'
import React, { useState } from 'react'
     const Api = () => {
       var [user,setUser]=useState([])
       axios.get("http://localhost:3004/view")
       .then((response) =>{
         console.log(response.data)
         setUser(response.data)
       
        } )
    
      return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Department</TableCell>
                            <TableCell>Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((val)=>{
                            return (
                        <TableRow><TableCell>{ val.Name}</TableCell>
                            <TableCell>{ val.Age}</TableCell>
                            <TableCell>{val.Dept}</TableCell>
                            <TableCell>{val.Sal}</TableCell>
                            </TableRow>
                            )
                        })}
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      )
    }
    
    export default Api