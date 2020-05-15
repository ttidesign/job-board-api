const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const jobController = require('./controllers/job');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', jobController);
app.set('port', process.env.PORT || 4000);

app.listen(4000, () => {
	console.log(' app running on port 4000');
});
