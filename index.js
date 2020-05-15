const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const jobController = require('./controllers/job');
const {handleErrors, handleValidationErrors} = require('./middleware/custom_error')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/jobs', jobController);
app.use((err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})
app.get('/', (req,res)=> res.redirect('/api/jobs'))
app.set('port', process.env.PORT || 4000);

app.use(handleValidationErrors)
app.use(handleErrors)

app.listen(4000, () => {
	console.log(' app running on port 4000');
});
