import dayjs from "dayjs";

function mostrarFecha(){

    const dia = dayjs();

  
    let hora = dia.format(("HH:mm:ss"))

    


    console.log(`Fecha: ${hora}`);


}

export default mostrarFecha