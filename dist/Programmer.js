"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _User2 = require("./User");

var _User3 = _interopRequireDefault(_User2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Programmer = function (_User) {
  (0, _inherits3.default)(Programmer, _User);

  function Programmer() {
    (0, _classCallCheck3.default)(this, Programmer);
    return (0, _possibleConstructorReturn3.default)(this, (Programmer.__proto__ || (0, _getPrototypeOf2.default)(Programmer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Programmer, [{
    key: "hello",
    value: function hello() {
      return 'world';
    }
  }]);
  return Programmer;
}(_User3.default);

exports.default = Programmer;