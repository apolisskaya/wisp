var express = require('express');
var router = express.Router();

/* GET exercises listing.
Returns list of all exercises.
If filters are supplied, only return exercises matching filters.
*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Get exercises by workout ID.
Returns list of exercises.
*/
router.get('/:workoutId', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;
