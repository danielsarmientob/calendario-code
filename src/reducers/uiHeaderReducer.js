import { types } from "../types/types";

const initialState = {
    modo: 'semana',
}
export const uiHeaderReducer = (state=initialState, action)=> {
    switch (action.type) {
        case types.cambiarModo:
            return ({
                modo: action.payload.modo
            })            
    
        default:
            return state;
    }
}