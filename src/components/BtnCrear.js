import React from 'react'

export const BtnCrear = () => {
    const handleCreate = ()=> {
        const $modal = document.querySelector('.modal');
        $modal.style.visibility = 'visible';
    }
    return (
        <div className='btnCrear'>
            <button onClick={handleCreate} className='button btnIconText'>
                <i className='icon-plus'></i>
                <span>Crear</span>
            </button>  
        </div>
    )
}
