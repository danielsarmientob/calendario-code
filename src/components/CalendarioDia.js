import React from 'react';
import { useSelector } from 'react-redux';
import{ DiaSeman } from './DiaSeman';


export const CalendarioDia = () => {

    const { fechaSelecc, yearActual, diasNombre } = useSelector(state => state.ui)
    const obNomDia = diasNombre[new Date(yearActual,fechaSelecc.mes,fechaSelecc.dia).getDay()]

    // Escoger las tres primeras letras, convertirlas en mayúsculas y quitar tildes
    const nomDia = obNomDia.slice(0,3).toUpperCase().normalize('NFD').replace( /[^-A-Za-z0-9]+/g, '' );
    return (
        <div className='contCalendarioDia'>
            <div></div>
            <DiaSeman nomDia={nomDia.toString()} numDia={fechaSelecc.dia.toString()} semanaDiaActual={true}/>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>01:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
                <div className='task'>
                    <p>Hacer ejercicios</p>
                    <p>
                        <time time="17:00">1:00</time> - <time time="18:00">2:00</time>
                    </p>
                </div>
            </div>
            

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>02:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>03:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>04:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>05:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>06:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>07:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>08:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>09:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>10:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>11:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>12:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>13:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>14:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>15:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>16:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>17:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>18:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>19:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>20:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>21:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>22:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'>23:00</span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>

            <div className='horaCalendario'>
                <span className='horaCalendario-text'></span>
            </div>
            <div tabIndex={'0'} className='taskCell' >
            </div>
            

           


            {/* <FilaSemana hora={'01:00'}/>
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
            <FilaSemana hora={'24:00'}/> */}
        </div>
    )
}
