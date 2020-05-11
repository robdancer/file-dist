var express = require('express');
var path = require('path');
var fs = require('fs');
var router = express.Router();

var titles;

fs.readdir('././resource', function(err, files) {
    titles = files;
});

/* GET login page. */
router.get('/:title', function(req, res, next) {
    if(titles.indexOf(req.params.title) > -1) {
        if(req.signedCookies.loggedin === 'true') {
            res.sendFile(path.join(__dirname, '..', 'resource', req.params.title));
        } else {
            res.send('<script>window.location.href=\'/login\'</script>');
        }
    } else {
        res.send('<script>window.location.href=\'/list\'</script>');
    }
});

module.exports = router;
