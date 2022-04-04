import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fechaSeleccSinCambiarYear, uiDetallesNuevoYearMini, uiMesSeleccAction } from '../actions/uiActions';

export const HeaderNavigationCalendario = () => {
    const dispatch = useDispatch();
    const { fechaSelecc } = useSelector(state => state.ui);
    const {dia, mes, year} = fechaSelecc;

    const obtenerFecha = (dia)=> {
        const current = new Date(year,mes, dia);
        const diaObtenido_num = current.getDate();
        const mesObtenido_num = current.getMonth();
        const yearObtenido_num = current.getFullYear();
        const nuevaFechaSeleccionada = {
            dia: diaObtenido_num,
            mes: mesObtenido_num,
            year: yearObtenido_num
        }
        return({
            diaObtenido_num,
            mesObtenido_num,
            yearObtenido_num,
            nuevaFechaSeleccionada
        })
    }
    const handlePrevDay = ()=> {
        let diaSelecc_num  = dia - 1;
        const { 
            diaObtenido_num, 
            mesObtenido_num, 
            yearObtenido_num,
            nuevaFechaSeleccionada 
        } = obtenerFecha(diaSelecc_num);

       
        console.log(diaObtenido_num,mesObtenido_num, yearObtenido_num);

        // El día previo pertenece al mes pasado, se tiene que actualizar el mes seleccionado(mesSelecc)
        if(diaSelecc_num === 0) {
            // El día previo está en diciembre del año pasado, se tiene que actualizar el año seleccionado(yearSelecc)
            if ( mes === 0 ) {
                dispatch(uiDetallesNuevoYearMini(yearObtenido_num, mesObtenido_num, nuevaFechaSeleccionada));
            }else {
                dispatch(uiMesSeleccAction(mesObtenido_num));
                dispatch(fechaSeleccSinCambiarYear(diaObtenido_num,mesObtenido_num,yearObtenido_num));
            }
        }else {
            dispatch(fechaSeleccSinCambiarYear(diaObtenido_num,mesObtenido_num,yearObtenido_num));
        }
    }
    const handleNextDay = ()=> {
        const numeroDias = new Date(year,mes + 1,0).getDate();
        let diaSelecc_num = dia + 1;

        const { 
            diaObtenido_num, 
            mesObtenido_num, 
            yearObtenido_num,
            nuevaFechaSeleccionada 
        } = obtenerFecha(diaSelecc_num);

        // El día siguiente pertenece al siguiente mes, se tiene que actualizar el mes seleccionado(mesSelecc)
        if(diaSelecc_num > numeroDias){
            // El día siguiente está en enero del año siguiente, se tiene que actualizar el año seleccionado(yearSelecc)
            if(mes === 11) {
                dispatch(uiDetallesNuevoYearMini(yearObtenido_num, mesObtenido_num, nuevaFechaSeleccionada));
            }else {
                dispatch(uiMesSeleccAction(mesObtenido_num));
                dispatch(fechaSeleccSinCambiarYear(diaObtenido_num,mesObtenido_num,yearObtenido_num));
            }
        }else {
            dispatch(fechaSeleccSinCambiarYear(diaObtenido_num,mesObtenido_num,yearObtenido_num));
        }
    }
    return (
        <span className='navegacion-calendario'>
            <a  onClick={handlePrevDay} className='button btnIcon' aria-label='Día anterior'>
                <i className='icon-chevronLeft' aria-hidden={true}></i>
            </a>
            <a  onClick={handleNextDay} className='button btnIcon' aria-label='Día siguente'>
                <i className='icon-chevronRight' aria-hidden={true}></i>
            </a>
        </span>
    )
}
