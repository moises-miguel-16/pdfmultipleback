const { Router } = require('express');

const { getInformacion,getInformacionDetalle } = require('../controllers/usuarios');

const router = Router();

router.post( '/', getInformacion );
router.get( '/:id', getInformacionDetalle );


module.exports = router;