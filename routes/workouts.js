var express = require('express');
var router = express.Router();

/* GET workouts listing.
Returns all workouts.
*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST workouts.
Creates new workout.
*/
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Get workout by ID.
Returns workout matching id.
*/
router.get('/:workoutId', function(req, res, next) {
    res.send(req.params);
});

/* Update workout by ID.
Returns workout matching id.
*/
router.post('/:workoutId', function(req, res, next) {
    res.send(req.params);
});

/* Archive workout by ID.
Returns workout matching id.
*/
router.delete('/:workoutId', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;
