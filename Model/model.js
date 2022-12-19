const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLen: 2
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("taskModel", taskSchema);