import listen from './server.listen';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import compression from 'compression';
import {api} from './routes/api';

const app = express();

app.use(express.static(__dirname + '../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compression());
app.use(logger('dev'));

app.use('/api', api);

app.get('/echo/:thing', (req, res)=> {
	let responseText = req.params.thing;

	res.status(200).json({echo: responseText});
});

listen(app);

exports = module.exports = app;
