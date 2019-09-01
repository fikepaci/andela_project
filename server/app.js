import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route';
import sessionroutes from './routes/session.routes';
import reviewroutes from './routes/review.routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());


app.use('/api/v1', userRoutes);
app.use('/api/v1', sessionroutes);
app.use('/api/v1', reviewroutes);


export default app;
