import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uiDetallesNuevoYearMini, uiMesSeleccAction} from '../actions/uiActions';
import { CabeceraMiniCalendario } from './CabeceraMiniCalendario';
import { DiasMesCalendario } from './DiasMesCalendario';

export const Minicalendario = () => {
    const dispatch = useDispatch();
    const { 
        mesSelecc, 
        mesesDetalles,
        yearSelecc,
        fechaSelecc
    } = useSelector(state => state.ui);;



    const capitalizarPrimeraLetra=(str)=> str.charAt(0).toUpperCase() + str.slice(1);
    

    
    const { nombreMe } = mesesDetalles[mesSelecc]
    const nombreMesCapitalizado = capitalizarPrimeraLetra(nombreMe)

   
    const handleNextMonth = ()=> {
        if(mesSelecc === 11){
            dispatch(uiDetallesNuevoYearMini(yearSelecc + 1, 0,fechaSelecc));
        } 
        else dispatch(uiMesSeleccAction(mesSelecc + 1));
    }
    const handlePrevMonth = ()=> {

        if(mesSelecc === 0){
            dispatch( uiDetallesNuevoYearMini(yearSelecc - 1, 11,fechaSelecc));
        }
        else dispatch(uiMesSeleccAction(mesSelecc - 1));
        
    }
    return (
        <div>
            <div className='miniCalendario-estado'>
                <div className='miniCalendario-fecha'>
                    <span>{ nombreMesCapitalizado } {yearSelecc}</span>
                </div>
                <div className='miniCalendario-navegacion'>
                    <button 
                        className={'button'} 
                        onClick={handlePrevMonth} 
                        aria-label='Mes anterior'>
                        
                        <i className='icon-chevronLeft'></i>
                    </button>
                    <button 
                        className={'button'} 
                        onClick={handleNextMonth} 
                        aria-label='Siguiente mes'>
                        <i className='icon-chevronRight' aria-hidden={true}></i>
                    </button>
                   
                </div>
            </div>
            
            <div className='miniCalendario' aria-label='Calendario de navegación'>
                <CabeceraMiniCalendario/>
                <DiasMesCalendario/>
            </div>
        </div>
    )
}
