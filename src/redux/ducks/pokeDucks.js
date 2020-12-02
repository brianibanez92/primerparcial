// import store from '../store'

// // Actions
// const LOADING_APP   = 'LOADING_APP';
// const LOADED_APP   = 'LOADED_APP';

// const defaultState = {
//     loading: false,
//     error: false,
//     errorMessage: ''
// };



// const LOAD   = 'my-app/widgets/LOAD';
// const CREATE = 'my-app/widgets/CREATE';
// const UPDATE = 'my-app/widgets/UPDATE';
// const REMOVE = 'my-app/widgets/REMOVE';

// // Reducer
// export default function reducer(state = defaultState, action) {

//     const {type, payload} = action;

//     switch (action.type) {

//         case LOADING_APP:
//             return {
//                 ...state,
//                 loading: true,
//                 error: false,
//                 errorMessage: ''
//             };

//         case LOADED_APP:
//             return {
//                 ...state,
//                 loading: payload.loading,
//                 error: payload.error,
//                 errorMessage: payload.errorMessage
//             };

//     default: return state;
//   }
// }

// // Action Creators
// export function loadingApp() {
//     return { 
//         type: LOADING_APP
//     };  
// }

// export function loadedgApp(loading, error, errorMessage) {
//     return { 
//         type: LOADED_APP,
//         payload: {
//             loading,
//             error,
//             errorMessage
//         }
//     };  
// }


// export function loadWidgets() {
//   return { type: LOAD };
// }

// export function createWidget(widget) {
//   return { type: CREATE, widget };
// }

// export function updateWidget(widget) {
//   return { type: UPDATE, widget };
// }

// export function removeWidget(widget) {
//   return { type: REMOVE, widget };
// }

// // side effects, only as applicable
// // e.g. thunks, epics, etc
// // export function getWidget () {
// //   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// // }