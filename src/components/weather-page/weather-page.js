import React, {Component} from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { getCityAction, searchCityAction } from "../../redux/actions";
import DailyWeatherItem from '../daily-weather-item/daily-weather-item';

class WeatherPage extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         city: [
    //             {
    //               "Date": "2019-10-23T07:00:00+03:00",
    //               "EpochDate": 1571803200,
    //               "Temperature": {
    //                 "Minimum": {
    //                   "Value": 68,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                   "Value": 80,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 }
    //               },
    //               "Day": {
    //                 "Icon": 17,
    //                 "IconPhrase": "Partly sunny w/ t-storms",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Night": {
    //                 "Icon": 41,
    //                 "IconPhrase": "Partly cloudy w/ t-storms",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Sources": [
    //                 "AccuWeather"
    //               ],
    //               "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
    //               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
    //             },
    //             {
    //               "Date": "2019-10-24T07:00:00+03:00",
    //               "EpochDate": 1571889600,
    //               "Temperature": {
    //                 "Minimum": {
    //                   "Value": 69,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                   "Value": 79,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 }
    //               },
    //               "Day": {
    //                 "Icon": 14,
    //                 "IconPhrase": "Partly sunny w/ showers",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //               },
    //               "Sources": [
    //                 "AccuWeather"
    //               ],
    //               "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
    //               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
    //             },
    //             {
    //               "Date": "2019-10-25T07:00:00+03:00",
    //               "EpochDate": 1571976000,
    //               "Temperature": {
    //                 "Minimum": {
    //                   "Value": 68,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                   "Value": 81,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 }
    //               },
    //               "Day": {
    //                 "Icon": 4,
    //                 "IconPhrase": "Intermittent clouds",
    //                 "HasPrecipitation": false
    //               },
    //               "Night": {
    //                 "Icon": 39,
    //                 "IconPhrase": "Partly cloudy w/ showers",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Sources": [
    //                 "AccuWeather"
    //               ],
    //               "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
    //               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
    //             },
    //             {
    //               "Date": "2019-10-26T07:00:00+03:00",
    //               "EpochDate": 1572062400,
    //               "Temperature": {
    //                 "Minimum": {
    //                   "Value": 67,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                   "Value": 76,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 }
    //               },
    //               "Day": {
    //                 "Icon": 7,
    //                 "IconPhrase": "Cloudy",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Night": {
    //                 "Icon": 35,
    //                 "IconPhrase": "Partly cloudy",
    //                 "HasPrecipitation": false
    //               },
    //               "Sources": [
    //                 "AccuWeather"
    //               ],
    //               "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
    //               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
    //             },
    //             {
    //               "Date": "2019-10-27T07:00:00+03:00",
    //               "EpochDate": 1572148800,
    //               "Temperature": {
    //                 "Minimum": {
    //                   "Value": 68,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 },
    //                 "Maximum": {
    //                   "Value": 78,
    //                   "Unit": "F",
    //                   "UnitType": 18
    //                 }
    //               },
    //               "Day": {
    //                 "Icon": 14,
    //                 "IconPhrase": "Partly sunny w/ showers",
    //                 "HasPrecipitation": true,
    //                 "PrecipitationType": "Rain",
    //                 "PrecipitationIntensity": "Light"
    //               },
    //               "Night": {
    //                 "Icon": 34,
    //                 "IconPhrase": "Mostly clear",
    //                 "HasPrecipitation": false
    //               },
    //               "Sources": [
    //                 "AccuWeather"
    //               ],
    //               "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
    //               "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
    //             }
    //           ]
    //     }
    // }

    componentDidMount() {
        this.props.reduxActions.getDefaultCity();
        this.props.reduxActions.searchCity("tel");
        // console.log(this.props.reduxActions.getDefaultCity())
        // console.log(this.props)
        // this.setState({
        //     city:this.props.reduxActions.getDefaultCity()
        // });
        // console.log(this.state.city)
    }

    render() {
        console.log(this.props)
        const {fiveDayWeather} = this.props;
        // const {city} = this.state;
        if (fiveDayWeather.length===0) {
            return null
        }
        return(
        <div>
            <Container>
            <h1>weather page</h1>
            <Grid container spacing={4}>
            {fiveDayWeather.map((day,idx)=><DailyWeatherItem key={idx} date={day.Date} temperature={day.Temperature.Maximum.Value}/>)}
            </Grid>
            </Container>
            {/* <Container>
            <h1>weather page</h1>
            <Grid container spacing={4}>
            {fiveDayWeather.map((day,idx)=><DailyWeatherItem key={idx} date={day.Date} temperature={day.Temperature.Maximum.Value}/>)}
            </Grid>
            </Container> */}
        </div>            
        )
    }
}


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        //this object will be assigned to the component props
        reduxActions: {
            getDefaultCity: () => {
                dispatch(getCityAction())
            },
            searchCity: (search) => {
                dispatch(searchCityAction(search))
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage);

// export default WeatherPage;