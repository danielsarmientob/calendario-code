import React from 'react'
import { DiaSeman } from './DiaSeman'

export const CabeceraSemanal = () => {
    return (
        <>  
                <div className='horaCalendario horaHeader'>
                    <span className='horaCalendario-text'>GMT-5</span>
                </div>
                {/* <span>00:00</span> */}
                <DiaSeman nomDia={'DOM'} numDia={'18'}/>
                <DiaSeman nomDia={'LUN'} numDia={'19'}/>
                <DiaSeman nomDia={'MAR'} numDia={'20'}/>
                <DiaSeman nomDia={'MIE'} numDia={'21'}/>
                <DiaSeman nomDia={'JUE'} numDia={'22'}/>
                <DiaSeman nomDia={'VIE'} numDia={'23'}/>
                <DiaSeman nomDia={'SAB'} numDia={'24'}/>
              
        </>
    )
}
