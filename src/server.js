import express from 'express';
import parser from 'body-parser';
import axios from 'axios';
import { users } from './services';

const app = express();

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// parser application/json
app.use(parser.json())

/**
 * Users routes
 */
const usersHandlers = users(axios);

app.get('/', usersHandlers.GET);
app.post('/', usersHandlers.POST);
app.put('/:id', usersHandlers.PUT);
app.delete('/:id', usersHandlers.DELETE);

/**
 * Other routes
 */

app.listen(3000, function () {
  console.log('Application listening on port 3000');
});
