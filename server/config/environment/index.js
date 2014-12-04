'use strict';

var path = require('path');
var _ = require('lodash');

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 8000,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'project-secret'
  },

  // List of user roles

  facebook: {
    // clientID:     process.env.FACEBOOK_ID || 'id',
    // clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    // callbackURL:  (process.env.DOMAIN || '') + '/auth/facebook/callback'
  },

  twitter: {
    // clientID:     process.env.TWITTER_ID || 'id',
    // clientSecret: process.env.TWITTER_SECRET || 'secret',
    // callbackURL:  (process.env.DOMAIN || '') + '/auth/twitter/callback'
  },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
  all,
  require('./' + process.env.NODE_ENV + '.js') || {});
