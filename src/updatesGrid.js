import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Active from './cards/activecases'
import Hospitalizations from './cards/hospitalizations'
import Recov from './cards/recoveries'

import BasicTable from './cards/table'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: '5%',
    paddingLeft: '2%',
    paddingBottom: '2%'
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },

  basicTableRoot: {
    paddingLeft: '1.85%',
    paddingTop: '2%',
    paddingRight: '5%'

  }
}));


export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
       
      <Grid container spacing={2}>
        
        <Grid item xs={4}>
          
          <Active></Active>


        </Grid>
        <Grid item xs={4}>
          
          <Hospitalizations></Hospitalizations>
        </Grid>
        <Grid item xs={4}>
          
          <Recov></Recov>
        </Grid>
        
      </Grid>
      <div className = {classes.basicTableRoot}>
      <BasicTable></BasicTable>
      </div>

      
    </div>
  );
}