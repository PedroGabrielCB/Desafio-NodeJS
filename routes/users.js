const express = require('express');
const router = express.Router();

router.get('/mostrar', function(req, res, next) {
  res.send(`O endpoint solicitado foi: ${req.url} e o metodo utilizado foi o ${req.method}`);
});

router.post('/adicionar', function(req, res, next) {
  res.send(`O endpoint solicitado foi: ${req.url} e o metodo utilizado foi o ${req.method}. O usuário de ID ${req.body.id} foi adicionado com sucesso!. Dados: ${JSON.stringify(req.body)}`);
});

router.put('/editar/:id', function(req, res, next) {
  res.send(`O endpoint solicitado foi: ${req.url} e o metodo utilizado foi o ${req.method}. O usuário de ID ${req.params.id} foi atualizado com sucesso!. Dados Atualizados: ${JSON.stringify(req.body)}`);
});

router.delete('/deletar/:id', function(req, res, next) {
  res.send(`O endpoint solicitado foi: ${req.url},o metodo utilizado foi o ${req.method} e foi solicitado a deleção do usuário de ID: ${req.params.id}`);
});

module.exports = router;
