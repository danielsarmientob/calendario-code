import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { types } from '../types/types';

export const DiaSeman = ({nomDia, numDia, semanaDiaActual}) => {
    const {ui, uiHeader} = useSelector(state => state)
    const {mesSelecc} = ui;
    const dispatch = useDispatch();
    const handleDay = ()=> {
        const actionSeleccFecha = {
            type: types.fechaSelecc,
            payload:{
                diaSelecc: Number(numDia),
                mesSelecc: mesSelecc
            }
        }
        dispatch(actionSeleccFecha)

        const actionModo = {
            type: types.cambiarModo,
            payload: {
                modo: 'dia'
            }
        }

        dispatch(actionModo)

    }
    return (
        <h2 className={`calendarioDia ${semanaDiaActual? 'calendarioDia-isActive' : ''}`}>
            <a onClick={handleDay}>
                <time dateTime='18-03-2022'>
                    <span>{ nomDia }</span>
                    <br/>
                    <span>{ numDia }</span>
                </time>
            </a>
        </h2>
    )
}

DiaSeman.propTypes = {
    nomDia: PropTypes.string.isRequired,
    numDia: PropTypes.string.isRequired,
    semanaDiaActual: PropTypes.bool.isRequired
}
