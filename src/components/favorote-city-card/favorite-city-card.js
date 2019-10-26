import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 150,
  },
  media: {
    height: 140,
  },
});

const FavoriteCityCard = ({city, temperetare, units, condition}) => {
    const classes = useStyles();

    return (
    <Grid item xs={6} sm={4} md={2}> 
      <Card className={classes.card}>
        <CardActionArea>
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {city}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {temperetare}&deg;{units}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {condition}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
      </Grid>
    )
}

export default FavoriteCityCard