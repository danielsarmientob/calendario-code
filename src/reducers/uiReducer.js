
import { types } from "../types/types";
import { getDetallesMeses } from '../helpers/getDetallesMeses';

const currentTime = new Date();
const { calendario: mesesDetalles, diasSemanaNombre } = getDetallesMeses()

const initialState = {
    mesActual: currentTime.getMonth(),
    mesSelecc: currentTime.getMonth(),
    diaActual: currentTime.getDate(),
    fechaSelecc: {
        dia: currentTime.getDate(),
        mes: currentTime.getMonth(),
    },
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
            });
        case types.fechaSelecc:
            const {fechaSelecc, ...dataD} = state;
            return ({
                fechaSelecc: {
                    dia: action.payload.diaSelecc,
                    mes: action.payload.mesSelecc,
                },
                ...dataD
            });

        case types.fechaActual:
            
            return ({
                mesActual: currentTime.getMonth(),
                mesSelecc: action.payload.mesSelecc,
                diaActual: currentTime.getDate(),
                fechaSelecc: {
                    dia: action.payload.diaSelecc,
                    mes: action.payload.mesSelecc,
                },
                mesesDetalles: mesesDetalles,
                diasNombre: diasSemanaNombre,
                yearActual: currentTime.getFullYear(),
            });
            
            
        default:
            return state;
    }
}