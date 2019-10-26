import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { removeCityFromFavorite, addCityToFavorite, getCityCurrentConditions } from "../../redux/actions";
import CityCardHeader from '../city-card-header/city-card-header';
import DailyWeatherItem from '../daily-weather-item/daily-weather-item';

class CityCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            isFavorite: false
        }
    }
    

    componentDidUpdate(prevProps){
        if(this.props.search!==prevProps.search){
            const {search, favorites} = this.props;
            const someFavorite = favorites.some(el=>el.city===search.LocalizedName);
            this.setState({
                isFavorite: someFavorite
            })
        }
    }

    changeFavoriteCards = (city) => {
        if(!this.state.isFavorite){
            this.props.reduxActions.addCityToFavorite({weather: this.props.allDataForCity.data[0], city: city});
            this.setState((state)=>{
                return {
                    isFavorite: !state.isFavorite
                }
            })
        }
        else{
            this.props.reduxActions.removeFromFavorite({weather: this.props.allDataForCity.data[0], city: city});
            this.setState((state)=>{
                return {
                    isFavorite: !state.isFavorite
                }
            })
        }
    }

    render() {
        const { fiveDayWeather, allDataForCity} = this.props;
        
        const { LocalizedName } = this.props.search;

        if (!allDataForCity) {
          return null;  
        }
        
        const cardsDay = fiveDayWeather.map((day,idx)=><DailyWeatherItem key={idx}
        date={day.Date}
        maxTemp={day.Temperature.Maximum.Value} minTemp={day.Temperature.Minimum.Value}
        units={day.Temperature.Minimum.Unit}
        />);

        return (
            <Grid item xs={12} sm={12} md={12}>
            <div>
                <CityCardHeader city={LocalizedName} temperature={allDataForCity.data[0].Temperature.Imperial.Value} units={allDataForCity.data[0].Temperature.Imperial.Unit}
                favorite={this.state.isFavorite}
                addToFavorite={this.addToFavorite}
                removeFromFavorite={this.removeFromFavorite}
                changeFavoriteCards={this.changeFavoriteCards}
                />
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                    {cardsDay}
                </Grid>
            </div>
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    const { fiveDayWeather, allDataForCity, search, favorites } = state;
    return {fiveDayWeather, allDataForCity, search, favorites};
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxActions: {
            getCityCurrentConditions: (key) => {
                dispatch(getCityCurrentConditions(key))
            },
            addCityToFavorite: (city) => {
                dispatch(addCityToFavorite(city))
            },
            removeFromFavorite: (city) => {
                dispatch(removeCityFromFavorite(city))
            }
            

        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityCard);