import React from 'react'

export const DiaCalendario = ({ titulo='', hora='' }) => {
    let horaInicio='';
    let horaFinal='';
    if (hora !== '') {
        const dateHora = hora?.split(':');
        const dateHoraNum = parseInt(dateHora[0])
        if(dateHoraNum < 10) {
            horaInicio = '0'+(dateHoraNum-1)+':00';
            horaFinal =  '0'+(dateHoraNum)+':00';
        }
        else {
            horaInicio = (dateHoraNum-1)+':00';
            horaFinal =  (dateHoraNum)+':00';
        }
    }

    const handleOpenModal = (e)=> {
        const $modal = document.querySelector('.modal');
        $modal.style.visibility = 'visible';
    }

    return (
        <div tabIndex={'0'} className='taskCell' onClick={handleOpenModal}>
            {
                (titulo !== '')
                ?   <div className='task'>
                        <p>{ titulo }</p>
                        <p>
                            <time time="17:00">{ horaInicio }</time> - <time time="18:00">{ horaFinal }</time>
                        </p>
                    </div>
                :   <div></div>
            }
        </div>
    )
}
