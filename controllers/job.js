const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

//Get api/jobs
router.get('/', (req, res) => {
	Job.find().then((jobs) => res.json(jobs));
});

router.get('/:id', (req, res) => {
	Job.findById(req.params.id).then((job) => res.json(job));
});

router.post('/', (req, res) => {
	Job.create(req.body).then((job) => res.json(job));
});

router.put('/:id', (req, res) => {
	Job.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((job) => res.json(job));
});

router.delete('/:id', (req, res) => {
	Job.findByIdAndDelete(req.params.id).then((job) => res.json(job));
});

module.exports = router;
