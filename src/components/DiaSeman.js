import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { cambiarModo } from '../actions/uiHeaderActions'
import { fechaSeleccSinCambiarYear, uiDetallesNuevoYearMini, uiMesSeleccAction } from '../actions/uiActions';

export const DiaSeman = ({
    nomDia, 
    numDia, 
    semanaDiaActual,
    yearPertenece,
    mes
}) => {
    const {yearActual, yearSelecc} = useSelector(state => state.ui)
    const dispatch = useDispatch();
    const handleDay = ()=> {
       
        if(yearSelecc=== yearPertenece){
            
            dispatch(fechaSeleccSinCambiarYear(Number(numDia),mes))
            dispatch(uiMesSeleccAction(mes))
        }else{
            if(yearSelecc < yearPertenece){
                dispatch(uiDetallesNuevoYearMini(yearPertenece,0,{dia:Number(numDia), mes: 0}));
                dispatch(uiMesSeleccAction(0))
            }
            else{
                dispatch(uiDetallesNuevoYearMini(yearPertenece,11,{dia:Number(numDia), mes: 11}));
                dispatch(uiMesSeleccAction(11))
            } 
        }
        dispatch(cambiarModo('dia'))
        
        
    }
    return (
        <h2 className={`calendarioDia ${semanaDiaActual? 'calendarioDia-isActive' : ''}`}>
            <a onClick={handleDay}>
                <time dateTime=''>
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
    semanaDiaActual: PropTypes.bool.isRequired,
    yearPertenece: PropTypes.number.isRequired,
    mes: PropTypes.number.isRequired
}
