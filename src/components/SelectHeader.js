import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarModo } from '../actions/uiHeaderActions';
import { types } from '../types/types';

export const SelectHeader = () => {
    const { modo } = useSelector(state => state.uiHeader);
    const dispatch = useDispatch();
    const handleChangeModo = (e)=>{
        dispatch(cambiarModo(e.target.value))
    }
    return (
        <select value={ modo } onChange={ handleChangeModo } className='select' name='selectModoCalendario' >
            <option value={'semana'}>Semana</option>
            <option value={'dia'}>Día</option>
        </select> 
    )
}
