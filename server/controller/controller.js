
const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: String,
});
const Task = mongoose.model('Task', TaskSchema);

const addTask = (req, res) => {
    const { title } = req.body;

    const task = new Task({
        title: title,

    });

    task.save()
        .then(() => console.log('task created'))
        .catch(err => console.error('Could not create Task', err));

}

const showTask = (req, res) => {
    Task.find()
        .then(tasks => res.send(tasks))
        .catch(err => res.status(500).send(err.message));
}

module.exports = { addTask, showTask };