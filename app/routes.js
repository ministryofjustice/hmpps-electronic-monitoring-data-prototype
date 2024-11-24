
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/routes-v1')(router);
require('./routes/routes-v2')(router);

module.exports = router
