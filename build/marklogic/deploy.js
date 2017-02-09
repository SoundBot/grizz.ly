var req = require('request-promise-native');
var config = require('../../config/mlconfig.json');

req({
  uri: `http://${config.hostname}:${config.port}/manage/v2/databases`,
  method: 'GET',
  auth: {
      user: config.login,
      password: config.password,
      sendImmediately: false
  },
  body: { 'database-name': config.database },
  json: true
}).then(data => console.log(data)).catch(e => console.error(e));
