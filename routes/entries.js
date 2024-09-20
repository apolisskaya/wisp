var express = require('express');
var router = express.Router();

/* GET entries listing.
Returns all entries.
*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST entries.
Creates new entry.
*/
router.post('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Get entry by ID.
Returns entry matching id.
*/
router.get('/:entryId', function(req, res, next) {
    res.send(req.params);
});

/* Update entry by ID.
Returns entry matching id.
*/
router.post('/:entryId', function(req, res, next) {
    res.send(req.params);
});

/* Archive entry by ID.
Returns entry matching id.
*/
router.delete('/:entryId', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;
