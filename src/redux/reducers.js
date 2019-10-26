import Actions from "./actions.config";

const initialState = {
    favorites: [],

    fiveDayWeather: [],
    search: null,
    allDataForCity: null
}

export default function root(state = initialState, action) {
    console.log(action.payload)
    switch (action.type) {

        case Actions.GET_DEFAULT_CITY_SUCCESS: {
            const { fiveDayWeather } = action.payload;
            return { ...state, fiveDayWeather }
        }

        case Actions.SEARCH_CITY_BY_NAME: {
            const {search} = action.payload;
            return {...state, search: search[0]}
        }

        case Actions.GET_CITY_WEATHER: {
            const {allDataForCity} = action.payload;
            return {...state, allDataForCity}
        }

        case Actions.ADD_TO_FAVORITE: {
            const key = action.payload;
            const { favorites } = state;
            return {
                ...state,
                favorites: [...favorites, key]
            }
        }

        default: {
            return state;
        }
    }
}