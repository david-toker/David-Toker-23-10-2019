import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const CityCardHeader = ({city, temperature, units, favorite, changeFavoriteCards}) => {
    const classes = useStyles();
    const heartStyle = favorite ? {color:'red'} : {color: 'white'}
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title}>
                {city} {temperature}&deg;{units}
            </Typography>
            <FavoriteIcon style={heartStyle}/>
            {/* <Button color="inherit" onClick={()=>addToFavorite(city)}>
              {favorite ? 'Remove from favorires':'Add to Favorites'}
            </Button>
            <Button color="inherit" onClick={()=>removeFromFavorite(city)}>
              temprorary remove
            </Button> */}
            <Button color="inherit" onClick={()=>changeFavoriteCards(city)}>
              {favorite ? 'Remove from favorires':'Add to Favorites'}
            </Button>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default CityCardHeader;