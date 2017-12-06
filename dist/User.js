'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = function () {
  function User(name) {
    (0, _classCallCheck3.default)(this, User);

    this.name;
  }

  (0, _createClass3.default)(User, [{
    key: 'hello',
    value: function hello() {
      return 'hello, how are you?';
    }
  }]);
  return User;
}();

exports.default = User;