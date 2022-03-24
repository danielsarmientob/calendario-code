import React from 'react';
import { AgregarInvitados } from './AgregarInvitados';

import { InputFile } from './InputFile';

export const Modal = () => {
    return (
        <div className='modal'>
            <div className='contentModal'>
                <div className='contentForm'>
                    <form className='formModal'>
                        <input className='inputTitleTask' required type={'text'} name='title' placeholder='Design Meet'></input>
                        <div className='dateModal inputModal'>
                            <i className='icon-clock' aria-hidden={true}></i>
                            <div className='inputDates'>
                                <input required type={'date'} name='date'></input>
                                <span>-</span>
                                <input required type={'time'} name='timeStart'></input>
                                <span>-</span>
                                <input required type={'time'} name='timeEnd'></input>
                            </div>
                        </div>
                        <AgregarInvitados/>
                        <div className='agregarLlamada inputModal'>
                            <i className='icon-video'></i>
                            <button type='button' className='button is-primary'>Agregar un videoconferencia de Google Meet</button>
                        </div>
                        <div className='location inputModal'>
                            <i className='icon-gps'></i>
                            <button type='button' className='button'>Agregar lugar</button>
                        </div>

                        <InputFile/>

                    </form>   
                </div>
                <div className='modalActions'>
                    <button className='button'>Cancelar</button>
                    <button className='button is-primary'>Guardar</button>
                </div>
            </div>
        </div>
    )
}
