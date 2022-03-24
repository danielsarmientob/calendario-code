import React from 'react';
import PropTypes from 'prop-types';

export const DiaSeman = ({nomDia, numDia}) => {
    const handleDay = ()=> {
        console.log('Ir a el dia seleccionado')
    }
    return (
        <h2 className='calendarioDia'>
            <a href='#' onClick={handleDay}>
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
    numDia: PropTypes.string.isRequired
}
