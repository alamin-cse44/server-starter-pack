import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { BikeRoutes } from './app/modules/bike/bike.route';

// parser
app.use(express.json());
app.use(cors());

// application routing 
app.use('/api/v1/bikes', BikeRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
