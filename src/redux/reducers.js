import Actions from "./actions.config";

const initialState = {
    favorites: [],
    countries: [],

    fiveDayWeather: [],
    search: []
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
            return {...state, search}
        }

        default: {
            return state;
        }
    }
}