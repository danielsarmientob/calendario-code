
import { types } from "../types/types";

export const cambiarModo =(modo)=> {
    return ({
        type: types.cambiarModo,
        payload: {
            modo
        }
    })
}