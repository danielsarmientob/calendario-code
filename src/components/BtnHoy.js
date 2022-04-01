import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../types/types';

export const BtnHoy = () => {
    const {diaActual, mesActual} = useSelector(state => state.ui)
    const dispatch = useDispatch();
    const handleToDay = ()=> {
        const action = {
            type: types.fechaActual,
            payload:{
                diaSelecc: diaActual,
                mesSelecc: mesActual
            }
        }
        dispatch(action)
    }
    return (
        <button onClick={handleToDay} className='button is-secundary'>Hoy</button>
    )
}
