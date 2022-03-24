import React, { useState } from 'react'

import { SidebarCheckbox } from './SidebarCheckbox';

export const ContSelects = () => {

    const [isVisble, setIsVisble] = useState(true)
    const handleDisplay = ()=> setIsVisble(!isVisble)
    return (
        <div className='contentSelects'>
                <div className='cabeceraSelects'>
                    <span>Mis calendarios</span>
                    <input type='checkbox'  hidden={true} name='display' id='flecha'></input>
                    <label htmlFor='flecha' onClick={handleDisplay}>
                        <i className='icon-chevronUp'></i>
                    </label>
                </div>
                <div className={`checkboxs ${isVisble? '' : 'checkboxsHidden'}`}>
                    <SidebarCheckbox 
                        value='leonidas-esteban'
                        id='cbLeo'
                        text='Leonidas esteban'
                        checked={true}
                    />
                    <SidebarCheckbox 
                        value='cumple'
                        id='cumple'
                        text='Cumpleaños'
                        checked={true}
                    />
                    <SidebarCheckbox 
                        value='tareas'
                        id='tarea'
                        text='Tareas'
                        checked={true}
                    />
                    <SidebarCheckbox 
                        value='recordatorio'
                        id='recorda'
                        text='Recordatorios'
                        checked={false}
                    />
                </div>
                
            </div>
    )
}
