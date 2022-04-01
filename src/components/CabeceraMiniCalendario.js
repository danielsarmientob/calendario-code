import React from 'react';
import { useSelector } from 'react-redux';

export const CabeceraMiniCalendario = () => {
    
    const { diasNombre } = useSelector(state => state.ui);
    return (
        <>
           {
                diasNombre.map((nombre, index)=> {
                    const title = nombre.charAt(0).toUpperCase();
                    return  <span key={index}>{title}</span>
                })
           }
        </>
           
    )
}
