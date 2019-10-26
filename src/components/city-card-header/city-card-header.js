import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Snackbar,IconButton} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';


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
    close: {
      padding: theme.spacing(0.5),
    },
  }));

const CityCardHeader = ({city, temperature, units, favorite, changeFavoriteCards}) => {
    const classes = useStyles();
    const heartStyle = favorite ? {color:'red'} : {color: 'white'}

    const [open, setOpen] = React.useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {city} {temperature}&deg;{units}
            </Typography>
            <FavoriteIcon style={heartStyle}/>
            <Button color="inherit" onClick={()=>{
              changeFavoriteCards(city)
              setOpen(true);
              }}>
              {favorite ? 'Remove from favorires':'Add to Favorites'}
            </Button>


            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{favorite ? 'Added to Favorites' : 'Removed from Favorires'}</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={handleClose}>
            ok
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />

            </Toolbar>
        </AppBar>
        </div>
    );
};

export default CityCardHeader;