const router = require('express').Router();
const { Workout } = require('../../models');

router.get('/workouts', async ({ body }, res) => {
    Workout.aggregate([{
        $addFields: { totalDuration: {$sum: "$exercises.duration" } }
    }])
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/workouts/range', async (req, res) => {
    Workout.aggregate([{
        $addFields: { totalDuration: {$sum: "$exercises.duration" } }
    }])
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/workouts', ({ body }, res) => {
    Workout.create(body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put('/workouts/:id', async  ({ body, params }, res) => {
    try {
        const workout = await Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body }})
        res.json(workout);
    } catch (err) {
        res.json(500).json(err);
    }
});

module.exports = router;