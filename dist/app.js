'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _Person2 = require('./Person');

var _Person3 = _interopRequireDefault(_Person2);

var _app = require('./app.css');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Friend = function (_Person) {
  (0, _inherits3.default)(Friend, _Person);

  function Friend() {
    (0, _classCallCheck3.default)(this, Friend);
    return (0, _possibleConstructorReturn3.default)(this, (Friend.__proto__ || (0, _getPrototypeOf2.default)(Friend)).apply(this, arguments));
  }

  (0, _createClass3.default)(Friend, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }, {
    key: 'getUrl',
    value: function getUrl() {
      return require('file-loader!../asset/31a-dohm+bL._AA168_.jpg');
    }
  }]);
  return Friend;
}(_Person3.default);
// import img from 'file-loader!../asset/31a-dohm+bL._AA168_.jpg'


var friend = new Friend('John');
var image = document.createElement('img');
image.src = '../dist/' + friend.getUrl();

document.body.appendChild(image);
console.log(_app2.default);