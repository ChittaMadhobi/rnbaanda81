// This is actually the root reducer. We call places.js because the application deals with places.
import { ADD_PLACE, DELETE_PLACE } from "../actions/actionTypes";
// Initial state (where do we start the application). This is same as in app.js initial state
const initialState = {
  places: []
};

// Reducer gets the old state (as 'state') and action it has to perform as ('action)
// Using new js feature, we set state as initialState is no prior state exists
const reducer = (state = initialState, action) => {
  // In redux, whole state is updates. Thus we start with original state as in spread operator
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName, // in action/places.js, ADD_PLACE provides it as placeName
          image: {
            uri:
              "https://www.dailygalaxy.com/wp-content/images/6a00d8341bf7f753ef01b7c80e694e970b.jpg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.placeKey; 
        })
      };

    default:
      return state;
  }
};

export default reducer;
