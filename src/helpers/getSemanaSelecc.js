

export const getSemanaSelecc = (diaSelecc,yearActual, mesesDetalles,mesSelecc) => {

    // Posibles valores : 0,1,2,3,4,,5,6

    const numDiaSemana = new Date(yearActual,mesSelecc,diaSelecc).getDay();
    const semanaActual = [...Array(7).keys()];
    const inicio = diaSelecc - numDiaSemana;
    const {numDias} = mesesDetalles[mesSelecc]

    // Calculamos el número de días del mes anterior
    let numDiasMesAnterior = 0
    // Si el mes es diciembre
    if(mesSelecc === 0) numDiasMesAnterior = 31; 
    else {
        const { numDias } = mesesDetalles[mesSelecc - 1 ]
        numDiasMesAnterior = numDias
    }

    return semanaActual.map((index)=>{
        let dia = inicio + index
        if(dia < 1){
            return ({
                numero: numDiasMesAnterior - (numDiaSemana-index-1),
                activo: false
            })
            
        }else {
            if(dia > numDias) return ({
                numero: dia-numDias,
                activo: false
            })
            else return ({
                numero: dia,
                activo: true
            })
        } 
    })
    

}
