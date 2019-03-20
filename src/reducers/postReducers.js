import type from '../types'

const {
    FETCH_POSTS
} = type;


const initialState ={
    items:[],
}

export default function fetchPost(state= initialState, action){
        switch(action.type){
            case FETCH_POSTS:
                return {
                ...state,
                items:action.payload
            };
            default:
            return state;

        }

    }
