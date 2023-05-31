

const initialState ={
    recipes: [],
    recipesAux: [],
    diets: [],
    pagActual: 1

}

export default function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case 'GET_RECIPES':
            return{
                ...state,
                recipes: payload,
                recipesAux: payload
            }
        case 'GET_DIETS':
            return{
                ...state,
                diets: payload
            }
        case 'FILTRO_ORIGEN':
            var arrayFiltroOrigen=[];
            if(payload === 'DB'){
                arrayFiltroOrigen = state.recipes.filter((r)=>{
                     return isNaN(r.id)
                })
            }    
            if(payload === 'API'){
                arrayFiltroOrigen = state.recipes.filter((r)=>{
                    return !(isNaN(r.id))
                })
            }
            if(payload === 'Todos'){
                arrayFiltroOrigen = state.recipesAux;
            }    
            
            return{
                ...state,
                recipes: arrayFiltroOrigen
            }
        case 'FILTRO_DIETAS':
            var arrayDietas = payload;
            var filtroDietas = [];
            arrayDietas.forEach((dieta)=>{
                state.recipes.forEach((receta)=>{
                    if(receta.diets?.includes(dieta) && !filtroDietas.includes(receta)){
                        filtroDietas.push(receta)
                    }
                })
            })

            return{
                ...state,
                recipes: filtroDietas
            }
        case 'QUITAR_FILTROS':
            return {
                ...state,
                recipes: state.recipesAux
            }
        case 'ORDEN_ALFA':
            var ordenados = state.recipes;
            if(payload === 'A-Z'){
                ordenados = ordenados.sort((a, b)=> {
                    if(a.name < b.name) return -1;
                    if(a.name > b.name) return 1;
                    return 0
                })
            }
            if(payload === 'Z-A'){
                ordenados = ordenados.sort((a, b)=> {
                    if(a.name < b.name) return 1;
                    if(a.name > b.name) return -1;
                    return 0
                })
            }
            return {
                ...state,
                recipes: ordenados
            }
        case 'ORDEN_HS':
            var ordenadosHS = state.recipes;
            if(payload === 'Ascendente'){
                ordenadosHS = ordenadosHS.sort((a, b)=> a.health_Score - b.health_Score)
            }
            if(payload === 'Descendente'){
                ordenadosHS = ordenadosHS.sort((a, b)=> b.health_Score - a.health_Score)
            }
            return {
                ...state,
                recipes: ordenadosHS
            }
        case 'PREV_PAGE':
            return {
                ...state,
                pagActual: state.pagActual-1
            }
        case 'NEXT_PAGE':
            return {
                ...state,
                pagActual: state.pagActual+1
            }
        case 'SEARCH_RECIPE':
            return {
                ...state,
                recipes: payload
            }
         default: 
         return state;   
    }
}