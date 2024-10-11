import express, { Router } from 'express';

import { ticketsRouter } from './tickets';

const openRoutes: Router = express.Router();

openRoutes.use('/tickets', ticketsRouter);

export { openRoutes };
