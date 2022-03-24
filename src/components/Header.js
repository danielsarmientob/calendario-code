import React from 'react';

import avatar from '../img/avatar.png';
import logo from '../img/logo.png';

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
                    <button className='button is-secundary'>Hoy</button>
                    <span className='navegacion-calendario'>
                        <a href='#' className='button btnIcon' aria-label='Semana anterior'>
                            <i className='icon-chevronLeft' aria-hidden={true}></i>
                        </a>
                        <a href='#' className='button btnIcon' aria-label='Siguiente semana'>
                            <i className='icon-chevronRight' aria-hidden={true}></i>
                        </a>
                    </span>
                    <time className='calendarioEsdato-fecha' dateTime='25-06-2021'>25 de Junio</time>
                </div>
            </div>
            
            <div className='header-secundary'>
                <select className='select' name='' id=''>
                    <option value={'semana'}>Semana</option>
                    <option value={'dia'}>Día</option>
                </select>            
                <div className='cover-header'>
                    <img src={avatar} title='Imagen de usuario' aria-label='Imagen de usuario'></img>
                </div>    
            </div>
        </div>
    )
}