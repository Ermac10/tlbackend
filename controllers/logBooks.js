const Logs = require('../models/logBook');
const router = require('express').Router();




router.get('/', async (req, res) => {
try {
    res.status(200).json(await Logs.find({}))
} catch (error) {
    res.status(400).json({ message: 'bad request' })
}
})
// CREATE
router.post('/', async (req, res) => {
try {
    res.status(201).json(await Logs.create(req.body));
} catch(error) {
    res.status(400).json({ message: 'bad request' })
}
})
// DELETE
router.delete('/:id', async (req, res) => {
try {
    res.status(200).json(await Logs.findByIdAndRemove(req.params.id))
} catch (error) {
    res.status(400).json({ message: 'bad request'})
}
})

// UPDATE
router.put('/:id', async (req, res) => {
try {
    res.status(200).json(await Logs.findByIdAndUpdate(req.params.id, req.body, { new:true })
    );
} catch (error) {
    res.status(400).json({ message: 'bad request'})
}
})

module.exports = router