import React from 'react';

import { BtnCrear } from './BtnCrear';
import { ContSelects } from './ContSelects';
import { Minicalendario } from './Minicalendario';



export const SideBar = () => {

    
    return (
        <div className='sideBar'>
            
            <BtnCrear/>            
            <Minicalendario/>
            
            <form className='search' role={'search'} aria-label='Buscar personas'>
                <i className='icon-users' aria-hidden={true}></i>
                <input type={'search'} placeholder='Buscar personas'></input>
            </form>

            <ContSelects/>

        </div>
    )
}
