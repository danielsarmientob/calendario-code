
export const getDetallesMeses = async (year)=> {
    
    const idioma = 'es-ES';

    const meses = [...Array(12).keys()]
    const dias = [...Array(7).keys()]
    const intl = new Intl.DateTimeFormat(idioma, {
        month: 'long'
    })

    const calendarioPromise = new Promise((resolve, reject)=>{
            const resp = meses.map(mesKey => {
                const nombreMe = intl.format(new Date(year,mesKey));
                const numDias = new Date(year,mesKey+1,0).getDate();
                const startMes = new Date(year,mesKey,1).getDay();
                return {
                    nombreMe,
                    numDias,
                    startMes
                }
            });

            resolve(resp)
    })

    const diasSemana = new Intl.DateTimeFormat(idioma,{weekday: 'long'})

    const diasSemanaNombrePromise = new Promise((resolve, reject)=>{
        const resp = dias.map(diaskey => {
            const nombreDia = diasSemana.format(new Date(2021,10,diaskey))
            return nombreDia; 
        });

        resolve(resp)
    })
 
    const [calendario, diasSemanaNombre] = await Promise.all([
        calendarioPromise,
        diasSemanaNombrePromise
    ])
    return {
        calendario,
        diasSemanaNombre
    }
}