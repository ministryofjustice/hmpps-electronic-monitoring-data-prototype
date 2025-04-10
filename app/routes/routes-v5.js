module.exports = function (router) {

    var version = '/v5';

    router.post(version +'/setup', function(req, res) {
    ///////CREATE//////////
res.redirect(version +'/home-nav')
        });


router.post(version +'/predictions/graph0', function(req, res) {
    ///////CREATE//////////
    res.redirect(version +'/home-nav')
        });


    }
