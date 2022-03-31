import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { types } from '../types/types';
import { DiasMesCalendario } from './DiasMesCalendario';

export const Minicalendario = () => {
    const dispatch = useDispatch();
    const stateUi = useSelector(state => state.ui);
    const { 
        mesSelecc, 
        mesesDetalles,
        yearActual 
    } = stateUi;



    const capitalizarPrimeraLetra=(str)=> str.charAt(0).toUpperCase() + str.slice(1);
    

    
    const { nombreMe } = mesesDetalles[mesSelecc]
    const nombreMesCapitalizado = capitalizarPrimeraLetra(nombreMe)

   
    const handleNextMonth = ()=> {
        const action = {
            type: types.mesSelecc,
            payload:{
                mesSelecc: mesSelecc + 1,
            }
        }
        dispatch(action)
    }
    const handlePrevMonth = ()=> {
        const action = {
            type: types.mesSelecc,
            payload:{
                mesSelecc: mesSelecc - 1,
            }
        }
        dispatch(action)
    }
    return (
        <div>
            <div className='miniCalendario-estado'>
                <div className='miniCalendario-fecha'>
                    <span>{ nombreMesCapitalizado } {yearActual}</span>
                </div>
                <div className='miniCalendario-navegacion'>
                    <button 
                        className={`button `+((mesSelecc === 0)? 'btnDisable' : '')} 
                        onClick={handlePrevMonth} 
                        disabled={(mesSelecc === 0)? true : false} 
                        aria-label='Mes anterior'>
                        
                        <i className='icon-chevronLeft'></i>
                    </button>
                    <button 
                        className={`button `+((mesSelecc === 11)? 'btnDisable' : '')} 
                        onClick={handleNextMonth} 
                        disabled={(mesSelecc === 11)? true : false}
                        aria-label='Siguiente mes'>
                        <i className='icon-chevronRight' aria-hidden={true}></i>
                    </button>
                </div>
            </div>
            
            <div className='miniCalendario' aria-label='Calendario de navegación'>
                {/* <div className='miniCalendario'></div>
                <div className='miniCalendario'></div> */}
                <span>D</span>
                <span>L</span>
                <span>M</span>
                <span>M</span>
                <span>J</span>
                <span>V</span>
                <span>S</span>
                
                <DiasMesCalendario/>
            </div>
        </div>
    )
}
