import { getDetallesMeses } from "../helpers/getDetallesMeses";
import { types } from "../types/types";

export const uiObtnerDetallesYear= (year)=> {
    return (async(dispatch)=>{
        const currentTime = new Date();
        const { calendario: mesesDetalles, diasSemanaNombre } = await getDetallesMeses(year)
        console.log(mesesDetalles, diasSemanaNombre)
        const detallesYear = {
            mesActual: currentTime.getMonth(),
            mesSelecc: currentTime.getMonth(),
            diaActual: currentTime.getDate(),
            fechaSelecc: {
                dia: currentTime.getDate(),
                mes: currentTime.getMonth(),
                year: currentTime.getFullYear(),
            },
            mesesDetalles: mesesDetalles,
            diasNombre: diasSemanaNombre,
            yearActual: currentTime.getFullYear(),
            yearSelecc: currentTime.getFullYear(),
        }
        const action={
            type: types.obtenerDetallesYear,
            payload: detallesYear
        }
        dispatch(action)
    })
}

export const uiDetallesNuevoYearMini=(year, mes, fechaSelecc)=>{
    return (async(dispatch)=>{
        const currentTime = new Date();
        const { calendario: mesesDetalles, diasSemanaNombre } = await getDetallesMeses(year)
        console.log(mesesDetalles, diasSemanaNombre)
        const detallesYear = {
            mesActual: currentTime.getMonth(),
            mesSelecc: mes,
            diaActual: currentTime.getDate(),
            fechaSelecc: fechaSelecc,
            mesesDetalles: mesesDetalles,
            diasNombre: diasSemanaNombre,
            yearActual: currentTime.getFullYear(),
            yearSelecc: year,
        }
        const action={
            type: types.obtenerDetallesYear,
            payload: detallesYear
        }
        dispatch(action)
    }) 
}
export const uiMesSeleccAction = (mesSelecc)=>{
    return ({
        type: types.mesSelecc,
        payload:{
            mesSelecc: mesSelecc,
        }
    })

}

export const fechaSeleccSinCambiarYear = (diaSelecc, mesSelecc, yearSelecc)=> {
    return ({
        type: types.fechaSelecc,
        payload:{
            diaSelecc,
            mesSelecc,
            yearSelecc
        }
    })
    
}
