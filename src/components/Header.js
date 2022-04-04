import React from 'react';

import avatar from '../img/avatar.png';
import logo from '../img/logo.png';
import { BtnHoy } from './BtnHoy';
import { ContFechaHeader } from './ContFechaHeader';
import { HeaderNavigationCalendario } from './HeaderNavigationCalendario';
import { SelectHeader } from './SelectHeader';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header-primary'>
                <div className='header-menu'>
                    <button className='button btnMenu'>
                        <i className='icon-hamburguerButton'></i>
                    </button>
                    <div className='cover-header'>
                        <img src={logo} title='Logo calendar' aria-label='Logo calendar' ></img>
                    </div>
                </div>
                
                <div className='estado-calendario'>
                    <BtnHoy/>
                    <HeaderNavigationCalendario/>
                   <ContFechaHeader/>
                </div>
            </div>
            
            <div className='header-secundary'>
                <SelectHeader/>           
                <div className='cover-header'>
                    <img src={avatar} title='Imagen de usuario' aria-label='Imagen de usuario'></img>
                </div>    
            </div>
        </div>
    )
}
