import React from 'react'
import { Inivitado } from './Inivitado'

import user3 from '../img/user3.png';
import user2 from '../img/user2.png';
import user1 from '../img/user1.png';
export const AgregarInvitados = () => {
    return (
        <div className='contAgregarInvitados'>
            <div className='agregarInvitados inputModal'>
                <i className='icon-users' arial-hidden={true}></i>
                <div className='inputAdd'>
                    <input type={'text'} placeholder='Agregar invitados'/>
                </div>
            </div>
            <div className='contInvitados'>
                <Inivitado
                    urlImg={user3}
                    nombre={'Maria Dolores'}
                    isOrganizador={true}
                />
                <Inivitado
                    urlImg={user2}
                    nombre={'Ana zepeda'}
                    isOrganizador={false}
                />
                <Inivitado
                    urlImg={user1}
                    nombre={'Tadeo Lopez'}
                    isOrganizador={false}
                />
                <Inivitado
                    urlImg={user1}
                    nombre={'Tadeo Lopez'}
                    isOrganizador={false}
                />
                <Inivitado
                    urlImg={user1}
                    nombre={'Tadeo Lopez'}
                    isOrganizador={false}
                />
            </div>
        </div>
    )
}
