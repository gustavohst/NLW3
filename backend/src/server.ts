import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

app.get('/users/:id', (request, response) => {
   return response.json({ massage: "Hello Gustavo"});
})

app.listen(3333);
