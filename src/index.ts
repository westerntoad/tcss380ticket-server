import express, { Express, Request, Response } from 'express';

import cors from 'cors';

import { routes } from './routes';

const app: Express = express();

const PORT: number = parseInt(process.env.PORT) || 4001;

app.use(cors());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routes);

app.get('/', (request: Request, response: Response) => {
    response.send('<html><h1>testing</h1></html>');
});

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});
