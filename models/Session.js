const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SessionSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    session: [
        {
            exercise_name: {
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
    duration: {
        type: Number,
    },
});

const Session = mongoose.model('Session', SessionSchema)
module.exports = Session;