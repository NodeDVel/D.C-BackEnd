import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';

dotenv.config();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/status', (req, res) => {
  res.json({
    success: true,
    status: 200
  });
});


export default app;