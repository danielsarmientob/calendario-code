import React from 'react'
import { CabeceraSemanal } from './CabeceraSemanal'
import { CurrentTime } from './CurrentTime'
import { FilaSemana } from './FilaSemana'

export const MainCalendario = () => {
    return (
        <div className='mainCalendario'>
            {/* <CurrentTime/> */}
            <div className='calendarioSemana'>
                <CabeceraSemanal/>
                <FilaSemana hora={'01:00'}/>
                <FilaSemana hora={'02:00'}/>
                <FilaSemana hora={'03:00'}/>
                <FilaSemana hora={'04:00'}/>
                <FilaSemana hora={'05:00'}/>
                <FilaSemana hora={'06:00'}/>
                <FilaSemana hora={'07:00'}/>
                <FilaSemana hora={'08:00'}/>
                <FilaSemana hora={'09:00'}/>
                <FilaSemana hora={'10:00'}/>
                <FilaSemana hora={'11:00'}/>
                <FilaSemana hora={'12:00'}/>
                <FilaSemana hora={'13:00'}/>
                <FilaSemana hora={'14:00'}/>
                <FilaSemana hora={'15:00'}/>
                <FilaSemana hora={'16:00'}/>
                <FilaSemana hora={'17:00'}/>
                <FilaSemana hora={'18:00'}/>
                <FilaSemana hora={'19:00'}/>
                <FilaSemana hora={'20:00'}/>
                <FilaSemana hora={'21:00'}/>
                <FilaSemana hora={'22:00'}/>
                <FilaSemana hora={'23:00'}/>
                <FilaSemana hora={'24:00'}/>
                
            </div>
        </div>
    )
}
