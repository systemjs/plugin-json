/*
  JSON plugin
*/
module.exports = function(name, address, fetch, callback, errback) {
  fetch(address, function(json) {
    callback('module.exports = ' + JSON.stringify(JSON.parse(json)) + ';');
  }, errback);
}