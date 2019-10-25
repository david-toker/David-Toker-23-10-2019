import React, {Component} from 'react';
import { connect } from 'react-redux';


import TextField from '@material-ui/core/TextField';import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { getCityFiveDayAction, searchCityAction, getCityCurrentConditions } from "../../redux/actions";
// import DailyWeatherItem from '../daily-weather-item/daily-weather-item';
import CityCard from '../city-card/city-card';

class WeatherPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        }
    }
    onLabelChange = (e) => {
        this.setState({
            label:e.target.value
        })
    }


    onSubmit = (event) => {
        const {label} = this.state;
        event.preventDefault();
        if (label.trim()) {
            this.props.reduxActions.searchCity(label);
            // this.props.onItemAdded(label);
            this.setState({
                label: ''
            });  
        }
        else {
            alert('Please enter new task!')          
        }
        
    }

    componentDidMount() {
        this.props.reduxActions.getCityFiveDayAction(215854);
        this.props.reduxActions.getCityCurrentConditions(215854);
        this.props.reduxActions.searchCity("tel aviv");
        // console.log(this.props.reduxActions.getCityFiveDayAction())
        console.log(this.props.search)
        // this.setState({
        //     city:this.props.reduxActions.getCityFiveDayAction()
        // });
        // console.log(this.state.city)
    }

    componentDidUpdate(prevProps){
        if(this.props.search!==prevProps.search){

            console.log(this.props.search);
            this.props.reduxActions.getCityFiveDayAction(this.props.search.Key);
            this.props.reduxActions.getCityCurrentConditions(this.props.search.Key);
            // this.props.reduxActions.searchCity(this.props.search.LocalizedName);
        }
    }

    render() {
        // console.log(this.props)
        const {fiveDayWeather, search} = this.props;
        if(!search) {
            return null;
        }
        return(
        <div>
            <Container>
            <h1>weather page</h1>
            <form onSubmit={this.onSubmit}>
            <TextField
                    id="outlined-name"
                    label="chek weather in your city"
                    margin="normal"
                    variant="outlined"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
            </form>
            <Grid container>
            {/* {search.map((city)=><CityCard key={city.Key} city={city.LocalizedName} id={city.Key}/>)} */}
            {/* <CityCard  city={search.LocalizedName} id={search.Key}/> */}
            <CityCard/>
            </Grid>
            </Container>
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
            getCityFiveDayAction: (key) => {
                dispatch(getCityFiveDayAction(key))
            },
            searchCity: (search) => {
                dispatch(searchCityAction(search))
            },
            getCityCurrentConditions: (key) => {
                dispatch(getCityCurrentConditions(key))
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WeatherPage);

// export default WeatherPage;