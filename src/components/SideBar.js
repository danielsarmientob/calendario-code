import React from 'react';
import { ContSelects } from './ContSelects';
import { Minicalendario } from './Minicalendario';



export const SideBar = () => {

    
    return (
        <div className='sideBar'>
            
            <div className='btnCrear'>
                <button className='button btnIconText'>
                    <i className='icon-plus'></i>
                    <span>Crear</span>
                </button>  
            </div>
            
            <Minicalendario/>
            
            <form className='search' role={'search'} aria-label='Buscar personas'>
                <i className='icon-users' aria-hidden={true}></i>
                <input type={'search'} placeholder='Buscar personas'></input>
            </form>

            <ContSelects/>

        </div>
    )
}
