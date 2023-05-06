
import mongoose from 'mongoose';
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: String,
    // required: true
});
const Task = mongoose.model('Task', TaskSchema);

const addTask = (req, res) => {
    const { title } = req.body;

    const task = new Task({
        title: title,

    });

    task.save()
        .then(() => res.json('task created'))
        .catch(err => console.error('Could not create Task', err));

}

const showTask = (req, res) => {
    Task.find()
        .then(tasks => res.send(tasks))
        .catch(err => res.status(500).send(err.message));
}
const deleteTask = (req, res) => {
    const _id = req.params;
    Task.deleteOne({ _id: req.params })
        .then(tasks => res.send(tasks))
}

export { addTask, showTask, deleteTask };