const { response } = require('express');

const usuariosGet = (req, res = response) => {

  const query = req.query;

  res.json({
    msg: 'get',
    query
  });
  }

  const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
      msg: 'put',
      id
    });
  }

  const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
      msg: 'post',
      body
    });
  }

  const usuariosDelete = (req, res = response) => {
    res.json({msg: 'delete'});
  }

  module.exports = {
      usuariosDelete,
      usuariosGet,
      usuariosPost,
      usuariosPut
  }