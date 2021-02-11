import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles({
    root: {
      minWidth: '100%',
      width: '25%',
      marginLeft: '5%',
    },
    bullet: {
      
      margin: '0 2px',
      
    },
    title: {
      fontSize: 15,
      textAlign: "left",
      marginBottom: 0
    },
    pos: {
      fontSize: 30,
      marginBottom: 10,
      textAlign: "left"
    },

    recent: {
        fontSize: 15,
        textAlign: "left"

    },

    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 1,
        paddingBottom: 1,
      },

      text: {
          width: '80%'
      }

  });
  
  export default function SimpleCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <div className = {classes.controls}>
          <div className = {classes.text}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            CASES
          </Typography>
          </div>
          <LocalHospitalIcon></LocalHospitalIcon>
          </div>

          <Typography className={classes.pos} color="primary">
            100,000
          </Typography>
          
          <Typography className={classes.recent} variant="body2" component="p" color="textPrimary">
            2.4% 
          </Typography>
        </CardContent>
        
      </Card>
    );
  }
