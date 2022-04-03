import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { cambiarModo } from '../actions/uiHeaderActions'
import { fechaSeleccSinCambiarYear, uiDetallesNuevoYearMini } from '../actions/uiActions';

export const DiaSeman = ({
    nomDia, 
    numDia, 
    semanaDiaActual,
    yearPertenece,
    mes
}) => {
    const {yearActual} = useSelector(state => state.ui)
    const dispatch = useDispatch();
    const handleDay = ()=> {
       
        if(yearActual === yearPertenece){
            // console.log(mes)
            dispatch(fechaSeleccSinCambiarYear(Number(numDia),mes))
        }else{
            if(yearActual < yearPertenece) dispatch(uiDetallesNuevoYearMini(yearPertenece,0,{dia:Number(numDia), mes: 0}))
            else dispatch(uiDetallesNuevoYearMini(yearPertenece,11,{dia:Number(numDia), mes: 11}))
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
