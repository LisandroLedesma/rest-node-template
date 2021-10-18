const {Router} = require('express');
const router = Router();

const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../controllers/user');

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/:id', usuariosPut);

router.delete('/', usuariosDelete);

module.exports = router;