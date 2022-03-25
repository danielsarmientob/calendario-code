import React from 'react';
import { DiaCalendario } from './DiaCalendario';

export const FilaSemana = ({hora}) => {
  
    return (
        <>
                <div className='horaCalendario'>
                    <span className='horaCalendario-text'>{ (hora !== '24:00')? hora : '' }</span>
                </div>
                <DiaCalendario titulo='Hacer ejercicios' hora={hora}/>
                <DiaCalendario titulo='Hacer ejercicios' hora={hora}/>
                <DiaCalendario titulo=''/>
                <DiaCalendario titulo=''/>
                <DiaCalendario titulo=''/>
                <DiaCalendario titulo=''/>
                <DiaCalendario titulo=''/>
        </>
    )
}
