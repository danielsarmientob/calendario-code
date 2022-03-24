import React from 'react'

export const FilaSemana = ({hora}) => {
  
    return (
        <>
                <div className='horaCalendario'>
                    <span className='horaCalendario-text'>{ (hora !== '24:00')? hora : '' }</span>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                    <div className='task'>
                        <p>Hacer ejecicios</p>
                        <p>
                            <time time="17:00">5</time> - <time time="18:00">6 pm</time>
                        </p>
                    </div>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                    <div className='task'>
                        <p>Hacer ejecicios</p>
                        <p>
                            <time time="17:00">5</time> - <time time="18:00">6 pm</time>
                        </p>
                    </div>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                    <div className='task'>
                        <p>Hacer ejecicios</p>
                        <p>
                            <time time="17:00">5</time> - <time time="18:00">6 pm</time>
                        </p>
                    </div>
                </div>
                <div tabIndex={'0'} className='taskCell is-active'>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                </div>
                <div tabIndex={'0'} className='taskCell'>
                </div>
        </>
    )
}
