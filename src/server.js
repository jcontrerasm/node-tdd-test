import express from 'express';
import parser from 'body-parser';
import { users } from './services';

const app = express();

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// parser application/json
app.use(parser.json())

app.get('/', users.GET);
app.post('/', users.POST);
app.put('/:id', users.PUT);
app.delete('/:id', users.DELETE);

app.listen(3000, function () {
  console.log('Application listening on port 3000');
});
