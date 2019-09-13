import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerui from 'swagger-ui-express';
import userRoutes from './routes/userRoute';
import sessionroutes from './routes/sessionRoutes';
import reviewroutes from './routes/reviewRoutes';
import swaggerdocument from '../swagger.json';

dotenv.config();

const app = express();

app.use(bodyParser.json());


app.use('/api/v1', userRoutes);
app.use('/api/v1', sessionroutes);
app.use('/api/v1', reviewroutes);

app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerdocument));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

export default app;
