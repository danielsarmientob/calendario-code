import React, {useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getSemanaSelecc } from '../helpers/getSemanaSelecc';

import { DiaSeman } from './DiaSeman';

export const CabeceraSemanal = () => {
    const { 
        fechaSelecc, 
        yearActual, 
        mesesDetalles,
        mesSelecc,
        diasNombre } = useSelector(state => state.ui);

    // const semanaActual = getSemanaSelecc(1, yearActual, mesesDetalles,0)
    const semanaActual=useMemo(() => getSemanaSelecc(fechaSelecc.dia, yearActual, mesesDetalles, mesSelecc), [fechaSelecc]);
    
   
    
    return (
        <>  
                <div className='horaCalendario horaHeader'>
                    <span className='horaCalendario-text'>GMT-5</span>
                </div>
                {/* <span>00:00</span> */}
                {
                    diasNombre.map((nombreDia,index)=>{
                        // Escoger las tres primeras letras, convertirlas en mayúsculas y quitar tildes
                        const nomDiaSinTilde = nombreDia.slice(0,3).toUpperCase().normalize('NFD').replace( /[^-A-Za-z0-9]+/g, '' );
                        return (<DiaSeman 
                                    key={index} 
                                    nomDia={ nomDiaSinTilde } 
                                    numDia={semanaActual[index].numero.toString()} 
                                    semanaDiaActual={
                                        (semanaActual[index].numero === fechaSelecc.dia)
                                        ? true 
                                        : false}
                                    />
                                )                    
                    })
                }
              
        </>
    )
}
