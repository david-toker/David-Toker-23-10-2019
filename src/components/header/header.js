import React from 'react';
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


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

  
  const Link1 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/" {...props} />
  ));
  const Link2 = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} to="/favorites-page" {...props} />
  ));
const WeatherHeader = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Herolo Weather Task
          </Typography>
            <Button color="inherit"  component={Link1}>
                HOME
            </Button>
            <Button color="inherit"  component={Link2}>
              FAVORITES
            </Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default WeatherHeader;