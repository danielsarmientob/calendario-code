import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiObtnerDetallesYear } from '../actions/uiActions';
import { types } from '../types/types';

export const BtnHoy = () => {
    const {diaActual, mesActual} = useSelector(state => state.ui)
    const dispatch = useDispatch();
    const handleToDay = ()=> {
        const currentTime = new Date();
        dispatch( uiObtnerDetallesYear(currentTime.getFullYear()));
    }
    return (
        <button onClick={handleToDay} className='button is-secundary'>Hoy</button>
    )
}
