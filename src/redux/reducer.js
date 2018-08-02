import axios from 'axios';

//InitialState
const InitialState = {
    searchKey: '',
    images: []
};

//Action types
const CHANGE_SEARCHKEY = 'CHANGE_SEARCHKEY';
const GET_IMAGES = 'GET_IMAGES';

//Action creators
    //changes the 'searchKey' value on redux state
    export function changeSearchKey(value){
        return {
            type: CHANGE_SEARCHKEY,
            payload: value
        }
    }

    //Makes an AJAX request to get images from flickr
    export function getImages(searchTerm){
        let flickrImages = axios.post('getPictures', {searchTerm}).then(response => {
            console.log(response.data.items)
            return response.data.items
        });
        return {
            type: GET_IMAGES,
            payload: flickrImages
        }
    }

//Reducer function
export default function(state = InitialState, action){
    switch(action.type){
        case CHANGE_SEARCHKEY:
            return Object.assign({}, state, {searchKey: action.payload})
        case GET_IMAGES + '_FULFILLED':
            return Object.assign({}, state, {images: action.payload})
        default:
            return state
    }
}