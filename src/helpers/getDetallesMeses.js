
export const getDetallesMeses = ()=> {
    const actualYear = 2022;
    const idioma = 'es-ES';

    const meses = [...Array(12).keys()]
    const dias = [...Array(7).keys()]
    const intl = new Intl.DateTimeFormat(idioma, {
        month: 'long'
    })

    const calendario = meses.map(mesKey => {
        const nombreMe = intl.format(new Date(actualYear,mesKey));
        const numDias = new Date(actualYear,mesKey+1,0).getDate();
        const startMes = new Date(actualYear,mesKey,1).getDay();
        return {
            nombreMe,
            numDias,
            startMes
        }
    })
    const diasSemana = new Intl.DateTimeFormat(idioma,{weekday: 'long'})

    const diasSemanaNombre = dias.map(diaskey => {
        const nombreDia = diasSemana.format(new Date(2021,10,diaskey))
        return nombreDia; 
    })
    
    return {
        calendario,
        diasSemanaNombre
    }
}