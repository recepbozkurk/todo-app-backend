var express = require('express');
var router = express.Router();

const Todos = require('../models/Todos');

router.get('/get-todos', function (req, res, next) {
    const promise = Todos.find({ text: { $ne: 'IntegrationTestDataCode001' } })

    promise.then((data) => {
        res.json(data)
    }).catch((error) => {
        res.json(error)
    })
});

router.get('/', (req, res) => {
    res.append('Content-Type', 'application/json').status(200).send({
        _id: "1",
        isComplete: false,
        text: "do something"
    });
});

router.post('/', (req, res) => {
    res.append('Content-Type', 'application/json').status(200).send({
        _id: "1",
        isComplete: false,
        text: "do something"
    });
});

router.post('/create-todo', (req, res) => {
    const { text } = req.body

    const todo = new Todos({
        text: text,
        isComplete: false
    })

    const promise = todo.save()

    promise.then((data) => {
        res.json({ status: true })
    }).catch((error) => {
        res.json(error)
    })
})


//Dev Delete
router.get('/deleteManyForDev', (req, res) => {
    const promise = Todos.deleteMany({})

    promise.then((data) => {
        res.json({ msg: "All todos deleted.." })
    }).catch((error) => {
        res.json(error)
    })
})

module.exports = router;