import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Component } from 'react'

export default function Footer() {


  return (
    <Grid container>
    <Box style={{backgroundColor:'red', color:'black', height:'50px'}} sx={{ flexGrow: 1 }}>
        <Typography align='center' pt={2}>
          SE161323 - Nguyen Minh Huy &copy; 2022
        </Typography>
    </Box>
  </Grid>
  );
}
