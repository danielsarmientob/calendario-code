import React from 'react'
import { DiaSeman } from './DiaSeman'

export const CabeceraSemanal = () => {
    return (
        <>  
                <div className='horaCalendario horaHeader'>
                    <span className='horaCalendario-text'>GMT-5</span>
                </div>
                {/* <span>00:00</span> */}
                <DiaSeman nomDia={'DOM'} numDia={'18'} semanaDiaActual={false}/>
                <DiaSeman nomDia={'LUN'} numDia={'19'} semanaDiaActual={false}/>
                <DiaSeman nomDia={'MAR'} numDia={'20'} semanaDiaActual={false}/>
                <DiaSeman nomDia={'MIE'} numDia={'21'} semanaDiaActual={false}/>
                <DiaSeman nomDia={'JUE'} numDia={'22'} semanaDiaActual={true}/>
                <DiaSeman nomDia={'VIE'} numDia={'23'} semanaDiaActual={false}/>
                <DiaSeman nomDia={'SAB'} numDia={'24'} semanaDiaActual={false}/>
              
        </>
    )
}
