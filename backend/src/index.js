const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * HTTP Methods:
 *
 * GET: Buscar/Listar uma info do backend (ex: listagem, dado de usuario, etc)
 * POST: Criar uma info no backend (ex: criar novo usuario, etc)
 * PUT: Alterar uma info no backend
 * DELETE: Deletar uma info no backend
 */

/**
 * Tipos de parametros:
 *
 * Query Params: Parametros nomeados enviados na rota/url apos "?" (uso: Filtros, paginacao) (ex: teste "/users?name=Wilson" = enviar dentro do insomnia, nao do nodejs) (request disponibiliza o acesso de todos os parametros enviados)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos (ex: task: criar usuario, request body = email, senha, etc)
 */