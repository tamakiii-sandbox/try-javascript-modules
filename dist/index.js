'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = function () {
  function A(name) {
    (0, _classCallCheck3.default)(this, A);

    this.name;
  }

  (0, _createClass3.default)(A, [{
    key: 'say',
    value: function say() {
      console.log(this.name);
    }
  }, {
    key: 'sayHello',
    value: function sayHello() {
      console.log('Hello, ' + this.name);
    }
  }]);
  return A;
}();