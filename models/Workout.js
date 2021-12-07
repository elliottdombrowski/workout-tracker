const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                require: true,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            distance: {
                type: Number,
                require: true,
            },
            duration: {
                type: Number,
                require: true,
            },
        }
    ],
});

const Workout = mongoose.model('Workout', WorkoutSchema)
module.exports = Workout;