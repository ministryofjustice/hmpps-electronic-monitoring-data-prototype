module.exports = function (router) {

    var version = '/v3';

    router.post(version +'/setup', function(req, res) {
    ///////CREATE//////////
res.redirect(version +'/home-nav')
        });


router.post(version +'/1', function(req, res) {
    ///////CREATE//////////
    if(req.session.data.toggleToDataValue !=='data' && req.session.data.toggleToDataValue !=='graph' ){
        req.session.data.toggleToDataValue ='graph'
    }
   else if(req.session.data.toggleToDataValue =='data'){
        req.session.data.toggleToDataValue ='graph'
    }
    else if(req.session.data.toggleToDataValue =='graph'){
        req.session.data.toggleToDataValue ='data'
    }
    else{
        req.session.data.toggleToDataValue ='none'
    }
    });


    }
