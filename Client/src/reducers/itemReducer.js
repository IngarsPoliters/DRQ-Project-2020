import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, LOADING_FISH } from '../actions/types';


const nemoPic = "https://static.wikia.nocookie.net/pixar/images/a/aa/Nemo-FN.png/revision/latest?cb=20160710221104"
const initialState = {
    items: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false//set loading back to false 
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case LOADING_FISH: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
};