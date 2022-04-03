

export const getSemanaSelecc = (
    diaSelecc,
    yearSelecc, 
    mesesDetalles,
    mesSelecc
    ) => {
    
    console.log('getSemanaSelecc')
    // Posibles valores : 0,1,2,3,4,,5,6
    const numDiaSemana = new Date(yearSelecc,mesSelecc,diaSelecc).getDay();
    const semanaActual = [...Array(7).keys()];
    const {numDias} = mesesDetalles[mesSelecc]
    
    // Calculamos el número de días del mes anterior
    let numDiasMesAnterior = 0
    // Si el mes es diciembre
    if(mesSelecc === 0) numDiasMesAnterior = 31; 
    else {
        const { numDias: numDias2 } = mesesDetalles[mesSelecc - 1 ]
        numDiasMesAnterior = numDias2
    }
    let inicio = diaSelecc - numDiaSemana;
    let incioMesAnterior = 0;
    if(inicio <= 0) incioMesAnterior = inicio - 1
    // console.log(inicio,numDiaSemana,diaSelecc)
    
    return semanaActual.map((nume,index)=>{
        let dia = inicio + index
        let yearPertenece = yearSelecc;
        let mesPertenece = mesSelecc;
        if(dia < 1){
            if (mesSelecc === 0){
                yearPertenece = yearPertenece - 1;
                mesPertenece = 11
            }else mesPertenece = mesPertenece - 1
            return ({
                numero: numDiasMesAnterior + (incioMesAnterior+index+1),
                activo: false,
                yearPertenece,
                mesPertenece,
            })
            
        }else {
            if(dia > numDias){
                if (mesSelecc === 11){
                    yearPertenece = yearPertenece + 1
                    mesPertenece = 0
                }else mesPertenece = mesPertenece + 1
                return ({
                    numero: dia-numDias,
                    activo: false,
                    yearPertenece,
                    mesPertenece,
                })
            } 
            else return ({
                numero: dia,
                activo: true,
                yearPertenece,
                mesPertenece
            })
        } 
    })
    

}
