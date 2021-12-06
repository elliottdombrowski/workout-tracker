const router = require('express').Router();
const sess = require('../../models/Session');

router.post('/workouts', ({ body }, res) => {
    sess.Session.create(body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;