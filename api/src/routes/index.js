const { Router } = require('express');
const dogsRouter= require('./allDogs')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', dogsRouter)

module.exports = router;
