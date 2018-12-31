import express from 'express';
import parser from 'body-parser';
import { axios } from './libraries';
import { users, posts } from './services';
import { authenticate } from './middlewares';

export const app = express();

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// parser application/json
app.use(parser.json())

/**
 * Users routes
 */
const usersHandlers = users(axios);

app.get('/users', usersHandlers.GET);
app.post('/users', usersHandlers.POST);
app.put('/users/:id', usersHandlers.PUT);
app.delete('/users/:id', usersHandlers.DELETE);

/**
 * Post routes
 */
const postsHandlers = posts(axios);

app.post('/posts', authenticate, postsHandlers.POST);

/**
 * Other routes
 */

app.listen(3000, () => {
  console.log('Application listening on port 3000');
});
