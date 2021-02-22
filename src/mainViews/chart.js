import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: colors.lightBlue[500],
        data: [238253, 285016, 481624, 453170, 478474, 510387],
        label: 'Cases',
        fill: false,
        borderColor: colors.lightBlue[500]
        
      },
      
    ],
    labels: ['Sep 1', 'Oct 1', 'Nov 1', 'Dec 1', 'Jan 1', 'Feb 1']
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 5,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <CardHeader
        title="Worldwide New Cases"
        
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Line
            data={data}
            options={options}
            
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        
      </Box>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;