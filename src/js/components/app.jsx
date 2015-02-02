'use strict';

var RB = ReactBootstrap;

var App = React.createClass({
  render: function() {
    return (
      /* jshint ignore:start */
      <div id="app" className="container">
        <RB.PageHeader>
          <h1>Page Header</h1>
        </RB.PageHeader>
      </div>
      /* jshint ignore:end */
    );
  }
});


exports.App = App;
