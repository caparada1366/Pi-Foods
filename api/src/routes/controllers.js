const {API_KEY} = process.env;          //Se trae la KEY de la API para procesar los requests
const axios = require('axios')
const{Recipe, Diets} = require('../db')


//Controller para obtener receta por id

async function getRecipeByID(req, res){
    var id = req.params.idRecipe;
    id = Number(id);
    try{
        //Buscamos en la BD                         Verificar su el include está bien
        const response = await Recipe.findByPk(id, {include: Diets});
        if(response){
            res.status(200).json(response);
        }else{
            const responseAPI = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`);
            if(responseAPI){
                const data = responseAPI.data;
                //funcion para obtener el paso a paso en un formato mas simple
                const pasoApaso = function(){
                    var pasos =[]
                    var aux = data.analyzedInstructions[0];
                    aux.steps.forEach(st => {
                        pasos.push(st.number +". "+ step.step)
                    });
                    return pasos.join(',');
                }

                const auxRecipe = {
                    id: data.id,
                    name: data.title,
                    image: data.image,
                    summary: data.summary,
                    health_Score: data.healthScore,
                    stepByStep: pasoApaso
                }
                return res.status(200).json(auxRecipe);
            }
            else{
                return res.status(404).send(`La receta con id ${id} no existe`);
            }    
        }
    }catch(err){
        return res.status(404).send(err.message);
    }
}

module.exports ={
    getRecipeByID,
}