import dayjs from "dayjs";

function mostrarFecha(){

    const dia = dayjs();

    
    let hora = dia.format(("HH:mm:ss"))
    let fechaForm = dia.format("dddd D MMMM YYYY, HH:mm:ss")
    


    return {hora, fechaForm}

}

export default mostrarFecha