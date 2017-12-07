'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var name = './User';
// const name = './Programmer'

_promise2.default.resolve().then(function () {
  return require(name + '.js');
}).then(function (Module) {
  var u = new Module.default('John');
  console.log(u.hello());
}).catch(function (err) {
  console.log(err.message);
});