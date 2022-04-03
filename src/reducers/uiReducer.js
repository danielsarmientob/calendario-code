
import { types } from "../types/types";

const initialState = {
    mesActual:  0,
    mesSelecc:  0,
    diaActual:  0,
    fechaSelecc:{ 
        dia: 0,
        mes:  0,
        year: 0,
    },
    mesesDetalles: [],
    diasNombre: [],
    yearActual: 0,
    yearSelecc: 0,
}

export const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.obtenerDetallesYear:
            return action.payload
        
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
                    year: action.payload.yearSelecc,
                },
                ...dataD
            });

        case types.fechaActual:
            
            return ({
                mesActual: state.mesActual,
                mesSelecc: action.payload.mesSelecc,
                diaActual: state.diaActual,
                fechaSelecc: {
                    dia: action.payload.diaSelecc,
                    mes: action.payload.mesSelecc,
                    year: action.payload.yearSelecc
                },
                mesesDetalles: state.mesesDetalles,
                diasNombre: state.diasSemanaNombre,
                yearActual: state.yearActual,
                yearSelecc: state.yearSelecc,
            });
            
            
        default:
            return state;
    }
}