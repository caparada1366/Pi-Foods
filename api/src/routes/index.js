const { Router } = require('express');
const {getRecipeByID} = require('./controllers')
require('dotenv').config();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//Esta ruta obtiene el detalle de una receta específica.
//Es decir que devuelve un objeto con la información pedida en el detalle de una receta
router.get('/recipes/:idRecipe', cb);

//Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query.
//(No es necesario que sea una coincidencia exacta).
router.get('/recipes', cb);

//Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla 
//con los tipos de dieta solicitados.
router.post('/recipes', cb)

//Esta ruta obtiene un arreglo con todos los tipos de dietas
router.get('/diets', cb)



module.exports = router;
