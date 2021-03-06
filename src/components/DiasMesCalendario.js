import React from 'react'
import { useSelector } from 'react-redux';
import { DiaClickMiniCalendario } from './DiaClickMiniCalendario';

export const DiasMesCalendario = () => {
    let numDia = 0;
    let diaProxMes = 0;
    let numDiasMesAnterior = 0;
    const { 
        mesActual,
        mesSelecc, 
        diaActual,
        yearActual,
        yearSelecc, 
        mesesDetalles 
    } = useSelector(state => state.ui);
   
    // Si el mes anterior es diciembre del año pasado
    if(mesSelecc === 0) numDiasMesAnterior  = 31; 
    else {
        // Números de días del mes anterior
        const { numDias } = mesesDetalles[mesSelecc-1]
        numDiasMesAnterior = numDias;
    }
    
    const { numDias,startMes} = mesesDetalles[mesSelecc];

    return (
        <>
            {
                    
                [...Array(42).keys()].map((index)=>{
                    
                    if(index < startMes  ){
                        return <div key={index} className='is-inactive'>{numDiasMesAnterior - (startMes-1 ) + index}</div>
                    }
                    if((index >= startMes) && (numDia < numDias)) {
                        numDia += 1;
                        let clase = 'miniCalendario-dia'
                        
                        if ((mesActual === mesSelecc) && (diaActual === numDia) && (yearActual === yearSelecc)) clase = 'miniCalendario-dia is-today';

                        return <DiaClickMiniCalendario 
                                key={index} 
                                clase={clase} 
                                numDia={ numDia} 
                                mes={ mesSelecc }
                                year={yearSelecc}
                        />
                    }
                    if( numDia >= numDias){
                        diaProxMes += 1
                        return <div key={index} className='is-inactive'>{diaProxMes}</div>
                    }
                
                })
            }
        </>
    )
}
