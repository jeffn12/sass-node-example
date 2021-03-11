const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello!');
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
	console.log('Server listening at: http://localhost:' + PORT);
});
