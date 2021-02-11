import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowUpward';
import LocalHospital from '@material-ui/icons/Loop';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100%',
    width: '25%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  avatar: {
    backgroundColor: colors.purple[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  },

  title: {
    textAlign: 'left'

  }
}));

const Recov = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          
          <Grid item>
            <div className={classes.title}>
            <Typography
              color="textSecondary"
              
              gutterBottom
              variant="h6"
            >
              RECOVERIES
            </Typography>

            </div>
            
            <Typography
              color="textPrimary"
              variant="h3"
            >
              7,481
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <LocalHospital />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <ArrowDownwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since yesterday
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Recov.propTypes = {
  className: PropTypes.string
};

export default Recov;