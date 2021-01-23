import axios from "axios"

const apiKey = REACT_APP_ACCUWEATHER_API_KEY;


function getCityDefault(key) {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`);
}

function searchCity(search) {

    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${search}`)

};

function getCurrentConditions(key) {
    return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${apiKey}`);
}


function getFiveDayForecast(key) {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`);
}

export default {
    getCityDefault,
    searchCity,
    getCurrentConditions,
    getFiveDayForecast
 }
