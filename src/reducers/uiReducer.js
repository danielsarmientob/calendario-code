
import { types } from "../types/types";
import { getDetallesMeses } from '../helpers/getDetallesMeses';

const currentTime = new Date();
const { calendario: mesesDetalles, diasSemanaNombre } = getDetallesMeses()

const initialState = {
    mesActual: currentTime.getMonth(),
    mesSelecc: currentTime.getMonth(),
    diaActual: currentTime.getDate(),
    diaSelecc: currentTime.getDate(),
    mesesDetalles: mesesDetalles,
    diasNombre: diasSemanaNombre,
    yearActual: currentTime.getFullYear(),
}

export const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.mesSelecc:
            const { mesSelecc,...data } = state;
            return({
                mesSelecc: action.payload.mesSelecc,
                ...data
            })
        default:
            return state;
    }
}