import React, { Component } from 'react';
import { connect } from 'react-redux';


import Grid from '@material-ui/core/Grid';


import { getCityFiveDayAction, searchCityAction, getCityCurrentConditions } from "../../redux/actions";
import CityCardHeader from '../city-card-header/city-card-header';
import DailyWeatherItem from '../daily-weather-item/daily-weather-item';

class CityCard extends Component {
    
    componentDidMount(){
        // this.props.reduxActions.getDefaultCity(this.props.id);
        // this.props.reduxActions.getCityCurrentConditions(this.props.search.Key);
        // this.props.reduxActions.getCityAction(this.props.search.Key);
        // console.log(this.props.search)
    }

    addToFavorite = (city) => {
        console.log('wooorks', city);
        console.log(this.props.search.Key);
    }
    render() {
        const { fiveDayWeather, allDataForCity} = this.props;
        
        const { LocalizedName } = this.props.search;

        if (!allDataForCity) {
          return null;  
        }
        // if (!city) {
        //   return null;  
        // }
        
        const cardsDay = fiveDayWeather.map((day,idx)=><DailyWeatherItem key={idx}
        date={day.Date}
        maxTemp={day.Temperature.Maximum.Value} minTemp={day.Temperature.Minimum.Value}
        units={day.Temperature.Minimum.Unit}
        />);

        return (
            <Grid item xs={12} sm={12} md={12}>
            <div>
                <CityCardHeader city={LocalizedName} temperature={allDataForCity.data[0].Temperature.Imperial.Value} units={allDataForCity.data[0].Temperature.Imperial.Unit}
                favorite={true}
                addToFavorite={this.addToFavorite}/>
                <Grid container spacing={4}>
                    {cardsDay}
                </Grid>
            </div>
            </Grid>
        )
    }
}



// const CityCard = ({city, temperature=18, fiveDayWeather}) => {
    
//     // console.log(fiveDayWeather)
//     return (
//         <Grid item xs={12} sm={12} md={12}>
//         <div>
//             <CityCardHeader city={city} temperature={temperature}/>
//         </div>
//         </Grid>
//     )
// }

const mapStateToProps = (state) => {
    const { fiveDayWeather, allDataForCity, search } = state;
    return {fiveDayWeather, allDataForCity, search};
};

const mapDispatchToProps = (dispatch) => {
    return {
        //this object will be assigned to the component props
        reduxActions: {
            getCityCurrentConditions: (key) => {
                dispatch(getCityCurrentConditions(key))
            }
            

        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityCard);

// export default CityCard;