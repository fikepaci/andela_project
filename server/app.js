import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerui from 'swagger-ui-express';
import userRoutes from './routes/user.route';
import sessionroutes from './routes/session.routes';
import reviewroutes from './routes/review.routes';
import swaggerdocument from '../swagger.json';

dotenv.config();

const app = express();

app.use(bodyParser.json());


app.use('/api/v1', userRoutes);
app.use('/api/v1', sessionroutes);
app.use('/api/v1', reviewroutes);

app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerdocument));

export default app;
