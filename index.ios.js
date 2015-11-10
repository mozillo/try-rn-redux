'use strict';

var React = require('react-native');
var App = require('./src/containers/App');
var {
  AppRegistry,
} = React;

var MarryNovoRedux = React.createClass({
  render: function() {
    return (
      <App />
    );
  }
});

AppRegistry.registerComponent('MarryNovoRedux', () => MarryNovoRedux);
