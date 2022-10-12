'use strict';


/**
 * Server example operation
 * This is an example operation to show how security is applied to the call. This is a new change.
 *
 * returns String
 **/
exports.exampleGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Server heartbeat operation
 * This operation shows how to override the global security defined above, as we want to open it up for all users.
 *
 * no response value expected for this operation
 **/
exports.pingGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

