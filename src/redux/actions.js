import Actions from "./actions.config"
import Service from "./service";


export const getCitySuccessAction = (fiveDayWeather) => {
    return {
        type: Actions.GET_DEFAULT_CITY_SUCCESS,
        payload: { fiveDayWeather }
    }
}


export const getCityAction = () => {
    return async (dispatch) => {
        const result = await Service.getCityDefault();
        dispatch(getCitySuccessAction(result.data.DailyForecasts))
    }
}


export const searchCitySuccess = (search) => {
    return {
        type: Actions.SEARCH_CITY_BY_NAME,
        payload: { search }
    }
}; 

export const searchCityAction = (name) => {
    return async (dispatch) => {
        const result = await Service.searchCity(name);
        dispatch(searchCitySuccess(result.data))
    }
}