import React, { useEffect, useState } from 'react'

export const CurrentTime = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        const currentDate = new Date();
        const currentDay = currentDate.getDay()
        const currentHour = currentDate.getHours()
        const currentMin = currentDate.getMinutes()
        const $currentTime = document.querySelector('.currentTime')
        const $calendar = document.querySelector('.calendarioSemana')
        let calendarBlockSize = $calendar.clientHeight
        let calendarInlineSize = $calendar.clientWidth

        const calendarTimezoneCellInlineSize = document.querySelector('.horaCalendario').clientWidth;
        // const calendarTimezoneCellInlineSize = document.querySelector('.taskCell').clientWidth;
        calendarInlineSize = calendarInlineSize - calendarTimezoneCellInlineSize

        const cellInlineSize = calendarInlineSize / 7

        const calendarDayBlockSize = document.querySelector('.taskCell').clientHeight
        calendarBlockSize = calendarBlockSize - calendarDayBlockSize
        const cellBlockSize = calendarBlockSize / 24

        $currentTime.style.top = `${cellBlockSize * (currentHour) + calendarDayBlockSize + (cellBlockSize / 60) * currentMin}px`
        $currentTime.style.left = `${cellInlineSize * (currentDay) + calendarTimezoneCellInlineSize + 24}px`
    }, [width])
    
    return (
        <div className='currentTime'> 

        </div>
    )
}
