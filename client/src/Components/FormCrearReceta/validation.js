export default function validation(data){
    let errors={};
    const regexNum = /^-?\d+$/;
    const regexUrl = /\.(jpg|jpeg|png|gif|bmp)$/i;

    if(!data.name){
        errors.name = "Este campo no puede estar vacio"
    }
    if(!data.image){
        errors.image = "Este campo no puede estar vacio "
    }else if (!regexUrl.test(data.image)){
        errors.image = "Debe ingresar una ruta de imagen"
    }
    if(!data.summary){
        errors.summary = "Este campo no puede estar vacio"
    }
    if(!data.health_Score){
        errors.health_Score = "Este campo no puede estar vacío"
    }
    if(!regexNum.test(data.health_Score) && data.health_Score < 0 || data.health_Score >100){
        errors.health_Score = "Debe ser un número entre 0 y 100"
    }
    return errors;
}