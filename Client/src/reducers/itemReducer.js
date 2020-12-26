import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuidv4(), name: 'Fish' },
        { id: uuidv4(), name: 'Nemo' },
        { id: uuidv4(), name: 'Dory' },
        { id: uuidv4(), name: 'Shark' }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
};