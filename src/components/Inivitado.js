import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const Inivitado = ({ urlImg, nombre, isOrganizador }) => {
    
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = ()=> setIsOpen(!isOpen);
    return (
        <div className={`invitado ${isOpen? '' : 'invitadoHidden'}`}>
            <div className='coverInvitado'>
                <img src={urlImg} alt='Imagen usuario' title='Imagen usuario'></img>
            </div>
            <div className='invitadoDatos' aria-label='Datos de invitados'>
                <span>{ nombre }</span>
                <span>{isOrganizador? 'Organizador' : 'Invitado'}</span>
            </div>
            {
                isOrganizador
                ? ''
                : <i onClick={handleClose} className='icon-close' aria-label='Eliminar inivitados'></i>
             
            }
        </div>
    )
}


Inivitado.propTypes = {
    urlImg: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    isOrganizador: PropTypes.bool.isRequired
}