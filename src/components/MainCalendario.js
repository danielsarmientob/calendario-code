import React from 'react';
import { useSelector } from 'react-redux';
import { CalendarioDia } from './CalendarioDia';

import { CalendarioSemana } from './CalendarioSemana'
import { CurrentTime } from './CurrentTime'


export const MainCalendario = () => {
    const { modo } = useSelector(state => state.uiHeader);
    const calendarios = {
        dia: <CalendarioDia/>,
        semana: <CalendarioSemana/>
    }
    return (
        <div className='mainCalendario'>
            {
                calendarios[modo]
            }
        </div>
    )
}
