const express = require ('express');
const Job = require('../models/Job')
const router = express.Router();

//Get api/jobs
router.get('/', (req,res)=>{
    Job.find().then((jobs)=>res.json(jobs))
})




module.exports = router;