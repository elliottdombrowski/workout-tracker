const router = require('express').Router();

router.get('/exercise', (req, res) => {
    try {
        console.log('trying');
        res.sendFile(path.join(__dirname+ '/index.html'));
    } catch (err) {
        console.log(err);
    }
})