'use strict';

var RR = ReactRouter;

var appRoute = require('./routes/app');

RR.run(appRoute, function(Handler) {
  React.render(
    /* jshint ignore:start */
    <Handler />
    , document.body
    /* jshint ignore:end */
  );
});
