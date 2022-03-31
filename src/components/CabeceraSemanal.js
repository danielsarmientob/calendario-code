import React, {useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getSemanaSelecc } from '../helpers/getSemanaSelecc';

import { DiaSeman } from './DiaSeman';

export const CabeceraSemanal = () => {
    const { 
        diaSelecc, 
        yearActual, 
        mesesDetalles,
        mesSelecc,
        diasNombre } = useSelector(state => state.ui);

    // const semanaActual = getSemanaSelecc(1, yearActual, mesesDetalles,0)
    const semanaActual=useMemo(() => getSemanaSelecc(diaSelecc, yearActual, mesesDetalles, mesSelecc), [diaSelecc]);
    
    console.log('Hola'.slice(0,2).toUpperCase().replace( /[^-A-Za-z0-9]+/g, '-' ))
    
    return (
        <>  
                <div className='horaCalendario horaHeader'>
                    <span className='horaCalendario-text'>GMT-5</span>
                </div>
                {/* <span>00:00</span> */}
                {
                    diasNombre.map((nombreDia,index)=>{
                        const nomDiaSinTilde = nombreDia.slice(0,3).toUpperCase().normalize('NFD').replace( /[^-A-Za-z0-9]+/g, '' );
                        return (<DiaSeman 
                                    key={index} 
                                    nomDia={ nomDiaSinTilde } 
                                    numDia={semanaActual[index].numero.toString()} 
                                    semanaDiaActual={
                                        (semanaActual[index].numero === diaSelecc)
                                        ? true 
                                        : false}
                                    />
                                )                    
                    })
                }
              
        </>
    )
}
