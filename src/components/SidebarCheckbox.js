import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const SidebarCheckbox = ({ value, id, text, checked }) => {

    const [ischecked, setIschecked] = useState(checked);
    const handeCheckbox = ()=> setIschecked(!ischecked);
    
    return (
        <div className='sidebarCheckbox'>
            <input  
                defaultChecked={ischecked}
                onChange={handeCheckbox} 
                type='checkbox' 
                value={value} 
                id={id}>
                
            </input>
            <label htmlFor={id}></label>
            <span>{ text }</span>
        </div>
    )
}

SidebarCheckbox.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
}