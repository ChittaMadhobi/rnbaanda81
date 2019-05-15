// import action types needed by the application
import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

// We start with addPlace function. This (as before) takes placeName
// as input and returns a js object.
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,     // 'type' is hard-needed 
        placeName: placeName
    };
}

// Now we need to pass the key
export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}
