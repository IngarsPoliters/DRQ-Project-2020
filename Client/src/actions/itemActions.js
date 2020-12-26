import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, LOADING_FISH } from './types';


export const getItems = () => dispatch => {// using thunk to make an async request
    //Using dispatch to send the item type
    dispatch(setFishLoading());
    axios
        .get('/api/items')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};

export const addItem = (item) => dispatch => {
    axios.post('/api/items', item)
        .then(res => dispatch({
            type: ADD_ITEM,
            payload: res.data
        }))
};

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/items/${id}`).then(res => dispatch({
        type: DELETE_ITEM,
        payload: id
    }))
};

export const setFishLoading = () => {
    return {
        type: LOADING_FISH// set LOADING_FISH to true;
    }
}