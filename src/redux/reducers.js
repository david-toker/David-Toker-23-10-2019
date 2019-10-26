import Actions from "./actions.config";

const initialState = {
    favorites: [],

    fiveDayWeather: [],
    search: null,
    allDataForCity: null
}

const updateFavoriteCards = (arr, idx) => {
    return [
        ...arr.slice(0, idx),
        ...arr.slice(idx+1)
    ]
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
            const city = action.payload;
            const { favorites } = state;
            return {
                ...state,
                favorites: [...favorites, city]
            }
        }
        case Actions.REMOVE_FROM_FAVORITE: {
            const city = action.payload;
            const { favorites } = state;
            const itemIndex = favorites.findIndex(({city}) => city === action.payload.city);
            ;
            return {
                ...state,
                favorites: updateFavoriteCards(favorites, itemIndex)
            }
        }

        default: {
            return state;
        }
    }
}