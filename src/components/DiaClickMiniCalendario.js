import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../types/types';

export const DiaClickMiniCalendario = ({clase, numDia, mes}) => {
    const dispatch = useDispatch();
    const {fechaSelecc} = useSelector(state => state.ui);
    const handleChangeDay = ()=> {
        const action = {
            type: types.fechaSelecc,
            payload: {
                diaSelecc: numDia,
                mesSelecc: fechaSelecc.mes
            }
        }
        dispatch(action);
        
    }
    return (
            <div  
                onClick={handleChangeDay} 
                className={((fechaSelecc.dia === numDia) && (fechaSelecc.mes === mes))? clase+' diaSelect' : clase} 
                tabIndex={'0'}
                >
                    {numDia}
            </div>       
    )
}
