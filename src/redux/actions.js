import Actions from "./actions.config"
import Service from "./service";


export const getCitySuccessAction = (fiveDayWeather) => {
    return {
        type: Actions.GET_DEFAULT_CITY_SUCCESS,
        payload: { fiveDayWeather }
    }
}


export const getCityFiveDayAction = (key) => {
    return async (dispatch) => {
        const result = await Service.getFiveDayForecast(key);
        dispatch(getCitySuccessAction(result.data.DailyForecasts))
    }
}


export const searchCitySuccess = (search) => {
    return {
        type: Actions.SEARCH_CITY_BY_NAME,
        payload: { search }
    }
}; 


const searchError = (error) => {
    return {
      type: Actions.SEARCH_CITY_BY_NAME_FAILURE,
      payload: {error}
    };
};


// export const searchCityAction = (name) => {
//     return async (dispatch) => {
//         const result = await Service.searchCity(name);
//         dispatch(searchCitySuccess(result.data))
//     }
// }
export const searchCityAction = (name) => {
    return async (dispatch) => {
        try {
            const result = await Service.searchCity(name);
            dispatch(searchCitySuccess(result.data))
        } catch (error) {
            dispatch(searchError(error))
        }
        
    }
}

export const CityWeatherDataSuccess = (allDataForCity) => {
    return {
        type: Actions.GET_CITY_WEATHER,
        payload: {allDataForCity}
    }
}

export const getCityCurrentConditions = (key) => {
    return async (dispatch) => {
        const result = await Service.getCurrentConditions(key);
        dispatch(CityWeatherDataSuccess(result))
    }
}

export const addCityToFavorite = (city) => {
    return {
        type: Actions.ADD_TO_FAVORITE,
        payload:city
    }
}

export const removeCityFromFavorite = (city) => {
    return {
        type: Actions.REMOVE_FROM_FAVORITE,
        payload:city
    }
}