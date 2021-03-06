import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 150,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DailyWeatherItem({date, maxTemp, minTemp, units}) {
  const classes = useStyles();
  

  return (
    <Grid item xs={12} sm={4} md={2}>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {moment(date).format('dddd')}
        </Typography>
        <Typography variant="h5" component="h2">
          {moment(date).format("MMM Do YY")}
        </Typography>
        <Typography variant="body2" component="p">
          {maxTemp}&deg;/{minTemp}&deg; {units}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  );
}
