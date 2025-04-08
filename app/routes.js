
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/routes-v1')(router);
require('./routes/routes-v2')(router);
require('./routes/routes-v3')(router);
require('./routes/routes-v4')(router);
require('./routes/routes-v5')(router);
module.exports = router
