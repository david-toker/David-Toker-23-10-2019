import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FavoriteCityCard from '../favorote-city-card/favorite-city-card';


const FavoritesPage = ({favorites}) => {
    console.log(favorites);
    const favoriteList =  favorites.length ? favorites.map((city, idx)=><FavoriteCityCard key={idx} city={city.city} temperetare={city.weather.Temperature.Imperial.Value} units={city.weather.Temperature.Imperial.Unit} condition={city.weather.WeatherText}/>): <h1>nothing added yet</h1>
    return (
        <div>
            <Container>
                <h1>favorites page</h1>
                <Grid container spacing={4}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch">
                    {favoriteList}
                </Grid>  
            </Container>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { favorites } = state;
    return { favorites };
}

export default connect(
    mapStateToProps,
    null
)(FavoritesPage);