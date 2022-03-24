import React from 'react'

export const InputFile = () => {
    const handleChooseFile = ()=> {
        document.getElementById('inputFile').click();
    }
    return (
        <div className='file inputModal'>
            <i className='icon-text'></i>
            <input type={'file'} name='file' id='inputFile' hidden></input>
            <button 
                onClick={handleChooseFile}
                type='button' 
                className='button'
                >
                    Agregar descripción o archivo adjuntos
                </button>
        </div>
    )
}
