import express from 'express';

let api = express();

api.get('/add/:x/:y', (req, res) => {
	const x = req.params.x * 1;
	const y = req.params.y * 1;
	let sum = x + y;
	res.status(200).json({sum});
});


api.route('/products')
	.get((req, res) => {
		res.status(200).json({message: 'api is working well'});
	})
	.post((req, res) => {
		res.status(200).json({message: 'api is working like hell'});
	});


export {api};