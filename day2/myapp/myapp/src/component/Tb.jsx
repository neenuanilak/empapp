import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tb = () => {
  return (
    <div><TableContainer>
    <Table>
      <TableHead>
          <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>City</TableCell>
              </TableRow></TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>Annu</TableCell>
                      <TableCell>Java</TableCell>
                      <TableCell>France</TableCell>
                  </TableRow>
                  </TableBody>
                  </Table>
                  </TableContainer></div>
  )
}

export default Tb