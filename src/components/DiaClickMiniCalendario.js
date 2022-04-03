import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { fechaSeleccSinCambiarYear } from '../actions/uiActions';

export const DiaClickMiniCalendario = ({
    clase, 
    numDia, 
    mes,
    year
}) => {
    const dispatch = useDispatch();
    const {fechaSelecc} = useSelector(state => state.ui);
    const handleChangeDay = ()=> {
        dispatch(fechaSeleccSinCambiarYear(numDia, mes, year));
    }
    return (
            <div  
                onClick={handleChangeDay} 
                className={
                    ((fechaSelecc.dia === numDia) && (fechaSelecc.mes === mes) && (fechaSelecc.year === year))
                    ? clase+' diaSelect' 
                    : clase
                } 
                tabIndex={'0'}
                >
                    {numDia}
            </div>       
    )
}

DiaClickMiniCalendario.propTypes = {
    clase:  PropTypes.string.isRequired,
    numDia: PropTypes.number.isRequired,
    mes:    PropTypes.number.isRequired,
    year:   PropTypes.number.isRequired
}