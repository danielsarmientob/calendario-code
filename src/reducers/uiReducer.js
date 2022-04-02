
import { types } from "../types/types";
import { getDetallesMeses } from '../helpers/getDetallesMeses';

// const currentTime = new Date();
// const { calendario: mesesDetalles, diasSemanaNombre } = getDetallesMeses(currentTime.getFullYear())

// const initialState = {
//     mesActual: currentTime.getMonth(),
//     mesSelecc: currentTime.getMonth(),
//     diaActual: currentTime.getDate(),
//     fechaSelecc: {
//         dia: currentTime.getDate(),
//         mes: currentTime.getMonth(),
//     },
//     mesesDetalles: mesesDetalles,
//     diasNombre: diasSemanaNombre,
//     yearActual: currentTime.getFullYear(),
// }
const initialState = {
    mesActual:  0,
    mesSelecc:  0,
    diaActual:  0,
    fechaSelecc:{ 
        dia: 0,
        mes:  0,
    },
    mesesDetalles: [],
    diasNombre: [],
    yearActual: 0,
    yearSelecc: 0,
    detalleList: false,
}

export const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case types.obtenerDetallesYear:
            return action.payload
        case types.cargarDetallesYear:
            const {detalleList,...dataY} = state;
            return({
                ...dataY,
                detalleList: action.payload.detalleList
            })
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
                mesActual: state.mesActual,
                mesSelecc: action.payload.mesSelecc,
                diaActual: state.diaActual,
                fechaSelecc: {
                    dia: action.payload.diaSelecc,
                    mes: action.payload.mesSelecc,
                },
                mesesDetalles: state.mesesDetalles,
                diasNombre: state.diasSemanaNombre,
                yearActual: state.yearActual,
                yearSelecc: state.yearSelecc,
                detalleList: state.detalleList
            });
            
            
        default:
            return state;
    }
}