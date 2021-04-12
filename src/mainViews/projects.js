import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 600,
      height: 450,
      align: 'center'
    },
  },

  indivelement: {
      width: 200,
      height: 200,
      margin: '3.5%',
      outline: '2px solid',
      float: 'center'
  }
}));

export default function ProjectButtons() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        
        <Button variant="outlined" color="primary" className={classes.indivelement}>
          Unemployment Rate vs. Cases
        </Button>

        <Button variant="outlined" color="primary" className={classes.indivelement}>
          Mask Use Efficiency
        </Button>
        
        <Button variant="outlined" color="primary" className = {classes.indivelement}>
          Confidence Interval: Return to Normal
        </Button>

        <Button variant="outlined" color="primary" className = {classes.indivelement}>
          Project 4
        </Button>

        
        
      </div>
    );
  }