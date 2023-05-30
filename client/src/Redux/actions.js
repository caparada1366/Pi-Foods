import axios from 'axios'

//Acción que trae las recetas de la api y la BD
export function getRecipes(){   
    return async (dispatch) =>{
        const data = (await axios.get('http://localhost:3001/recipes')).data
        dispatch({
            type: 'GET_RECIPES',
            payload: data
        })  
    }
}

//Acción que trae las dietas de la API y la BD
export function getDiets(){
    return async (dispatch) =>{
        const data = (await axios.get('http://localhost:3001/diets')).data
        dispatch({
            type: 'GET_DIETS',
            payload: data
        })  
    }
}


//Acción que filtra por origen de la receta si es API o BD
export function filtrarOrigen(origen){
    return {
        type: 'FILTRO_ORIGEN',
        payload: origen
    }
}

//Acción que filtra recetas por dietas seleccionadas 
export function filtrarDieta(dietas){
    return {
        type: 'FILTRO_DIETAS',
        payload: dietas
    }
}

//Accion que ordena alfabeticamente las recetas 
export function ordenarAlfa(orden){
    return {
        type: 'ORDEN_ALFA',
        payload: orden
    }
}

//Acción que ordena por Health Score las recetas
export function ordenarHealthScore(orden){
    return {
        type: 'ORDEN_HS',
        payload: orden
    }
}

//Acción que borra los filtros y deja las recetas que se tenían desde el principio 
export function quitarFiltros(){
    return {
        type: 'QUITAR_FILTROS',
    }
}

//Acción para avanzar de página 
export function nextPage(){
    return {
        type: 'NEXT_PAGE'
    }
}

//Acción para retroceder de página 
export function prevPage(){
    return {
        type: 'PREV_PAGE'
    }
}