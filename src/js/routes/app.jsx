'use strict';

var RR = ReactRouter;

var App = require('../components/app').App;

var appRoute = (
  /* jshint ignore:start */
  <RR.Route handler={App} path="/"></RR.Route>
  /* jshint ignore:end */
);


module.exports = appRoute;
