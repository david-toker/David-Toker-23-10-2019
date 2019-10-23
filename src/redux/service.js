import axios from "axios"


function getCityDefault() {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=5Aew1mbFBJXAWZ281OAGnv6meJumFSGk`);
}

function searchCity(search) {

    return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=5Aew1mbFBJXAWZ281OAGnv6meJumFSGk&q=${search}`)

};


export default {
    getCityDefault,
    searchCity
 }