/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/accounts              ->  index
 */

'use strict';

// Gets a list of Accounts
exports.index = function(req, res) {
  res.json([]);
}
