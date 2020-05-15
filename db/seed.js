const Job = require('../models/Job')

const seedData = require('./seed.json')

Job.deleteMany()
.then(()=> Job.insertMany(seedData))
.then(console.log)
.catch(console.error)
.finally(process.exit)
