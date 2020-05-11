var express = require('express');
var fs = require('fs');
var router = express.Router();

var titles;

fs.readdir('././resource', function(err, files) {
    titles = files;
});

/* GET login page. */
router.get('/', function(req, res, next) {
    if(req.signedCookies.loggedin === 'true') {
        res.render('list', { title: 'Listing', titles: titles});
    } else {
        res.send('<script>window.location.href=\'/login\'</script>');
    }
});

module.exports = router;
