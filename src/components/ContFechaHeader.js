import React from 'react';
import { useSelector } from 'react-redux';

export const ContFechaHeader = () => {
    const { fechaSelecc, mesesDetalles } = useSelector(state => state.ui)
    const { dia, mes } = fechaSelecc;
    const { nombreMe } = mesesDetalles[mes];
    return (
        <>
             <time className='calendarioEsdato-fecha' dateTime=''>{ dia } de { nombreMe }</time>
        </>
    )
}
