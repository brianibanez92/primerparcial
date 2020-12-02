import { getData, getDetails } from '../../utils/httpServices'

// Actions
const LOADING_APP   = 'LOADING_APP';
const LOADED_APP   = 'LOADED_APP';
const FETCH_DATA   = 'FETCH_DATA';
const FETCH_DATA_DETAIL   = 'FETCH_DATA_DETAIL';

const defaultState = {
    appName: 'primer parcial',
    loading: false,
    error: false,
    errorMessage: '',
    data: [],
    details: []
};

// Reducer
export default function reducer(state = defaultState, action) {

    const {type, payload} = action;
    
    switch (action.type) {
        case LOADING_APP:
            return {
                ...state,
                loading: true,
                error: false,
                errorMessage: ''
            };
        case LOADED_APP:
            return {
                ...state,
                loading: payload.loading,
                error: payload.error,
                errorMessage: payload.errorMessage
            };
        case FETCH_DATA:   
            console.log("FETCH_DATA");
            console.log(payload);
            return {
                ...state,
                data: payload
            };
        case FETCH_DATA_DETAIL:   
            console.log("FETCH_DATA_DETAIL");
            console.log(payload);
            return {
                ...state,
                details: payload
            };

    default: return state;
  }
}

// Action Creators
export function loadingApp() {
    return { 
        type: LOADING_APP
    };  
}

export function loadedApp(loading, error, errorMessage) {
    return { 
        type: LOADED_APP,
        payload: {
            loading,
            error,
            errorMessage
        }
    };  
}

export function fetchData(data) {

    return { 
        type: FETCH_DATA,
        payload: data
    };  
}

export function getPokemons() {

    return async (dispatch, state) => {

        try {

            let pokes = await getData();
            console.log(pokes.results);
            dispatch(fetchData(pokes.results));
        } 
        catch(ex){

            dispatch(loadedApp(false, true, 'Error al obtener datos'));

        }

    };

}

export function fetchDataDetail(data) {

    console.log("fetch data detail");
    console.log(data);

    return { 
        type: FETCH_DATA_DETAIL,
        payload: data
    };  
}

export function getPokemonDetails(id) {

    return async (dispatch, state) => {

        try {

            let result = await getDetails(id);
            console.log(result);
            dispatch(fetchDataDetail(result));
        } 
        catch(ex){

            dispatch(loadedApp(false, true, 'Error al obtener datos'));

        }

    };

}
